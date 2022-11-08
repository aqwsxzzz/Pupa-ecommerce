import { AxiosResponse } from "axios";
import { AppDispatch } from "Store/store";

const products = (data: AxiosResponse<any, any> | undefined) => ({
  type: "product/getProducts",
  payload: data?.data,
});

export const getProducts = (data: AxiosResponse<any, any> | undefined, dispatch: AppDispatch) => {
  dispatch(products(data));
};
