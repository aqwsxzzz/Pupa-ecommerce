import axios from "axios";
import url from "Api/url";
import { CategoriesProps } from "../../Utils/Interfaces";

/* EDIT AN EXISTING CATEGORY */
const editCategory = async (editedCategory: CategoriesProps) => {
  const { name, _id } = editedCategory;

  return axios.put(`${url}/editCategory/${_id}`, { name });
};

export { editCategory };
