import { AxiosResponse } from "axios";
import { AppDispatch } from "Store/store";

const getCategories = (data: AxiosResponse<any, any> | undefined) => ({
  type: "category/getCategories",
  payload: data?.data,
});

export const dispatchGetCategories = (data: AxiosResponse<any, any> | undefined, dispatch: AppDispatch) => {
  dispatch(getCategories(data));
};

const newCategory = (data: AxiosResponse<any, any> | undefined) => ({
  type: "category/addNewCategory",
  payload: data?.data,
});

export const dispatchNewCategory = (data: AxiosResponse<any, any> | undefined, dispatch: AppDispatch) => {
  dispatch(newCategory(data));
};

const delCategory = (data: AxiosResponse<any, any> | undefined) => ({
  type: "category/delCategory",
  payload: data?.data,
});

export const dispatchDelCategory = (data: AxiosResponse<any, any> | undefined, dispatch: AppDispatch) => {
  dispatch(delCategory(data));
};
