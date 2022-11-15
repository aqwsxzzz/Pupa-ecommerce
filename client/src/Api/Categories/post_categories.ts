import axios from "axios";
import { useMutation } from "react-query";
import url from "Api/url";

/* CREATE A NEW CATEGORY */
const newCategory = async (name: string) => {
  return axios
    .post(`${url}/newCategory`, { name })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error.response) return error.response;
    });
};

const useNewCategory = () => {
  return useMutation(newCategory);
};

export { useNewCategory };
