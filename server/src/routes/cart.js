import express from 'express';
const router = express.Router();

// controllers
import { addCart, updateCart, deleteCart, getAll } from '../controllers/cart.js';

// middleware
// import { auth} from "../middleware/auth.js";

// add cart
router.post("/cart",addCart);
// add cart
router.get("/cart",  addCart);

// get user Cart
router.put("/find/:userId", deleteCart);

// update cart
router.put("/:id",  updateCart);

// delete cart
router.put("/:id",  deleteCart);



export default router;
