import React from "react";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useGetProducts } from "../../Api/Products/get_products";
import { ProductsProps } from "../../Interfaces";
import { RepeatClockIcon } from "@chakra-ui/icons";

export const Products: React.FC = () => {
  const { data } = useGetProducts();

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
      <Box w={"80%"} mx={"auto"} bgColor={"red"}>
        <Grid templateColumns={"repeat(3, minmax(200px, 1fr))"} gap={6}>
          {data?.data.map((prod: ProductsProps) => (
            <GridItem>
              <Flex direction={"column"}>
                <Box mx={"auto"} bgColor={"blue"} w={"32"} h={"32"}></Box>
                <Text textAlign={"center"}>{prod.name}</Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};
