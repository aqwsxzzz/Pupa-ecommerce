import { Request, Response, NextFunction } from "express";
import { Product, ProductModel } from "../../Models/Product";
import { CategoryModel } from "../../Models/Category";

/* NEW PRODUCT */
const newProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, price, categoryId, description } = req.body;

    const category = await CategoryModel.findById(categoryId);

    if (category) {
      const product = new ProductModel<Product>({
        name,
        image: req.file?.path,
        price,
        category,
        description,
      });
      await product.save();
      return res.json(product);
    }
  } catch (error) {
    return next(error);
  }
};

export { newProduct };
