import { newCategory } from "./post_category";
import { getCategories, getCategoryById } from "./get_category";
import { editCategory } from "./put_category";
import { delCategory } from "./del_category";

export const CategoryController = {
  newCategory,
  getCategories,
  getCategoryById,
  editCategory,
  delCategory,
};
