import mongoose from "mongoose";
import { IProduct } from "../types/interfaces";

const ProductSchema = new mongoose.Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const Product = mongoose.model<IProduct>("Product", ProductSchema);
