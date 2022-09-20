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

import { useGetProductsPaginated } from "../../Api/Products/get_products";
import { useGetCategories } from "../../Api/Categories/get_categories";
import { ProductsProps, CategoriesProps } from "../../Interfaces";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export const Pagination: React.FC = () => {
  const [limit, setLimit] = useState("6");
  const [pagination, setPagination] = useState({
    page: "1",
    limit: limit,
  });
  const { data, isLoading, refetch } = useGetProductsPaginated(pagination);
  const { data: categoryData, isLoading: categoryIsLoading } =
    useGetCategories();

  const [pagesArray, setPagesArray] = useState<number[]>([]);

  /* SET THE NEW LIMIT VALUE IF THE USER CHANGES IT */
  const limitHandler = (e: any) => {
    const value = e.target.value;
    setPagination({
      ...pagination,
      limit: value,
      page: "1",
    });
  };

  /* SET THE VALUE NEEDED TO BRING THE NEXT PAGINATION PAGE*/
  const nextPage = () => {
    let newPage = parseInt(pagination.page);
    newPage += 1;
    setPagination({
      ...pagination,
      page: newPage.toString(),
    });
  };

  /* SET TH VALUE NEEDED TO BRING THE PREVIOUS PAGINATION PAGE */
  const previousPage = () => {
    let newPage = parseInt(pagination.page);
    newPage -= 1;
    setPagination({
      ...pagination,
      page: newPage.toString(),
    });
  };

  /* REFETCH THE PAGINATION DATA EVERYTIME THE VALUES CHANGES */
  useEffect(() => {
    refetch();
    setPageArrayInfo();
  }, [pagination]);

  /* SET THE PAGESARRAY INFO DEPENDING ON THE USERS CHOICE*/
  const setPageArrayInfo = () => {
    const pages = data?.data.pages;
    setPagesArray([]);
    let array = [];
    for (let i = 1; i <= pages; i++) {
      array.push(i);
    }
    setPagesArray(array);
  };

  return (
    <>
      <Flex w={"95%"} mx={"auto"} bgColor={"red"} dir={"row"}>
        <Flex dir={"column"} w={"44"} borderRight={"1px"}>
          <Flex w={"100%"}>
            <Box w={"100%"}>
              <Text>Categoria</Text>
              <Box w={"100%"}>
                {categoryIsLoading
                  ? null
                  : categoryData?.data.map((cat: CategoriesProps) => {
                      return (
                        <Box key={cat._id} bgColor={"violet"} w={"100%"}>
                          <Flex dir={"row"}>
                            <Box
                              w={2}
                              h={2}
                              border={"1px"}
                              margin={"auto"}
                            ></Box>
                            <Text maxW={10}>{cat.name}</Text>
                          </Flex>
                        </Box>
                      );
                    })}
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Box margin={"auto"} bgColor={"green"}>
          {
            <Grid templateColumns={"repeat(3, minmax(200px, 1fr))"} gap={6}>
              {isLoading
                ? null
                : data?.data.result.map((prod: ProductsProps) => (
                    <GridItem key={prod._id}>
                      <Flex direction={"column"}>
                        <Box
                          mx={"auto"}
                          bgColor={"blue"}
                          w={"32"}
                          h={"32"}
                        ></Box>
                        <Text textAlign={"center"}>{prod.name}</Text>
                      </Flex>
                    </GridItem>
                  ))}
            </Grid>
          }
        </Box>
      </Flex>
      <Flex dir={"row"} justifyContent={"center"} w={"100%"}>
        <Flex maxW={"64"} dir={"row"}>
          <Text margin={"auto"}>Mostrar</Text>
          <Select maxW={20} ml={2} onChange={(e) => limitHandler(e)}>
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="18">18</option>
          </Select>
          <Button
            onClick={previousPage}
            p={0}
            bgColor={"white"}
            cursor={"default"}
            _hover={{ bgColor: "white" }}
          >
            <BsFillArrowLeftCircleFill color="#B83280" cursor={"pointer"} />
          </Button>
          <Flex dir={"row"}>
            {isLoading
              ? null
              : pagesArray.map((index, elem) => (
                  <Box key={index}>
                    <Text>{elem + 1}</Text>
                  </Box>
                ))}
          </Flex>
          <Button
            onClick={nextPage}
            p={0}
            bgColor={"white"}
            cursor={"default"}
            _hover={{ bgColor: "white" }}
          >
            <BsFillArrowRightCircleFill color="#B83280" cursor={"pointer"} />
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
