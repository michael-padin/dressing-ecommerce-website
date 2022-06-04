
import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: {type: Array},
    quantity: {type: Number},
    totalPrice: {type: Number, default: 0}
  },
  { timestamps: true }
);

export default mongoose.model("Cart", CartSchema);