import express from "express";
const router = express.Router();
import {loginUser,registerUser,updateUser,getUser} from "../controllers/user.js";

// middleware
// import { auth } from "../middleware/auth.js";

//register user 
router.post("/register", registerUser);

//login user
router.post("/login", loginUser);

// update user
router.put("/:id",  updateUser);

// delete user
// router.delete("/:id", auth, deleteUser);

// get user
router.get("/find/:id",  getUser);




export default router;