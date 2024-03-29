import React from "react";
import { Flex, Text, Modal, ModalOverlay, ModalContent, ModalBody, Button } from "@chakra-ui/react";
import { APIS } from "Api/managersExport";
import { DelModalProps } from "../../Utils/Interfaces";

export const DelProductModal: React.FC<DelModalProps> = ({ modal, id }) => {
  /* DELETE PRODUCT FUNCTION */
  const { mutateAsync: mutateAsyncDel } = APIS.productManager.useDelProductById();
  const delProduct = async () => {
    await mutateAsyncDel(id);
    modal.onClose();
  };

  return (
    <Modal isOpen={modal.isOpen} onClose={modal.onClose} isCentered autoFocus={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Flex direction={"column"}>
            <Text textAlign={"center"}>Realmente quieres borrar este producto?</Text>
            <Flex justifyContent={"center"} mt={4}>
              <Button colorScheme={"green"} mr={1} onClick={delProduct}>
                Confirmar
              </Button>
              <Button colorScheme={"red"} onClick={modal.onClose}>
                Cancelar
              </Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
