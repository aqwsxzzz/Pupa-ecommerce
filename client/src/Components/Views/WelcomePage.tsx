import { Box, Button, Flex, FormControl, HStack, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/2.jpeg";

export const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isLargerThan913] = useMediaQuery("(min-width: 913px");
  const [localTime] = useState(new Date().getHours());

  let message = "";
  if (localTime > 5 && localTime < 13) {
    message = "Buen dia!";
  } else if (localTime > 12 && localTime < 20) {
    message = "Buenas tardes!";
  } else message = "Buenas noches!";

  return isLargerThan913 ? null : (
    <Flex flexDir={"column"} bgColor={"#f0d3e9"}  h={"912px"} w={"100%"} justify={"space-evenly"} >
      <Box alignSelf={"center"} mt={"-16"}>

      <Box
          my={"auto"}
          w={64}
          h={64}
          bgColor={"white"}
          borderRadius={"50%"}
          borderWidth={1}
          borderColor={"black"}
          style={{ overflow: "hidden" }}

        >
          <Flex mt={7} ml={3} >
            <Image src={logo} w={48} m={"auto"} />
          </Flex>
        </Box>
          </Box>
      <Flex flexDir={"column"} justify={"center"} w={"100%"} align={"center"}>
        <Text color={"#B83280"} fontSize={"xxx-large"} mt={"-28"} mb={"4"}>{message}</Text>
        <Box>
        <FormControl >
          <HStack spacing={1}>
          <Button colorScheme={"pink"} textColor={"#B7CD6A"} onClick={() => navigate("/home")}>Client@</Button>
          <Button bgColor={"pink.500"} textColor={"#B7CD6A"} onClick={() => navigate("/admin")}>Administrador</Button>
          </HStack>
        </FormControl>
        </Box>
      </Flex>
    </Flex>
  );
};
