import React, { useEffect } from "react";
import { useAppDispatch } from "Store/store";
import { getProducts } from "Store/slices/products/actions";
import { getCategories } from "Store/slices/categories/actions";
import { APIS } from "Api/managersExport";

export const PreFetch: React.FC = () => {
  const dispatchProd = useAppDispatch();
  const dispatchCat = useAppDispatch();

  /* CATEGORIES PRE-FETCH */
  const { data: dataCategories } = APIS.categoryManager.useGetCategories();

  const categoriesInfo = () => {
    getCategories(dataCategories, dispatchCat);
  };

  useEffect(() => {
    if (dataCategories) categoriesInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataCategories]);

  /* PRODUCTS PRE-FETCH */
  const { data: dataProducts } = APIS.productManager.useGetProducts();

  const productsInfo = () => {
    getProducts(dataProducts, dispatchProd);
  };

  useEffect(() => {
    if (dataProducts) productsInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProducts]);

  return null;
};
