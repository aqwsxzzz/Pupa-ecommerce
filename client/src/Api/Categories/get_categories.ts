import axios from "axios";
import { useQuery } from "react-query";
import url from "../url";

/* GET ALL CATEGORIES */
const getCategories = () => {
  const response = axios.get(`${url}/getAllCategories`);
  return response;
};

const useGetCategories = () => useQuery(["categories"], () => getCategories());

/* GET CATEGORY BY ID */
const getCategoryById = (id: string) => {
  const response = axios.get(`${url}/getCategoryById/${id}`);
  return response;
};

const useGetCategoryById = (id: string) => useQuery(["categoryById"], () => getCategoryById(id));

export { useGetCategories, useGetCategoryById };
