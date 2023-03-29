import { useMutation, useQuery } from "react-query";
/* Redux imports */
import { useAppDispatch } from "Store/store";
import { dispatchNewProduct, dispatchDelProduct } from "Store/slices/products/actions";

/* "del" APIS */
import { delProductById } from "./del_products";

/* "get" APIS */
import { getProducts, getProductsPaginated } from "./get_products";

/* "put" APIS */
import { editProduct } from "./put_products";

/* "post" APIS */
import { newProduct } from "./post_products";

/* "del" exports */
const useDelProductById = () => {
  const dispatch = useAppDispatch();

  return useMutation(delProductById, {
    onSuccess: (data) => {
      dispatchDelProduct(data, dispatch);
    },
  });
};

/* "get" exports */
const useGetProducts = () => useQuery(["products"], getProducts);

const useGetProductsPaginated = (queries: { page: string; limit: string }) =>
  useQuery(["paginatedProducts"], () => getProductsPaginated(queries));

/* "put" exports */
const useEditProduct = () => {
  return useMutation(editProduct);
};

/* "post" exports */
const useNewProduct = () => {
  const dispatch = useAppDispatch();

  return useMutation(newProduct, {
    onSuccess: (data) => {
      dispatchNewProduct(data, dispatch);
    },
  });
};

export const productManager = {
  useDelProductById,
  useGetProducts,
  useGetProductsPaginated,
  useEditProduct,
  useNewProduct,
};
