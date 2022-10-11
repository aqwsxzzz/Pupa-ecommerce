import axios from "axios";
import { useMutation } from "react-query";
import url from "../url";
import { ProductsProps } from "../../Interfaces";

/* EDIT AN EXISTING PRODUCT */
const editProduct = (editedProduct: ProductsProps) => {
  const { name, price, description, category } = editedProduct;

  return axios.put(`${url}/editProduct/${editedProduct._id}`, {
    name,
    price,
    categoryId: category._id,
    description,
  });
};

export const useEditProduct = () => {
  return useMutation(editProduct);
};
