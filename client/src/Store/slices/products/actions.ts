import { AxiosResponse } from "axios";
import { AppDispatch } from "Store/store";

const getProducts = (data: AxiosResponse<any, any> | undefined) => ({
  type: "product/getProducts",
  payload: data?.data,
});

export const dispatchGetProducts = (
  data: AxiosResponse<any, any> | undefined,
  dispatch: AppDispatch
) => {
  dispatch(getProducts(data));
};

const newProduct = (data: AxiosResponse<any, any> | undefined) => ({
  type: "product/addNewProduct",
  payload: data?.data,
});

export const dispatchNewProduct = (
  data: AxiosResponse<any, any> | undefined,
  dispatch: AppDispatch
) => {
  dispatch(newProduct(data));
};

const productToDelete = (data: AxiosResponse<any, any> | undefined) => ({
  type: "product/delProduct",
  payload: data?.data,
});

export const dispatchDelProduct = (
  data: AxiosResponse<any, any> | undefined,
  dispatch: AppDispatch
) => {
  dispatch(productToDelete(data));
};

const productsByCategory = (data: AxiosResponse<any, any> | undefined) => ({
  type: "product/delProductsByCategory",
  payload: data?.data,
});

export const dispatchDelProductsByCategory = (
  data: AxiosResponse<any, any> | undefined,
  dispatch: AppDispatch
) => {
  dispatch(productsByCategory(data));
};

const editProductsCategory = (data: AxiosResponse<any, any> | undefined) => ({
  type: "products/editProductsCategory",
  payload: data?.data,
});

export const dispatchEditProductsCategory = (
  data: AxiosResponse<any, any> | undefined,
  dispatch: AppDispatch
) => {
  dispatch(editProductsCategory(data));
};
