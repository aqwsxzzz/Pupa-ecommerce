import { ProductModel } from "../../Models/Product";
import { Request, Response, NextFunction } from "express";

/* GET ALL THE PRODUCTS */

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await ProductModel.find({});

    res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

export { getAllProducts };
