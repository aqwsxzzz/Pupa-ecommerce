import React, { useState } from "react";
import { Box, Button, Flex, Input, Select, Text, useDisclosure } from "@chakra-ui/react";
import { CategoriesProps, ProductsProps } from "../../Utils/Interfaces";
import { RiEdit2Fill, RiDeleteBin7Fill } from "react-icons/ri";
import { TiTick, TiCancel } from "react-icons/ti";
import { useEditP } from "../../Api/Products/productExports";
import { DelProductModal } from "Components/Modals/DelProductModal";
import { RootState, useAppSelector } from "../../Store/store";

interface Card {
  prod: ProductsProps;
  refetch: () => void;
}

export const ProductsAdminCard: React.FC<Card> = ({ prod, refetch }) => {
  /* CHAKRA MODAL FUNCS */
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modal = {
    isOpen,
    onClose,
  };

  const { categories } = useAppSelector((state: RootState) => state.categoriesSlice);
  const [editStatus, setEditStatus] = useState(false);

  const [editedProduct, setEditedProduct] = useState({
    _id: prod._id,
    name: prod.name,
    image: prod.image,
    price: prod.price,
    description: prod.description,
    category: prod.category,
  });

  const editSwitch = () => {
    setEditStatus(!editStatus);
  };

  /* HANDLERS */

  const editProductHandler = (e: any) => {
    const value = e.target.value;
    setEditedProduct({
      ...editedProduct,
      [e.target.name]: value,
    });
  };

  const categoryHandler = (e: any) => {
    const value = e.target.value;
    for (let i = 0; i < categories.length; i++) {
      if (value === categories[i].name) {
        setEditedProduct({
          ...editedProduct,
          category: { _id: categories[i]._id, name: categories[i].name },
        });
      }
    }
  };

  /* SEND THE NEW PRODUCT INFO */

  const { mutateAsync: mutateAsyncEdit } = useEditP();
  const editProduct = async () => {
    await mutateAsyncEdit(editedProduct);
    editSwitch();
  };

  /* CANCEL MODIFICATION AND RESET IT TO ORIGINAL INFO */
  const cancelEdit = () => {
    setEditedProduct({
      _id: prod._id,
      name: prod.name,
      image: prod.image,
      price: prod.price,
      description: prod.description,
      category: prod.category,
    });
    editSwitch();
  };

  return editStatus ? (
    <Flex
      w={"100%"}
      borderWidth={"1px 1px 0px 1px"}
      borderColor={"#B83280"}
      py={1}
      textAlign={"center"}
      alignItems={"center"}
    >
      <Input
        name={"name"}
        textAlign={"center"}
        mx={1}
        flex={"3"}
        defaultValue={editedProduct.name}
        onChange={(e) => editProductHandler(e)}
      ></Input>
      <Input
        name={"price"}
        textAlign={"center"}
        flex={"1"}
        defaultValue={editedProduct.price}
        onChange={(e) => editProductHandler(e)}
      ></Input>
      <Select
        name={"categoryId"}
        textAlign={"center"}
        mx={1}
        flex={"1"}
        defaultValue={editedProduct.category.name}
        onChange={categoryHandler}
      >
        {categories
          ? categories.map((cat: CategoriesProps) => (
              <option value={cat.name} key={cat._id}>
                {cat.name}
              </option>
            ))
          : null}
      </Select>
      <Input
        name={"description"}
        textAlign={"center"}
        flex={"3"}
        defaultValue={editedProduct.description}
        onChange={(e) => editProductHandler(e)}
      ></Input>
      <Box flex={"1"}>
        <Button mr={1} bgColor={"#f0d3e9"} _hover={{ bgColor: "#B83280" }} onClick={editProduct}>
          <TiTick />
        </Button>
        <Button bgColor={"#f0d3e9"} _hover={{ bgColor: "#B83280" }} onClick={cancelEdit}>
          <TiCancel />
        </Button>
      </Box>
    </Flex>
  ) : (
    <Flex
      w={"100%"}
      borderWidth={"1px 1px 0px 1px"}
      borderColor={"#B83280"}
      py={1}
      textAlign={"center"}
      alignItems={"center"}
    >
      <Text mx={1} flex={"3"}>
        {editedProduct.name}
      </Text>
      <Text flex={"1"}>{editedProduct.price}</Text>
      <Text mx={1} flex={"1"}>
        {editedProduct.category?.name}
      </Text>
      <Text flex={"3"}>{editedProduct.description}</Text>
      <Box flex={"1"}>
        <Button mr={1} bgColor={"#f0d3e9"} _hover={{ bgColor: "#B83280" }} onClick={editSwitch}>
          <RiEdit2Fill />
        </Button>
        <Button bgColor={"#f0d3e9"} _hover={{ bgColor: "#B83280" }} onClick={onOpen}>
          <RiDeleteBin7Fill />
        </Button>
      </Box>
      <DelProductModal modal={modal} id={prod._id} refetch={refetch} />
    </Flex>
  );
};
