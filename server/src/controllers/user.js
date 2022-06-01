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


// UPDATE USER
export const updateUser = async (req, res) => {
  const {email} = req.body;
  const existingUser = await User.findOne({ email });

  const hashedPassword = CryptoJS.AES.decrypt(existingUser.password,process.env.PASS_SEC);

  const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
  if (originalPassword !== req.body.currentPassword) return res.status(400).json({message:"Invalid credentials"});

  // if password is change then encrypt again
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body},
      { new: true }
    );

    res.status(200).json({message: "Password updated!"});
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET SPECIFIC USER
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

