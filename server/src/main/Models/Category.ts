import { Schema, model } from "mongoose";

const CategorySchema = new Schema<{ name: string }>({
  name: String,
});

export const CategoryModel = model("Category", CategorySchema);
