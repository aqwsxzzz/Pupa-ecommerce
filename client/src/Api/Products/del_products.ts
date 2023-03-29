import axios from "axios";
import url from "Api/url";

/* DELETE A PRODUCT BY ID */
const delProductById = (id: string) => {
  const response = axios.delete(`${url}/delProduct/${id}`);
  return response;
};

export { delProductById };
