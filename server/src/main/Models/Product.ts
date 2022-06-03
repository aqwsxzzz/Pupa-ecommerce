import { Schema, model } from "mongoose";

interface Product {
  name: string;
  image: string;
  price: string;
  description: string;
  type: string;
}

const ProductSchema = new Schema<Product>({
  name: String,
  image: String,
  price: String,
  type: String,
});

export const ProductModel = model<Product>("Product", ProductSchema);
