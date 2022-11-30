import { useQuery, useMutation } from "react-query";

/* Redux imports */
import { useAppDispatch } from "Store/store";
import { dispatchNewCategory, dispatchDelCategory } from "Store/slices/categories/actions";
import { dispatchDelProductsByCategory } from "Store/slices/products/actions";

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
  const dispatch = useAppDispatch();

  return useMutation(newCategory, {
    onSuccess: (data) => {
      dispatchNewCategory(data, dispatch);
    },
  });
};

/* "Put" exports */
const useEditCategory = () => {
  return useMutation(editCategory);
};

/* "Del" exports */
const useDelCategoryById = () => {
  const dispatch = useAppDispatch();
  return useMutation(delCategoryById, {
    onSuccess: (data) => {
      dispatchDelCategory(data, dispatch);
      dispatchDelProductsByCategory(data, dispatch);
    },
  });
};

export const categoryManager = {
  useGetCategories,
  useGetCategoryById,
  useNewCategory,
  useEditCategory,
  useDelCategoryById,
};
