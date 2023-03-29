import { Request, Response, NextFunction } from "express";
import { CategoryModel } from "../../Models/Category";

/* NEW CATEGORY */
const newCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;

    const category = new CategoryModel({ name });
    await category.save();
    return res.json(category);
  } catch (error) {
    return next(error);
  }
};

export { newCategory };
