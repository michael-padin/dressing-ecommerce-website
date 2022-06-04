import Cart from "../models/Cart.js";

// CREATE CART
export const addCart = async (req, res) => {
  const {products, quantity, userId} = req.body;

  try {
    
    
    const singleProductTotalPrice = products.price * products.quantity;
    let result = await Cart.find({ userId: userId });
    
    if (result.length > 0) {
      
    await Cart.updateOne({ userId: userId },{ $push: { products: { $each: [products], $position: 0 } } },);

    await Cart.updateOne({ userId: userId },{ $set: {'products.0.totalPrice': singleProductTotalPrice}});
    
    const finalPrice = await Cart.aggregate([{$unwind: "$products"}, {$group: {_id: null, totalPrices: {$sum: "$products.totalPrice"}}}]);
    
    await Cart.updateOne({userId: userId },{ $set: {'totalPrice': finalPrice[0].totalPrices}},);
    
    console.log(result);

  } else {  
    
    await Cart.create({products, quantity, userId});
 
    await Cart.updateOne({ userId: userId },{ $set: {'products.0.totalPrice': singleProductTotalPrice}});
  
    const finalPrice = await Cart.aggregate([{$unwind: "$products"}, {$group: {_id: null, totalPrices: {$sum: "$products.totalPrice"}}}]);
    
   await Cart.updateOne({userId: userId },{ $set: {'totalPrice': finalPrice[0].totalPrices}},);


  console.log(result);

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
  const {quantity, index, userId, productId, productSize} = req.body;
  
  try {

      
// /*  */    res.status(200).json(foundCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

//DELETE CART
export const deleteCart = async (req, res) => {
  const {productId, userId, size} = req.body;

  try {
 // @ts-ignore
 await Cart.updateOne({ userId: userId }, {$pull: { "products": { "_id": productId, "size": size } } });
    res.status(200).json("Cart has been deleted...");
  } catch (error) {

    res.status(500).json({message: error.message});
  }
};
