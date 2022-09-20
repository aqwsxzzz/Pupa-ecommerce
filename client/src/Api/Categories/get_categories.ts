import axios from "axios";
import { useQuery } from "react-query";
import url from "../url";

/* GET ALL CATEGORIES */
const getCategories = () => {
  const response = axios.get(`${url}/getAllCategories`);
  return response;
};

const useGetCategories = () => useQuery(["categories"], () => getCategories());

export { useGetCategories };
