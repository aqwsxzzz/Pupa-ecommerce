import { useQuery, useMutation } from "react-query";

/* "Get" apis */
import { getCategories, getCategoryById } from "./get_categories";

/* "Post" apis */
import { newCategory } from "./post_categories";

/* "Put" apis */
import { editCategory } from "./put_categories";

/* "Del" apis */
import { delCategoryById } from "./del_category";

/* "Get" exports */
const useGetCategories = () => useQuery(["categories"], () => getCategories());
const useGetCategoryById = (id: string) => useQuery(["categoryById"], () => getCategoryById(id));

/* "Post" exports */
const useNewCategory = () => {
  return useMutation(newCategory);
};

/* "Put" exports */
const useEditCategory = () => {
  return useMutation(editCategory);
};

/* "Del" exports */
const useDelCategoryById = () => useMutation(delCategoryById);

export const categoryManager = {
  useGetCategories,
  useGetCategoryById,
  useNewCategory,
  useEditCategory,
  useDelCategoryById,
};
