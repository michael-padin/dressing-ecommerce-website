import express from 'express';
const router = express.Router();

// controllers
import {createProduct, getProduct, getProducts} from "../controllers/product.js";


// create product
router.post("/products",  createProduct);

// get all products
router.get("/products", getProducts);

// get product
router.get("/products/find/:id", getProduct);


export default router;