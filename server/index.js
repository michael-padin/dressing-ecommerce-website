import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
dotenv.config();

import cartRoute from "./src/routes/cart.js";
import userRoute from "./src/routes/user.js";
import ProductRoute from "./src/routes/product.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/", userRoute);
app.use("/", ProductRoute);
app.use("/", cartRoute);

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB connections successful")).catch((err) => console.log(err));

export default app;
