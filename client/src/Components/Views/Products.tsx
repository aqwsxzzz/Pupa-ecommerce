import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ProductsInfo } from "../General/ProductsInfo";
import { Layout } from "../../Layout/Layout";

export const Products: React.FC = () => {
  return (
    <Layout>
      <Flex w={"100%"} direction={"column"} bgColor={"#f0d3e9"}>
        <Flex
          w={"100%"}
          h={"36"}
          backgroundColor={"#B83280"}
          justifyContent={"center"}
          mb={10}
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
        <ProductsInfo />
      </Flex>
    </Layout>
  );
};
