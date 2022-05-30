import Product from "../models/Product.js";

// CREATE PRODUCT
export const createProduct = async (req, res) => {

  try {
    const createdProduct = await Product.create(req.body);
    res.status(200).json(createdProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

//DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    await Product.findByIdAndDelete(productId);
    res.status(200).json("Product has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET PRODUCT
export const getProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const selectedProduct = await Product.findById(productId);
    res.status(200).json(selectedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};


// GET  PRODUCTS BY SEARCHQUERY           
export const getProductsBySearch = async (req, res) => {
  const searchQuery = req.query.searchQuery;
  const title = new RegExp(searchQuery, "i");

  try {                 
    const products = await Product.find({$or: [{title: title},{ categories: { $in: [title]}}]})

    res.status(200).json({data: products});

  } catch (error) {
    res.status(500).json(error);
  }
}


//GET PRODUCTS AND QUERY
export const getProducts = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;

  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: 1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({ categories: { $in: [qCategory] } });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};