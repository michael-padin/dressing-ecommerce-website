import express from 'express';
const router = express.Router();

// controllers
import {createProduct, updateProduct, deleteProduct, getProduct, getProducts, getProductsBySearch} from "../controllers/product.js";


// create product
router.post("/",  createProduct);

// get all products
router.get("/", getProducts);

router.get("/search", getProductsBySearch);
// api/products/search?query
// get product
router.get("/find/:id", getProduct);

// update products
router.put("/:id",  updateProduct);

// delete product
router.delete("/:id",  deleteProduct);



export default router;