import axios from "axios";
import { useQuery } from "react-query";
import url from "../url";
import { ProductsProps } from "../../Interfaces";

/* EDIT AN EXISTING PRODUCT */
const editProduct = (editedProduct: ProductsProps, categoryId: string, productId: string) => {
  const { name, image, price, description } = editedProduct;

  const response = axios.put(`${url}/editProduct/${productId}`, {
    name,
    image,
    price,
    categoryId,
    description,
  });
  return response;
};

const useEditProduct = (editedProduct: ProductsProps, categoryId: string, productId: string) =>
  useQuery(["editProduct"], () => editProduct(editedProduct, categoryId, productId));

export { useEditProduct };
