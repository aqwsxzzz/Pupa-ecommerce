import { Schema, model, ObjectId } from "mongoose";

export interface Product {
  name: string;
  image: string | undefined;
  price: string;
  description?: string;
  category: { name: string };
}

const ProductSchema = new Schema<Product>({
  name: String,
  image: String,
  price: String,
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

export const ProductModel = model<Product>("Product", ProductSchema);
