import {
  Box,
  Button,
  Flex,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo2 from "../../Images/2.jpeg";
import { DailyPrices } from "Components/Quoter/dailyPrices";
import { QuoterForm } from "Components/Quoter/QuoterForm";
import { useNavigate } from "react-router-dom";

export const Quoter: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex flexDir={"column"}>
      <Flex bgColor={"#f0d3e9"} h={24} mb={8} flexDir={"column"}>
        <Box
          m={"auto"}
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
        <Text
          m={"auto"}
          color={"#B83280"}
          fontFamily={"sans-serif"}
          fontWeight={"bold"}
          cursor={"pointer"}
          textAlign={"center"}
          onClick={() => navigate("/admin")}
        >
          Productos
        </Text>
      </Flex>
      <Flex justify={{ base: "center", md: "flex-start" }}>
        <Flex flex={"1"} display={{ base: "none", md: "flex" }}></Flex>
        <Flex direction={"column"}>
          <Flex display={{ base: "flex", md: "none" }} justify={"center"}>
            <Popover>
              <PopoverTrigger>
                <Button>Precios Diarios</Button>
              </PopoverTrigger>
              <PopoverContent w={"232px"}>
                <PopoverArrow />
                <PopoverBody>
                  <Flex justify={"center"}>
                    <DailyPrices />
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
          <QuoterForm />
        </Flex>
        <Flex flex={"1"} justify={"center"} display={{ base: "none", md: "flex" }}>
          <DailyPrices />
        </Flex>
      </Flex>
    </Flex>
  );
};
