import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export const Products: React.FC = () => {
  return (
    <Flex w={"100%"}>
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
      <Flex></Flex>
    </Flex>
  );
};
