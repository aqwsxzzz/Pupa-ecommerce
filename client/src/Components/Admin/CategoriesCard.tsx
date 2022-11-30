import React, { useState } from "react";
import { Button, Flex, Input, Text, useDisclosure } from "@chakra-ui/react";
import { RiDeleteBin7Fill, RiEdit2Fill } from "react-icons/ri";
import { TiTick, TiCancel } from "react-icons/ti";
import { CategoriesProps } from "Utils/Interfaces";
import { APIS } from "../../Api/managersExport";
import { DelCategoryModal } from "Components/Modals/DelCategoryModal";

interface Card {
  cat: CategoriesProps;
  refetchCategory: () => void;
}

export const CategoryAdminCard: React.FC<Card> = ({ cat, refetchCategory }) => {
  /* Chakra modal */
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modal = {
    isOpen,
    onClose,
  };

  /* CATEGORY DATA TO MODIFY AND SEND TO EDIT */
  const [categoryEditData, setCategoryEditData] = useState({ _id: cat._id, name: cat.name });

  const categoryNameHandler = (e: any) => {
    const value = e.target.value;
    setCategoryEditData({
      ...categoryEditData,
      [e.target.name]: value,
    });
  };

  /* EDIT STATUS SWITCH */
  const [editCategoryStatus, setEditCategoryStatus] = useState(false);
  const editCategorySwitch = () => {
    setEditCategoryStatus(!editCategoryStatus);
  };

  /* WILL SEND THE EDITED DATA */
  const { mutateAsync: mutateAsyncEdit } = APIS.categoryManager.useEditCategory();
  const editCategory = async () => {
    await mutateAsyncEdit(categoryEditData);
    editCategorySwitch();
    refetchCategory();
  };

  return editCategoryStatus ? (
    <Flex justifyContent={"center"} mb={1}>
      <Flex flex={"3"} mr={12}>
        <Input
          name="name"
          onChange={categoryNameHandler}
          bgColor={"white"}
          defaultValue={cat.name}
          textAlign={"center"}
        />
      </Flex>
      <Flex justifyContent={"flex-end"} flex={"1"}>
        <Button mr={1} onClick={editCategory}>
          <TiTick color="#B83280" />
        </Button>
        <Button onClick={editCategorySwitch}>
          <TiCancel color="#B83280" />
        </Button>
      </Flex>
    </Flex>
  ) : (
    <Flex justifyContent={"center"} mb={1}>
      <Flex flex={"3"} mr={12}>
        <Text textColor={"#B83280"} m={"auto"}>
          {cat.name}
        </Text>
      </Flex>
      <Flex justifyContent={"flex-end"} flex={"1"}>
        <Button mr={1} onClick={editCategorySwitch}>
          <RiEdit2Fill color="#B83280" />
        </Button>
        <Button onClick={onOpen}>
          <RiDeleteBin7Fill color="#B83280" />
        </Button>
        <DelCategoryModal modal={modal} id={cat._id} />
      </Flex>
    </Flex>
  );
};
