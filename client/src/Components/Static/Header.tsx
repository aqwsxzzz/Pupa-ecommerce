import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo2 from "../../Images/2.jpeg";

export const StaticHeader: React.FC = () => {
  return (
    <Flex direction={"column"} w={"100%"}>
      <Flex
        w={"100%"}
        h={8}
        bgColor={"#B83280"}
        direction={"column"}
        justify={"center"}
      >
        <Text
          w={"100%"}
          fontSize={"md"}
          textAlign={"center"}
          textColor={"whiteAlpha.700"}
        >
          Productos hechos 100% a mano.
        </Text>
      </Flex>
      <Flex w={"100%"} h={12} direction={"row"} justify={"center"}>
        <Box boxSize={10} mt={2}>
          <Image src={logo2} />
        </Box>
      </Flex>
    </Flex>
  );
};
