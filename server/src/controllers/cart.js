import Cart from "../models/Cart.js";

// CREATE CART
export const addCart = async (req, res) => {
  try {
    const addedCart = await Cart.create(req.body);
    res.status(200).json(addedCart);
  } catch (error) {
    res.status(500).json(error);
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
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

//DELETE CART
export const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};