import React from "react";
import { Flex, Text, Modal, ModalOverlay, ModalContent, ModalBody, Button } from "@chakra-ui/react";
import { useDelProductById } from "Api/Products/del_products";
import { ModalProps } from "../../Utils/Interfaces";

interface DelModalProps {
  modal: ModalProps;
  prodId: string;
  refetch: () => void;
}

export const DelProductModal: React.FC<DelModalProps> = ({ modal, prodId, refetch }) => {
  /* DELETE PRODUCT FUNCTION */
  const { mutateAsync: mutateAsyncDel } = useDelProductById();
  const delProduct = async () => {
    await mutateAsyncDel(prodId);
    modal.onClose();
    refetch();
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
