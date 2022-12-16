import { useMutation, useQuery } from "react-query";

/* "get" APIS */
import { getQuoter } from "./get_quoter";

/* "put" APIS */
import { editQuoter } from "./put_quoter";

/* get exports */
const useGetQuoter = () => useQuery(["quoter"], getQuoter);

/* "put" exports */
const usePutQuoter = () => useMutation(editQuoter);

export const quoterManager = {
  useGetQuoter,
  usePutQuoter,
};
