import { ProductModel } from "../../Models/Product";
import { Request, Response, NextFunction } from "express";
import { CategoryModel } from "../../Models/Category";

/* EDIT PRODUCT */

const editProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, image, price, categoryId } = req.body;
    const { id } = req.params;

    const category = await CategoryModel.findById(categoryId);

    const product = await ProductModel.findByIdAndUpdate(id, {
      name,
      image,
      price,
      category,
    });

    res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

export { editProduct };
