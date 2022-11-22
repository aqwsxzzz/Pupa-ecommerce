import { AxiosResponse } from "axios";
import { AppDispatch } from "Store/store";

const categoriesInfo = (data: AxiosResponse<any, any> | undefined) => ({
  type: "category/getCategories",
  payload: data?.data,
});

export const getCategories = (data: AxiosResponse<any, any> | undefined, dispatch: AppDispatch) => {
  dispatch(categoriesInfo(data));
};
