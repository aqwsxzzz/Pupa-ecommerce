import React, { useState } from "react";
import { Box, Button, Flex, Text, SimpleGrid, Image } from "@chakra-ui/react";
import { useGetProducts } from "../../Api/Products/get_products";
import { useGetCategories } from "../../Api/Categories/get_categories";
import { ProductsProps } from "../../Interfaces";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export const ProductsInfo: React.FC = () => {
  /* GET COMPLETE DATA FROM API */
  const { data: dataProducts } = useGetProducts();
  const { data: dataCategories } = useGetCategories();

  /* ARRAY OF PRODUCTS TO BE DISPLAYED */

  /* WILL BE USED AS COUNTER FOR CATEGORY'S SPINNER */
  const [categoryNumber, setCategoryNumber] = useState(0);

  /* SET THE TEXT OF THE CHOOSED CATEGORY */
  const SetCategoryText = () => {
    return dataCategories ? (
      <Text>{dataCategories.data[categoryNumber].name}</Text>
    ) : null;
  };

  /* PREVIOUS CATEGORY */
  const prevCategory = () => {
    if (categoryNumber === 0) {
      setCategoryNumber(dataCategories?.data.length - 1);
    } else setCategoryNumber(categoryNumber - 1);
  };

  /* NEXT CATEGORY */
  const nextCategory = () => {
    if (categoryNumber === dataCategories?.data.length - 1) {
      setCategoryNumber(0);
    } else setCategoryNumber(categoryNumber + 1);
  };

  /* SHOW THE PRODUCTS DEPENDING ON THE SELECTED CATEGORY */
  const ProductsFilter = () => {
    return (
      <Flex w={"80%"} mx={"auto"} dir={"row"} bgColor={"#f0d3e9"}>
        <Box margin={"auto"}>
          <SimpleGrid columns={3} spacing={"20px"}>
            {dataProducts?.data
              .filter(
                (prod: ProductsProps) =>
                  prod.category._id === dataCategories?.data[categoryNumber]._id
              )
              .map((prod: ProductsProps) => (
                <Box key={prod._id} borderRadius={10}>
                  <Flex
                    dir={"row"}
                    width={"200px"}
                    height={"200px"}
                    style={{ overflow: "hidden" }}
                    justifyContent={"center"}
                  >
                    <Image
                      src={prod.image}
                      h={"200px"}
                      borderRadius={10}
                    ></Image>
                  </Flex>
                  <Text textAlign={"center"} maxW={"200px"}>
                    {prod.name}
                  </Text>
                  <Text textAlign={"center"}>$ {prod.price}</Text>
                </Box>
              ))}
          </SimpleGrid>
        </Box>
      </Flex>
    );
  };

  return (
    <>
      <Flex w={"80%"} mx={"auto"} dir={"row"} justifyContent={"center"}>
        <Flex dir={"row"} mb={4} w={"100%"} justifyContent={"center"}>
          <Button
            onClick={prevCategory}
            p={0}
            bgColor={"#f0d3e9"}
            cursor={"default"}
            _hover={{ bgColor: "#f0d3e9" }}
          >
            <BsFillArrowLeftCircleFill color="#B83280" cursor={"pointer"} />
          </Button>
          <Flex my={"auto"}>
            <Text fontSize={"2xl"} fontFamily={"sans-serif"}>
              {<SetCategoryText />}
            </Text>
          </Flex>
          <Button
            onClick={nextCategory}
            p={0}
            bgColor={"#f0d3e9"}
            cursor={"default"}
            _hover={{ bgColor: "#f0d3e9" }}
          >
            <BsFillArrowRightCircleFill color="#B83280" cursor={"pointer"} />
          </Button>
        </Flex>
      </Flex>
      <ProductsFilter />
    </>
  );
};
