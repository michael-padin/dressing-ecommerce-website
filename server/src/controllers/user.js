import User from "../models/User.js";
import CryptoJS from "crypto-js";

//REGISTER USER
export const registerUser = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    // check is user exists
    const existingUser = await User.findOne({  email });
    if (existingUser) return res.status(403).json({message:"User already exists."});

    const hashedPassword = CryptoJS.AES.encrypt(password, process.env.PASS_SEC);

    const result = await User.create({name,email,password: hashedPassword});

    res.status(201).json({result});

  } catch (err) { 
    console.log(err);
    res.status(500).json({message: "Something went wrong"});
  }
};


//LOGIN USER
export const loginUser = async (req, res) => {
  const { email } = req.body;

  try { 
    // check if user exist
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.status(401).json({message: "User does not exist"});

    //decrypt password
    const hashedPassword = CryptoJS.AES.decrypt(existingUser.password,process.env.PASS_SEC);

    // compare the entered password if match the original password
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    if (originalPassword !== req.body.password) return res.status(400).json({message:"Invalid credentials"});

    //hide password in response
    const { password, isAdmin, ...others } = existingUser._doc;

    res.status(200).json({ ...others, email, });;

  } catch (err) {
    res.status(500).json({message: "Something went wrong"});
  }
};




