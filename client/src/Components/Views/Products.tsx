import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Select,
  Text,
} from "@chakra-ui/react";
import {
  useGetProducts,
  useGetProductsPaginated,
} from "../../Api/Products/get_products";
import { ProductsProps } from "../../Interfaces";
import { Pagination } from "../Reusable/Pagination";

export const Products: React.FC = () => {
  /* 
  const initialFunc = () => {
    if (data) {
      setProductsInfo(data.data);
    } else initialFunc();
  }; */

  return (
    <Flex w={"100%"} direction={"column"}>
      <Flex
        w={"100%"}
        h={"36"}
        backgroundColor={"#B83280"}
        justifyContent={"center"}
      >
        <Text
          textColor={"whiteAlpha.600"}
          fontSize={"5xl"}
          w={"70%"}
          margin={"auto"}
        >
          Productos
        </Text>
      </Flex>
      <Pagination />
    </Flex>
  );
};
