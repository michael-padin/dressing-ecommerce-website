import Cart from "../models/Cart.js";

// CREATE CART
export const addCart = async (req, res) => {
  const {products, quantity, userId, totalPrice} = req.body;

  try {
    
    let result = await Cart.findOne({ userId: userId });
    
    if (result) {
      
    await Cart.updateOne({ userId: userId },{ $push: { products: { $each: [products], $position: 0 } } },);
    
    const finalPrice = await Cart.aggregate([ {$match: {'userId': userId }},{$unwind: "$products"}, {$group: {_id: null, totalPrices: {$sum: "$products.totalPrice"}}}]);
    
    await Cart.updateOne({userId: userId },{ $set: {'totalPrice': finalPrice[0].totalPrices}},);

    const newResult = await Cart.findOne({ userId: userId});
    
    res.status(200).json(newResult);

  } else {  
    
    await Cart.create({products, quantity, userId, totalPrice});
 
    const finalPrice = await Cart.aggregate([ {$match: {'userId': userId }},{$unwind: "$products"}, {$group: {_id: null, totalPrices: {$sum: "$products.totalPrice"}}}]);
    
    await Cart.updateOne({userId: userId },{ $set: {'totalPrice': finalPrice[0].totalPrices}},);
  
    const newResult = await Cart.findOne({ userId: userId })

    res.status(200).json(newResult);
    


  }

} catch (error) {
 res.status(500).json({message: "Something went wrong,"});   
}
};



//GET USER CART
export const getUserCart = async (req, res) => {
  try {
    const userCart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(userCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET ALL CARTS
export const getAll = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
};


// UPDATE CART
export const updateCart = async (req, res) => {
  const {quantity, productId, productSize, userId} = req.body;

  try {
    const newCartProduct =  await Cart.aggregate([
      {$unwind: '$products'},
      {$match: {'products._id' : productId, 'products.size': productSize}},
      {$project: {
        _id: null, 
        newQuantity: {$sum: ["$products.quantity", quantity]}, 
        productTotalPrice: {$multiply: ["$products.price", {$sum: ["$products.quantity", quantity]}]},      }},
    ]);
    
    await Cart.updateOne({userId: userId, "products.size": productSize}, {$set: {"products.$.quantity": newCartProduct[0].newQuantity, "products.$.totalPrice": newCartProduct[0].productTotalPrice}})
      
    const productsTotalPrice = await Cart.aggregate([
      {$match: {'userId': userId }},
      {$unwind: '$products'},
      {$project: {_id: null, totalPrice: {$sum: "$products.totalPrice"}}}
    ])

    await Cart.updateOne({userId: userId}, {$set: {totalPrice: productsTotalPrice[0].totalPrice}});
    
    const result = await Cart.findOne({userId: userId});

    res.status(200).json(result);

  } catch (error) {
    res.status(500).json(error);
  }
};

//DELETE CART
export const deleteCart = async (req, res) => {
  const {productId, userId, size, productPrice} = req.body;
  try {
    const result = await Cart.findOne({userId: userId});

    if(Object.keys(result.products).length === 1){
      
    await Cart.deleteOne({ userId: userId});

    res.status(200).json({products: [], totalPrice: 0});

    }else {
      await Cart.updateOne({ userId: userId }, {$pull: { "products": { "_id": productId, "size": size } } });
      // @ts-ignore
      const updatedTotalPrice = await Cart.aggregate([{$match: {'userId': userId }},{ $project: { _id: 0,  totalPrice: { $subtract: [ "$totalPrice", productPrice ] } } }])
  
      await Cart.updateOne({ userId: userId }, {$set: { totalPrice:  updatedTotalPrice[0].totalPrice} });
      
      const result = await Cart.findOne({userId: userId});
      res.status(200).json(result);
    };
  } catch (error) {
    res.status(500).json({message: "Something went wrong"});
  }
};
