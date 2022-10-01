import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo2 from "../../Images/2.jpeg";
import { useGetProducts } from "../../Api/Products/get_products";
import { ProductsProps } from "../../Interfaces";
import { RiEdit2Fill, RiDeleteBin7Fill } from "react-icons/ri";

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
            : dataProducts?.data.map((prod: ProductsProps) => (
                <Flex
                  w={"100%"}
                  borderWidth={"1px 1px 0px 1px"}
                  borderColor={"#B83280"}
                  py={1}
                  textAlign={"center"}
                  alignItems={"center"}
                >
                  <Text mx={1} flex={"3"}>
                    {prod.name}
                  </Text>
                  <Text flex={"1"}>{prod.price}</Text>
                  <Text mx={1} flex={"1"}>
                    {prod.category.name}
                  </Text>
                  <Text flex={"3"}>{prod.description}</Text>
                  <Box flex={"1"}>
                    <Button
                      mr={1}
                      bgColor={"#f0d3e9"}
                      _hover={{ bgColor: "#B83280" }}
                    >
                      <RiEdit2Fill />
                    </Button>
                    <Button bgColor={"#f0d3e9"} _hover={{ bgColor: "#B83280" }}>
                      <RiDeleteBin7Fill />
                    </Button>
                  </Box>
                </Flex>
              ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
