import React from "react";
import {
  Box,
  Flex,
  FormControl,
  Input,
  IconButton,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { EmailIcon, ArrowForwardIcon, PhoneIcon } from "@chakra-ui/icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactUsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const CancelForm = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered autoFocus={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <FormControl h={"100%"}>
            <Flex h={"100%"} direction={"column"}>
              <Flex pt={5}>
                <Text textColor={"#B83280"} pr={1}>
                  *
                </Text>
                <IconButton
                  aria-label={"Send email"}
                  icon={<ArrowForwardIcon />}
                  variant={"outline"}
                  colorScheme={"pink"}
                  borderRight={"none"}
                  borderTopRightRadius={"none"}
                  borderBottomRightRadius={"none"}
                  _hover={{ backgroundColor: "black" }}
                  cursor={"default"}
                />
                <Input
                  type={"text"}
                  borderLeft={"none"}
                  placeholder={"Nombre"}
                  borderColor={"#B83280"}
                  borderTopLeftRadius={"none"}
                  borderBottomLeftRadius={"none"}
                  _hover={{ borderColor: "#B83280" }}
                  _focusVisible={{ outline: "none" }}
                />
              </Flex>
              <Flex pt={5}>
                <Text textColor={"#B83280"} pr={1}>
                  *
                </Text>
                <IconButton
                  aria-label={"Send email"}
                  icon={<EmailIcon />}
                  variant={"outline"}
                  colorScheme={"pink"}
                  borderRight={"none"}
                  borderTopRightRadius={"none"}
                  borderBottomRightRadius={"none"}
                  _hover={{ backgroundColor: "black" }}
                  cursor={"default"}
                />
                <Input
                  type={"email"}
                  borderLeft={"none"}
                  placeholder={"Direccion de correo"}
                  borderColor={"#B83280"}
                  borderTopLeftRadius={"none"}
                  borderBottomLeftRadius={"none"}
                  _hover={{ borderColor: "#B83280" }}
                  _focusVisible={{ outline: "none" }}
                />
              </Flex>
              <Flex pl={2.5} pt={5}>
                <IconButton
                  aria-label={"Send email"}
                  icon={<PhoneIcon />}
                  variant={"outline"}
                  colorScheme={"pink"}
                  borderRight={"none"}
                  borderTopRightRadius={"none"}
                  borderBottomRightRadius={"none"}
                  _hover={{ backgroundColor: "black" }}
                  cursor={"default"}
                />
                <Input
                  type={"tel"}
                  borderLeft={"none"}
                  placeholder={"Telefono"}
                  borderColor={"#B83280"}
                  borderTopLeftRadius={"none"}
                  borderBottomLeftRadius={"none"}
                  _hover={{ borderColor: "#B83280" }}
                  _focusVisible={{ outline: "none" }}
                />
              </Flex>
              <Text textColor={"#B83280"} pt={5}>
                * Campos Obligatorios
              </Text>
              <Box pl={2.5} pt={5}>
                <Textarea
                  placeholder="Escribe tu consulta aqui."
                  variant={"unstyled"}
                  resize={"none"}
                  border={"1px solid #B83280"}
                  pl={2.5}
                  style={{ overflow: "hidden" }}
                />
              </Box>
              <Box w={"100%"} pt={5}>
                <Flex direction={"row"} justifyContent={"end"}>
                  <Button mr={4} colorScheme={"green"}>
                    Enviar
                  </Button>
                  <Button colorScheme={"red"} onClick={CancelForm}>
                    Cancelar
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
