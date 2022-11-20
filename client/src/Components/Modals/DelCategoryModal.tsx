import React from "react";
import { Flex, Text, Modal, ModalOverlay, ModalContent, ModalBody, Button } from "@chakra-ui/react";
import { APIS } from "Api/managersExport";
import { DelModalProps } from "../../Utils/Interfaces";

export const DelCategoryModal: React.FC<DelModalProps> = ({ modal, id, refetch }) => {
  const { mutateAsync: mutateAsyncDelCategory } = APIS.categoryManager.useDelCategoryById();
  /* DELETE CATEGORY FUNCTION */
  const delCategory = async () => {
    await mutateAsyncDelCategory(id);
    modal.onClose();
    refetch();
  };

  return (
    <Modal isOpen={modal.isOpen} onClose={modal.onClose} isCentered autoFocus={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Flex direction={"column"}>
            <Text textAlign={"center"}>
              Realmente quieres borrar esta Categoria?
              <Text as={"span"} display={"table"}>
                (Se borraran los productos que contengan la categoria).
              </Text>
            </Text>
            <Flex justifyContent={"center"} mt={4}>
              <Button colorScheme={"green"} mr={1} onClick={delCategory}>
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
