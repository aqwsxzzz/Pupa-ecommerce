import { useMutation, useQuery } from "react-query";

/* "del" APIS */
import { delProductById } from "./del_products";

/* "get" APIS */
import { getProducts, getProductsPaginated } from "./get_products";

/* "put" APIS */
import { editProduct } from "./put_products";

/* "post" APIS */
import { newProduct } from "./post_products";

/* "del" exports */
const useDelProductById = () => useMutation(delProductById);

/* "get" exports */
const useGetProducts = () => useQuery(["products"], getProducts);

const useGetProductsPaginated = (queries: { page: string; limit: string }) =>
  useQuery(["paginatedProducts"], () => getProductsPaginated(queries));

/* "put" exports */
const useEditProduct = () => {
  return useMutation(editProduct);
};

export const useEditP = () => {
  return useMutation(editProduct);
};

/* "post" exports */
export const useNewProduct = () => {
  return useMutation(newProduct);
};

export const productManager = {
  useDelProductById,
  useGetProducts,
  useGetProductsPaginated,
  useEditProduct,
  useNewProduct,
};
