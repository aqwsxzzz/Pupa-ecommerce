import { ProductModel } from "../../Models/Product";
import { Request, Response, NextFunction } from "express";

/* EDIT PRODUCT */

const editProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, image, price, description, type } = req.body;
    const { id } = req.params;

    const product = await ProductModel.findByIdAndUpdate(id, {
      name,
      image,
      price,
      description,
      type,
    });

    res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

export { editProduct };
