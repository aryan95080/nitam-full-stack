import mongoose from "mongoose";

//schema of product
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: {
    type: Array,
    required: true,
    default:
      "https://images.unsplash.com/photo-1552664199-fd31f7431a55?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  size: { type: Array, required: true },
  bestseller: { type: Boolean },
  date: { type: Date, required: true },
  quantity: {
    type: Number,
    required: true,
  },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);
export default productModel;
