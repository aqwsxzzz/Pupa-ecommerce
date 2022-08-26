import { Schema, model, ObjectId } from "mongoose";

interface Product {
  name: string;
  image: string;
  price: string;
  description: string;
  category: ObjectId;
}

const ProductSchema = new Schema<Product>({
  name: String,
  image: String,
  price: String,
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

export const ProductModel = model<Product>("Product", ProductSchema);
