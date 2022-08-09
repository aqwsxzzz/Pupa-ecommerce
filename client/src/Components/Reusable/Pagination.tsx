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
import { ProductsProps } from "../../Interfaces";
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

  const limitHandler = (e: any) => {
    console.log(e.target.value);

    const value = e.target.value;
    setPagination({
      ...pagination,
      limit: value,
    });
  };

  const nextPage = () => {
    let newPage = parseInt(pagination.page);
    newPage += 1;
    setPagination({
      ...pagination,
      page: newPage.toString(),
    });
  };

  const previousPage = () => {
    let newPage = parseInt(pagination.page);
    newPage -= 1;
    setPagination({
      ...pagination,
      page: newPage.toString(),
    });
  };

  useEffect(() => {
    console.log(pagination);

    refetch();
  }, [pagination]);

  return (
    <>
      <Box w={"80%"} mx={"auto"} bgColor={"red"}>
        {
          <Grid templateColumns={"repeat(3, minmax(200px, 1fr))"} gap={6}>
            {isLoading
              ? null
              : data?.data.result.map((prod: ProductsProps) => (
                  <GridItem key={prod._id}>
                    <Flex direction={"column"}>
                      <Box mx={"auto"} bgColor={"blue"} w={"32"} h={"32"}></Box>
                      <Text textAlign={"center"}>{prod.name}</Text>
                    </Flex>
                  </GridItem>
                ))}
          </Grid>
        }{" "}
      </Box>
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
