import { Request, Response, NextFunction } from "express";
import { CategoryModel } from "../../Models/Category";
import { ProductModel } from "../../Models/Product";

/* DELETE A CATEGORY */

const delCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const category = await CategoryModel.findByIdAndDelete(id);
    const categoryId = category?._id;
    await ProductModel.deleteMany({ category: categoryId });
    res.status(200).json(category);
  } catch (error) {
    return next(error);
  }
};
export { delCategory };
