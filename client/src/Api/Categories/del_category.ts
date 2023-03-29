import axios from "axios";
import url from "Api/url";

/* DELETE A CATEGORY BY ID */
const delCategoryById = (id: string) => {
  const response = axios.delete(`${url}/delCategory/${id}`);
  return response;
};

export { delCategoryById };
