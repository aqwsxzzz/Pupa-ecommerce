import axios from "axios";
import url from "../url";

/* GET ALL PRODUCTS */
const getProducts = () => {
  const response = axios.get(`${url}/getAllProducts`);
  return response;
};

/* GET ALL PRODUCTS PAGINATED */

const getProductsPaginated = (queries: { page: string; limit: string }) => {
  const response = axios.get(`${url}/getAllProductsPaginated?page=${queries.page}&limit=${queries.limit}`);
  return response;
};

export { getProducts, getProductsPaginated };
