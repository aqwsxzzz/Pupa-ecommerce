import { Request, Response, NextFunction } from "express";
import { CategoryModel } from "../../Models/Category";

/* GET ALL THE CATEGORIES */
const getCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await CategoryModel.find({});
    return res.json(categories);
  } catch (error) {
    return next(error);
  }
};

/* GET CATEGORY BY ID */
const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const category = await CategoryModel.findById(id);
    return res.json(category);
  } catch (error) {
    return next(error);
  }
};

export { getCategories, getCategoryById };
