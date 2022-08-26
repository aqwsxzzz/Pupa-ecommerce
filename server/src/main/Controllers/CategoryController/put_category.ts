import { Request, Response, NextFunction } from "express";
import { CategoryModel } from "../../Models/Category";

/* EDIT CATEGORY */

const editCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const category = await CategoryModel.findByIdAndUpdate(id, { name });

    res.status(200).json(category);
  } catch (error) {
    return next(error);
  }
};

export { editCategory };
