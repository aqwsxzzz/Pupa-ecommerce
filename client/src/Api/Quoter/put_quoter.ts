import axios from "axios";
import url from "Api/url";
import { quoterBackEndInfo } from "Utils/Interfaces";

/* EDIT QUOTER INFORMATION */
const editQuoter = (editedQuoter: quoterBackEndInfo) => {
  const { cloth, grifaPrice, cordPrice } = editedQuoter;

  return axios.put(`${url}/editQuoter/${editedQuoter._id}`, {
    cloth,
    grifaPrice,
    cordPrice,
  });
};

export { editQuoter };
