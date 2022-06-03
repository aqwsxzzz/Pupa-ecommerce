import { Request, Response, NextFunction } from "express";
import { ProductModel } from "../../Models/Product";

/* NEW PRODUCT */
const newProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, price, type } = req.body;

    const product = new ProductModel({
      name,
      image: req.file?.path,
      price,
      type,
    });
    await product.save();
    return res.json(product);
  } catch (error) {
    return next(error);
  }
};

export { newProduct };
