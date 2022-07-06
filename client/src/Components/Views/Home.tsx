import React from "react";
import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import topImage from "../../Images/HomeCollage.jpg";
import bolsaSemilla from "../../Images/BolsaSemillas1.jpeg";
import bolsaLienzo1 from "../../Images/BolsaLienzo1.jpeg";
import portaCarnet1 from "../../Images/PortaCarnet1.jpeg";
import llaveros1 from "../../Images/Llaveros1.jpeg";

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
        <Box
          border={"1px"}
          maxH={"100%"}
          w={"22.5%"}
          style={{ overflow: "hidden" }}
        >
          <Text
            position={"absolute"}
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            pt={5}
            fontWeight={"bold"}
          >
            SEMILLAS
          </Text>
          <Image
            maxH={"100%"}
            maxW={"100%"}
            display={"block"}
            src={bolsaSemilla}
            style={{ overflow: "none" }}
          />
        </Box>
        <Box border={"1px"} w={"22.5%"}>
          <Text
            position={"absolute"}
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            pt={5}
            fontWeight={"bold"}
          >
            LIENZO
          </Text>

          <Image
            maxH={"100%"}
            maxW={"100%"}
            display={"block"}
            src={bolsaLienzo1}
            style={{ overflow: "none" }}
          />
        </Box>
        <Box border={"1px"} w={"22.5%"}>
          <Text
            position={"absolute"}
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            pt={5}
            fontWeight={"bold"}
          >
            BEBES
          </Text>

          <Image
            maxH={"100%"}
            maxW={"100%"}
            display={"block"}
            src={portaCarnet1}
            style={{ overflow: "none" }}
          />
        </Box>
        <Box border={"1px"} w={"22.5%"}>
          <Text
            position={"absolute"}
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            pt={5}
            fontWeight={"bold"}
          >
            LLAVEROS
          </Text>

          <Image
            maxH={"100%"}
            maxW={"100%"}
            display={"block"}
            src={llaveros1}
            style={{ overflow: "none" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};
