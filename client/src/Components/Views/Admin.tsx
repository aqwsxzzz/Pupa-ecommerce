import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo2 from "../../Images/2.jpeg";
import { useGetProducts } from "../../Api/Products/get_products";
import { ProductsProps } from "../../Utils/Interfaces";
import { ProductsAdminCard } from "../Admin/Products";
import { RootState, useAppSelector } from "Store/store";

export const Admin: React.FC = () => {
  const { refetch: refetchProducts } = useGetProducts();
  const { products } = useAppSelector((state: RootState) => state.productsSlice);

  const refetchFunc = () => {
    refetchProducts();
  };

  return (
    <Flex direction={"column"} w={"100%"}>
      <Flex w={"100%"} h={16} justify={"center"} direction={"row"} bgColor={"#f0d3e9"}>
        <Flex flex={"1"} justifyContent={"center"}>
          <Text m={"auto"} color={"#B83280"} fontFamily={"sans-serif"} fontWeight={"bold"} cursor={"pointer"}>
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
          <Text m={"auto"} color={"#B83280"} fontFamily={"sans-serif"} fontWeight={"bold"} cursor={"pointer"}>
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
          {products
            ? products.map((prod: ProductsProps) => (
                <ProductsAdminCard prod={prod} refetch={refetchFunc} key={prod._id} />
              ))
            : null}
        </Flex>
      </Flex>
    </Flex>
  );
};
