import {
  Box,
  Divider,
  Flex,
  Image,
  Text,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../../Images/LogoBlackBG2.jpg";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { ContactUsModal } from "../Modals/ContactUsModal";

export const StaticFooter: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bgColor={"black"} w={"100%"} h={"64"} mt={"3"}>
      <Flex w={"100%"} h={"100%"}>
        <Flex h={"100%"} w={"30%"} direction={"column"}>
          <Flex w={"100%"} h={"80%"}>
            <Image src={logo} m={"auto"} />
          </Flex>
          <Flex h={"20%"} justifyContent={"center"}>
            <Box px={1}>
              <BsInstagram color="white" />
            </Box>
            <Box px={1}>
              <FaFacebookF color="white" />
            </Box>
            <Box px={1}>
              <BsWhatsapp color="white" />
            </Box>
          </Flex>
        </Flex>
        <Flex w={"1px"} direction={"column"} justifyContent={"center"}>
          <Divider orientation={"vertical"} h={"90%"} borderColor={"#B83280"} />
        </Flex>
        <Box w={"100%"} h={"100%"} m={"auto"}>
          <Stack
            h={"100%"}
            direction={"column"}
            spacing="24px"
            justifyContent={"space-evenly"}
            py={"10%"}
          >
            <Text textColor={"white"} textAlign={"center"}>
              Nuestros productos son hechos 100% a mano.
            </Text>
            <Text textColor={"white"} textAlign={"center"}>
              Por consultas podes escribinos a nuestras redes sociales o
              enviarnos tu consuta{" "}
              <span
                onClick={onOpen}
                style={{ color: "blue", cursor: "pointer" }}
              >
                aqui
              </span>
              .
            </Text>
            <Text textColor={"white"} textAlign={"center"}>
              Gracias por elegirnos!
            </Text>
          </Stack>
        </Box>
      </Flex>
      <ContactUsModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
