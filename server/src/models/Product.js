import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, },
    desc: { type: String, },
    img: { type: String},
    categories: { type: Array},
    size: { type: Array},
    color: { type: Array},
    price: { type: Number,},
    inStock: {type: Boolean, default: true},
  },
  { timestamps: true }
);


export default mongoose.model("Product", ProductSchema);  