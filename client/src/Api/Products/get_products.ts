import axios from "axios";
import { useQuery } from "react-query";
import url from "../url";

/* GET ALL PRODUCTS */
const getProducts = () => {
  const response = axios.get(`${url}/getAllProducts`);
  return response;
};

const useGetProducts = () => useQuery(["products"], () => getProducts());

export { useGetProducts };
