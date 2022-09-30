import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo2 from "../../Images/2.jpeg";
import { useGetProducts } from "../../Api/Products/get_products";
import { ProductsProps } from "../../Interfaces";

export const Admin: React.FC = () => {
  const { data: dataProducts, isLoading: isLoadingProducts } = useGetProducts();

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
      <Flex w={"100%"}>
        <Flex direction={"column"} justifyContent={"center"}>
          {isLoadingProducts
            ? null
            : dataProducts?.data.map((prod: ProductsProps) => (
                <Flex w={"80%"} border={"1px"}>
                  <Text>{prod.name}</Text>
                  <Text>{prod.price}</Text>
                  <Text>{prod.category.name}</Text>
                  <Text>{prod.description}</Text>
                </Flex>
              ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
