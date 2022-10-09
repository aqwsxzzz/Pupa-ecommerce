import { ProductModel } from "../../Models/Product";
import { Request, Response, NextFunction } from "express";
import { CategoryModel } from "../../Models/Category";

/* EDIT PRODUCT */

const editProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, price, categoryId, description } = req.body;
    const { id } = req.params;
    console.log(req.body);

    const category = await CategoryModel.findById(categoryId);

    const product = await ProductModel.findByIdAndUpdate(
      id,
      {
        name,
        image: req.file?.path,
        price,
        category,
        description,
      },
      { new: true }
    );

    res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

export { editProduct };
