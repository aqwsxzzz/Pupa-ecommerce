import { Request, Response, NextFunction } from "express";
import { CategoryModel } from "../../Models/Category";

/* GET ALL THE CATEGORIES */
const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await CategoryModel.find({});
    return res.json(categories);
  } catch (error) {
    return next(error);
  }
};

export { getCategories };
