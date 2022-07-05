import React from "react";
import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import topImage from "../../Images/HomeCollage.jpg";

export const Home: React.FC = () => {
  return (
    <Box>
      <Box w={"100%"}>
        <Image src={topImage} />
      </Box>
      <Spacer h={"80"} />
      <Flex w={"100%"} h={55} justifyContent={"center"}>
        <Text fontSize={"xx-large"}>Productos</Text>
      </Flex>
      <Flex
        direction={"row"}
        justifyContent={"space-evenly"}
        w={"100%"}
        h={"350px"}
        border={1}
      >
        <Box border={"1px"} w={"22.5%"}></Box>
        <Box border={"1px"} w={"22.5%"}></Box>
        <Box border={"1px"} w={"22.5%"}></Box>
        <Box border={"1px"} w={"22.5%"}></Box>
      </Flex>
    </Box>
  );
};
