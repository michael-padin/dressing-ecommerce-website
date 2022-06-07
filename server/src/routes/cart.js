import express from 'express';
const router = express.Router();

// controllers
import { addCart, updateCart, deleteSingleCart, getUserCart, deleteCart } from '../controllers/cart.js';


// add cart
router.post("/cart",addCart);

// get cart
router.get("/cart",  addCart);

// get user Cart
router.get("/cart/find/:userId", getUserCart);

// update item in cart
router.post("/cart/updatecart/:userId",  updateCart);

// delete item in cart
router.post("/cart/deletecart/:userId",  deleteSingleCart);

// remote all items in cart;
router.post("/cart/deletecarts/:userId",  deleteCart);



export default router;
