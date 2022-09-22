import { ProductModel } from "../../Models/Product";
import { Request, Response, NextFunction } from "express";

interface Props {
  page: string;
  limit: string;
  skip: any;
  total: string;
}

/* GET ALL PRODUCTS */

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await ProductModel.find({}).populate("category");

    res.status(200).json(products);
  } catch (error) {
    return next(error);
  }
};

/* GET ALL THE PRODUCTS PAGINATED*/

const getAllProductsPaginated = async (
  req: Request<{}, {}, {}, Props>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { query } = req;

    const page = parseInt(query.page);
    const pageSize = parseInt(query.limit);
    const skip = (page - 1) * pageSize;
    const total = await ProductModel.countDocuments();

    const pages = Math.ceil(total / pageSize);

    let product = await ProductModel.find({}).skip(skip).limit(pageSize);

    if (page > pages) {
      return res.status(404).json({
        message: "No page found",
      });
    }

    const result = await product;

    res.status(200).json({ result, pages, total });
  } catch (error) {
    return next(error);
  }
};

export { getAllProducts, getAllProductsPaginated };
