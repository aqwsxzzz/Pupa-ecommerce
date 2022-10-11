import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import logo2 from "../../Images/2.jpeg";
import { useGetProducts } from "../../Api/Products/get_products";
import { ProductsProps } from "../../Interfaces";
import { ProductsAdminCard } from "../Admin/Products";

export const Admin: React.FC = () => {
  const {
    data: dataProducts,
    isLoading: isLoadingProducts,
    refetch: refetchProducts,
  } = useGetProducts();

  return (
    <Flex direction={"column"} w={"100%"}>
      <Flex
        w={"100%"}
        h={16}
        justify={"center"}
        direction={"row"}
        bgColor={"#f0d3e9"}
      >
        <Flex flex={"1"} justifyContent={"center"}>
          <Text
            m={"auto"}
            color={"#B83280"}
            fontFamily={"sans-serif"}
            fontWeight={"bold"}
            cursor={"pointer"}
          >
            Productos
          </Text>
        </Flex>
        <Box
          my={"auto"}
          w={12}
          h={12}
          bgColor={"white"}
          borderRadius={"50%"}
          borderWidth={1}
          borderColor={"black"}
          style={{ overflow: "hidden" }}
        >
          <Flex mt={1.5} mb={1}>
            <Image src={logo2} w={8} m={"auto"} />
          </Flex>
        </Box>
        <Flex flex={"1"} justifyContent={"center"}>
          <Text
            m={"auto"}
            color={"#B83280"}
            fontFamily={"sans-serif"}
            fontWeight={"bold"}
            cursor={"pointer"}
          >
            Categorias
          </Text>
        </Flex>
      </Flex>
      <Flex w={"100%"} justifyContent={"center"}>
        <Flex
          direction={"column"}
          justifyContent={"center"}
          mt={12}
          w={"80%"}
          mb={12}
          borderBottom={"1px"}
          borderColor={"#B83280"}
        >
          {isLoadingProducts
            ? null
            : dataProducts?.data.products.map((prod: ProductsProps) => (
                <ProductsAdminCard
                  name={prod.name}
                  price={prod.price}
                  description={prod.description}
                  _id={prod._id}
                  image={prod.image}
                  category={prod.category}
                  key={prod._id}
                />
              ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
