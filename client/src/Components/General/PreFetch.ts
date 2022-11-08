import React, { useEffect } from "react";
import { useAppDispatch } from "Store/store";
import { getProducts } from "Store/slices/products/actions";
import { useGetProducts } from "../../Api/Products/get_products";

export const PreFetch: React.FC = () => {
  const { data: dataProducts } = useGetProducts();
  const dispatch = useAppDispatch();

  const productsInfo = () => {
    getProducts(dataProducts, dispatch);
  };

  useEffect(() => {
    if (dataProducts) productsInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProducts]);

  return null;
};
