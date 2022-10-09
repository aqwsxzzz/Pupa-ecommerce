import React, { useState } from "react";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { ProductsProps } from "../Interfaces";
import { RiEdit2Fill, RiDeleteBin7Fill } from "react-icons/ri";
import { TiTick, TiCancel } from "react-icons/ti";

export const ProductsAdminCard: React.FC<ProductsProps> = (prod: ProductsProps) => {
  const [editStatus, setEditStatus] = useState(false);

  const editSwitch = () => {
    setEditStatus(!editStatus);
  };

  return editStatus ? (
    <Flex
      w={"100%"}
      borderWidth={"1px 1px 0px 1px"}
      borderColor={"#B83280"}
      py={1}
      textAlign={"center"}
      alignItems={"center"}
    >
      <Input type={"text"} textAlign={"center"} mx={1} flex={"3"} defaultValue={prod.name}></Input>
      <Input flex={"1"} defaultValue={prod.price}></Input>
      <Input mx={1} flex={"1"} defaultValue={prod.category.name}></Input>
      <Input flex={"3"} defaultValue={prod.description}></Input>
      <Box flex={"1"}>
        <Button mr={1} bgColor={"#f0d3e9"} _hover={{ bgColor: "#B83280" }} onClick={editSwitch}>
          <TiTick />
        </Button>
        <Button bgColor={"#f0d3e9"} _hover={{ bgColor: "#B83280" }} onClick={editSwitch}>
          <TiCancel />
        </Button>
      </Box>
    </Flex>
  ) : (
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
        {prod.category?.name}
      </Text>
      <Text flex={"3"}>{prod.description}</Text>
      <Box flex={"1"}>
        <Button mr={1} bgColor={"#f0d3e9"} _hover={{ bgColor: "#B83280" }} onClick={editSwitch}>
          <RiEdit2Fill />
        </Button>
        <Button bgColor={"#f0d3e9"} _hover={{ bgColor: "#B83280" }}>
          <RiDeleteBin7Fill />
        </Button>
      </Box>
    </Flex>
  );
};
