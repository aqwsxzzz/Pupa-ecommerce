import React, { useState } from "react";
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
  ModalHeader,
  Spacer,
} from "@chakra-ui/react";
import { CategoriesProps, ModalProps } from "Utils/Interfaces";
import { useGetCategories, useGetCategoryById } from "Api/Categories/get_categories";
import { RiDeleteBin7Fill, RiEdit2Fill } from "react-icons/ri";
import { TiCancel, TiTick } from "react-icons/ti";
import { useNewCategory } from "Api/Categories/post_categories";

export const CategoriesModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { data: dataCategories, isLoading: isLoadingCategories } = useGetCategories();
  const [newCategory, setNewCategory] = useState(false);

  const { mutateAsync } = useNewCategory();

  const newCategoryHandler = () => {
    setNewCategory(!newCategory);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered autoFocus={false}>
      <ModalOverlay />
      <ModalContent bgColor={"#f0d3e9"} w={"auto"}>
        <ModalHeader w={"100%"}>
          <Flex direction={"column"} justifyContent={"center"}>
            <Text color={"#B83280"} m={"auto"}>
              Categorias
            </Text>
            {newCategory ? (
              <Flex mx={"auto"} mt={4}>
                <Input bgColor={"white"} mr={1}></Input>
                <Flex>
                  <Button mr={1}>
                    <TiTick color={"#B83280"} />
                  </Button>
                  <Button onClick={newCategoryHandler}>
                    <TiCancel color={"#B83280"} />
                  </Button>
                </Flex>
              </Flex>
            ) : (
              <Button textColor={"#B83280"} mx={"auto"} mt={4} onClick={newCategoryHandler}>
                Agregar Categoria
              </Button>
            )}
          </Flex>
          <Flex direction={"column"} mt={4}>
            {isLoadingCategories
              ? null
              : dataCategories?.data.map((cat: CategoriesProps) => (
                  <Flex justifyContent={"center"} mb={1} key={cat._id}>
                    <Flex flex={"3"} mr={12}>
                      <Text textColor={"#B83280"}>{cat.name}</Text>
                    </Flex>
                    <Flex justifyContent={"flex-end"} flex={"1"}>
                      <Button mr={1}>
                        <RiEdit2Fill color="#B83280" />
                      </Button>
                      <Button>
                        <RiDeleteBin7Fill color="#B83280" />
                      </Button>
                    </Flex>
                  </Flex>
                ))}
          </Flex>
        </ModalHeader>
        <ModalBody></ModalBody>
      </ModalContent>
    </Modal>
  );
};
