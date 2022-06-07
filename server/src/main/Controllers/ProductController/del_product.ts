import { ProductModel } from "../../Models/Product";
import { Request, Response, NextFunction } from "express";

/* DELETE A PRODUCT */

const delProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const product = await ProductModel.findByIdAndDelete(id);
    res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

export { delProduct };
