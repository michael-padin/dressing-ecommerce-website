import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

// import cartRoute from "./src/routes/cart.js";
import userRoute from "./src/routes/user.js";
// import ProductRoute from "./src/routes/product.js";


const app = express();
const port =  process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use("/",userRoute);




mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB connections successful")).catch((err) => console.log(err));

app.listen(port, () => console.log(`Server is running at ${port}`));