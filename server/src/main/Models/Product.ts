import { Schema, model } from "mongoose";

interface Product {
  name: string;
  image: [];
  price: string;
  description: string;
  type: string;
}

const ProductSchema = new Schema<Product>({
  name: String,
  image: [],
  price: String,
  description: String,
  type: String,
});

export const ProductModel = model<Product>("Product", ProductSchema);
