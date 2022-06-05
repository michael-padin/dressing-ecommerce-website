import express from "express";
const router = express.Router();
import {loginUser,registerUser} from "../controllers/user.js";

//register user 
router.post("/register", registerUser);

//login user
router.post("/login", loginUser);


export default router;