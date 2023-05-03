import {
  Box,
  Button,
  FormControl,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../Images/2.jpeg";

export const WelcomePage: React.FC = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 913px");
  const [localTime, setLocalTime] = useState(new Date().getHours());

  let message = "";
  if (localTime > 5 && localTime < 13) {
    message = "Buen dia!";
  } else if (localTime > 12 && localTime < 20) {
    message = "Buenas tardes!";
  } else message = "Buenas noches!";

  console.log(localTime);

  return isLargerThan768 ? null : (
    <Box bgColor={"#f0d3e9"} h={"912px"}>
      <Box>
        <Box borderRadius={"50%"} style={{ overflow: "hidden" }} w={24} h={24}>
          <Image src={logo} />
        </Box>
        <Text>{message}</Text>
        <FormControl>
          <Button>Client@</Button>
          <Button>Administrador</Button>
        </FormControl>
      </Box>
    </Box>
  );
};
