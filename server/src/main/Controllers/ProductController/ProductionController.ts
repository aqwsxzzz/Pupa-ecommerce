import { newProduct } from "./post_product";
import { editProduct } from "./put_product";
import { delProduct } from "./del_product";
import { getAllProducts, getAllProductsPaginated } from "./get_product";

export const ProductController = {
  newProduct,
  editProduct,
  delProduct,
  getAllProducts,
  getAllProductsPaginated,
};
