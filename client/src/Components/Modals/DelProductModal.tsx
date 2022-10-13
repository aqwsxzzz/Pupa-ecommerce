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
import { useDelProductById } from "Api/Products/del_products";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  prodId: string;
  editSwitch: () => void;
  refetch: () => void;
}

export const DelProductModal: React.FC<ModalProps> = ({ isOpen, onClose, prodId, editSwitch, refetch }) => {
  /* DELETE PRODUCT FUNCTION */
  const { mutateAsync: mutateAsyncDel } = useDelProductById();
  const delProduct = async () => {
    await mutateAsyncDel(prodId);
    onClose();
    refetch();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered autoFocus={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Flex direction={"column"}>
            <Text textAlign={"center"}>Realmente quieres borrar este producto?</Text>
            <Flex justifyContent={"center"} mt={4}>
              <Button colorScheme={"green"} mr={1} onClick={delProduct}>
                Confirmar
              </Button>
              <Button colorScheme={"red"} onClick={onClose}>
                Cancelar
              </Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
