import axios from "axios";
import url from "../url";

/* GET ALL CATEGORIES */
const getCategories = () => {
  const response = axios.get(`${url}/getAllCategories`);
  return response;
};

/* GET CATEGORY BY ID */
const getCategoryById = (id: string) => {
  const response = axios.get(`${url}/getCategoryById/${id}`);
  return response;
};

export { getCategories, getCategoryById };
