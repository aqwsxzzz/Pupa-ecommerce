import axios from "axios";
import url from "Api/url";
import { NewProductProps } from "Utils/Interfaces";

/* CREATE A NEW PRODUCT */
const newProduct = async (product: NewProductProps) => {
  let formData = new FormData();
  const { name, image, price, categoryId, description } = product;
  formData.append("name", name);
  formData.append("image", image);
  formData.append("price", price);
  formData.append("categoryId", categoryId);
  formData.append("description", description);
  return axios
    .post(`${url}/newProduct`, formData)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error.response) return error.response;
    });
};

export { newProduct };
