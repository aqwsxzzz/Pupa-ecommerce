import { Request, Response, NextFunction } from "express";
import { ProductModel } from "../../Models/Product";
import { CategoryModel } from "../../Models/Category";

/* NEW PRODUCT */
const newProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, price, categoryId } = req.body;

    const category = await CategoryModel.findById(categoryId);

    const product = new ProductModel({
      name,
      image: req.file?.path,
      price,
      category,
    });
    await product.save();
    return res.json(product);
  } catch (error) {
    return next(error);
  }
};

export { newProduct };
