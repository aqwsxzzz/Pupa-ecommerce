import axios from "axios";
import url from "Api/url";

/* GET QUOTER INFORMATION */
const getQuoter = () => {
  const response = axios.get(`${url}/getQuoterInformation`);
  return response;
};

export { getQuoter };
