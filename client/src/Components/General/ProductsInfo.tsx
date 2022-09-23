import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Select,
  Text,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { useGetProducts } from "../../Api/Products/get_products";
import { useGetCategories } from "../../Api/Categories/get_categories";
import { ProductsProps, CategoriesProps } from "../../Interfaces";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export const ProductsInfo: React.FC = () => {
  /* GET COMPLETE DATA FROM API */
  const { data: dataProducts, isLoading: isLoadingProducts } = useGetProducts();
  const { data: dataCategories, isLoading: isLoadingCategories } =
    useGetCategories();

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
      <Flex w={"80%"} mx={"auto"} bgColor={"red"} dir={"row"}>
        <Box margin={"auto"} bgColor={"green"}>
          <SimpleGrid columns={3} spacing={"20px"}>
            {dataProducts?.data
              .filter(
                (prod: ProductsProps) =>
                  prod.category._id === dataCategories?.data[categoryNumber]._id
              )
              .map((prod: ProductsProps) => (
                <Box key={prod._id}>
                  <Box width={"200px"} height={"200 px"}>
                    <Image
                      src={prod.image}
                      // style={{ overflow: "hidden" }}
                      w={"100%"}
                      h={"100%"}
                    ></Image>
                  </Box>
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
      <Flex
        w={"80%"}
        mx={"auto"}
        bgColor={"violet"}
        dir={"row"}
        justifyContent={"center"}
      >
        <Flex dir={"row"}>
          <Button
            onClick={prevCategory}
            p={0}
            bgColor={"white"}
            cursor={"default"}
            _hover={{ bgColor: "white" }}
          >
            <BsFillArrowLeftCircleFill color="#B83280" cursor={"pointer"} />
          </Button>
          <Box my={"auto"}>{<SetCategoryText />}</Box>
          <Button
            onClick={nextCategory}
            p={0}
            bgColor={"white"}
            cursor={"default"}
            _hover={{ bgColor: "white" }}
          >
            <BsFillArrowRightCircleFill color="#B83280" cursor={"pointer"} />
          </Button>
        </Flex>
      </Flex>
      <ProductsFilter />
    </>
  );
};
