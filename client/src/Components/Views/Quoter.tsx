import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import logo2 from "../../Images/2.jpeg";
import { DailyPrices } from "Components/Quoter/DailyPrices";
import { QuoterForm } from "Components/Quoter/QuoterForm";

export const Quoter: React.FC = () => {
  return (
    <Flex flexDir={"column"}>
      <Flex bgColor={"#f0d3e9"} h={14} mb={8}>
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
      </Flex>
      <Flex>
        <Flex flex={"1"}></Flex>
        <Box>
          <QuoterForm />
        </Box>
        <Flex flex={"1"} justify={"center"}>
          <DailyPrices />
        </Flex>
      </Flex>
    </Flex>
  );
};
