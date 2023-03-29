import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo2 from "../../Images/2.jpeg";
import { useNavigate } from "react-router-dom";

export const StaticHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex direction={"column"} w={"100%"}>
      <Flex w={"100%"} h={8} bgColor={"#B83280"} direction={"column"} justify={"center"}>
        <Text w={"100%"} fontSize={"md"} textAlign={"center"} textColor={"whiteAlpha.700"}>
          Productos hechos 100% a mano.
        </Text>
      </Flex>
      <Flex w={"100%"} h={16} direction={"row"} bgColor={"#f0d3e9"}>
        <Flex flex={"1"}>
          <Flex my={"auto"} ml={16}>
            <Text
              mr={4}
              cursor={"pointer"}
              fontWeight={"bold"}
              fontFamily={"sans-serif"}
              color={"white"}
              _hover={{ color: "#B83280" }}
              style={{ WebkitTextStroke: "0.5px black" }}
              onClick={() => navigate("/")}
            >
              Inicio
            </Text>
            <Text
              cursor={"pointer"}
              fontWeight={"bold"}
              fontFamily={"sans-serif"}
              color={"white"}
              _hover={{ color: "#B83280" }}
              style={{ WebkitTextStroke: "0.5px black" }}
              onClick={() => navigate("/products")}
            >
              Productos
            </Text>
          </Flex>
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
          onClick={() => navigate("/admin")}
        >
          <Flex mt={1.5} mb={1}>
            <Image src={logo2} w={8} m={"auto"} />
          </Flex>
        </Box>
        <Flex flex={"1"}></Flex>
      </Flex>
    </Flex>
  );
};
