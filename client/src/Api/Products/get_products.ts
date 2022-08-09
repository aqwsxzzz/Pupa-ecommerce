import axios from "axios";
import { useQuery } from "react-query";
import url from "../url";

/* GET ALL PRODUCTS */
const getProducts = () => {
  const response = axios.get(`${url}/getAllProducts`);
  return response;
};

const useGetProducts = () => useQuery(["products"], () => getProducts());

/* GET ALL PRODUCTS PAGINATED */

const getProductsPaginated = (queries: { page: string; limit: string }) => {
  const response = axios.get(
    `${url}/getAllProductsPaginated?page=${queries.page}&limit=${queries.limit}`
  );
  return response;
};

const useGetProductsPaginated = (queries: { page: string; limit: string }) =>
  useQuery(["paginatedProducts"], () => getProductsPaginated(queries));

export { useGetProducts, useGetProductsPaginated };
