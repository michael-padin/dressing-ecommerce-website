import express from 'express';
const router = express.Router();

// controllers
import { addCart, updateCart, deleteCart, getAll, getUserCart } from '../controllers/cart.js';

// middleware
// import { auth} from "../middleware/auth.js";

// add cart
router.post("/cart",addCart);

// get cart
router.get("/cart",  addCart);

// get user Cart
router.get("/cart/find/:userId", getUserCart);

// update item in cart
router.post("/cart/updatecart/:userId",  updateCart);

// delete item in cart
router.post("/cart/deletecart/:userId",  deleteCart);



export default router;
