import React, { useState } from "react";
import {
  Flex,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  ModalHeader,
} from "@chakra-ui/react";
import { CategoriesProps, ModalProps } from "Utils/Interfaces";
import { TiCancel, TiTick } from "react-icons/ti";
import { APIS } from "Api/managersExport";
import { CategoryAdminCard } from "Components/Admin/CategoriesCard";
import { RootState, useAppSelector } from "Store/store";

export const CategoriesModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  /* GET DATA OF EXISTING CATEGORIES FROM STORE*/
  const { categories } = useAppSelector(
    (state: RootState) => state.categoriesSlice
  );

  /* SWITCH FOR "NEW CATEGORY" FORM */
  const [newCategory, setNewCategory] = useState(false);
  const newCategorySwitch = () => {
    setNewCategory(!newCategory);
  };

  /* WILL SAVE THE "NEW CATEGORY" DATA */
  const [newCategoryName, setNewCategoryName] = useState("");

  /* HANDLER TO RETRIEVE CATEGORY NAME TO SAVE ON CHANGE FROM THE USER'S INPUT  */
  const newCategoryNameHandler = (e: any) => {
    const value = e.target.value;
    setNewCategoryName(value);
  };

  /* CREATE THE NEW CATEGORY, SWITCH FORM OFF AND REFETCH CATEGORIES DATA WITH NEW INFO */
  const { mutateAsync: mutateAsyncNewCategory } =
    APIS.categoryManager.useNewCategory();
  const createNewCategory = async () => {
    await mutateAsyncNewCategory(newCategoryName);
    newCategorySwitch();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered autoFocus={false}>
      <ModalOverlay />
      <ModalContent w={"auto"}>
        <ModalHeader w={"100%"}>
          <Flex direction={"column"} justifyContent={"center"}>
            <Text color={"#B83280"} m={"auto"}>
              Categorias
            </Text>
            {newCategory ? (
              <Flex mx={"auto"} mt={4}>
                <Input
                  bgColor={"white"}
                  mr={1}
                  onChange={newCategoryNameHandler}
                ></Input>
                <Flex>
                  <Button mr={1} onClick={createNewCategory}>
                    <TiTick color={"#B83280"} />
                  </Button>
                  <Button onClick={newCategorySwitch}>
                    <TiCancel color={"#B83280"} />
                  </Button>
                </Flex>
              </Flex>
            ) : (
              <Button
                bgColor={"#f0d3e9"}
                textColor={"#B83280"}
                mx={"auto"}
                mt={4}
                onClick={newCategorySwitch}
              >
                Agregar Categoria
              </Button>
            )}
          </Flex>
        </ModalHeader>
        <ModalBody>
          <Flex direction={"column"} mt={4}>
            {categories.map((cat: CategoriesProps) => (
              <CategoryAdminCard cat={cat} key={cat._id} />
            ))}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
