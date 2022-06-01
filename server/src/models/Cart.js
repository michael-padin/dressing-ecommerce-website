
import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    product: {type: Array},
    totalPrice: {type: String}
  },
  { timestamps: true }
);

export default mongoose.model("Cart", CartSchema);