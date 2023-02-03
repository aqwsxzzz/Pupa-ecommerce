import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CategoriesProps, ProductsProps } from "../../Utils/Interfaces";
import { RiEdit2Fill, RiDeleteBin7Fill } from "react-icons/ri";
import { TiTick, TiCancel } from "react-icons/ti";
import { productManager } from "../../Api/Products/productExports";
import { DelProductModal } from "Components/Modals/DelProductModal";
import { RootState, useAppSelector } from "../../Store/store";

interface card {
  prod: ProductsProps;
}

export const ProductsAdminCardGrid: React.FC<card> = ({ prod }) => {
  /* CHAKRA MODAL FUNCS */
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modal = {
    isOpen,
    onClose,
  };

  useEffect(() => {
    setEditedProduct(prod);
  }, [prod]);

  const { categories } = useAppSelector(
    (state: RootState) => state.categoriesSlice
  );
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

  const { mutateAsync: mutateAsyncEdit } = productManager.useEditProduct();
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
      alignContent={"center"}
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
        <Button
          mr={1}
          bgColor={"#f0d3e9"}
          _hover={{ bgColor: "#B83280" }}
          onClick={editProduct}
        >
          <TiTick />
        </Button>
        <Button
          bgColor={"#f0d3e9"}
          _hover={{ bgColor: "#B83280" }}
          onClick={cancelEdit}
        >
          <TiCancel />
        </Button>
      </Box>
    </Flex>
  ) : (
    <Grid
      w={"100%"}
      borderWidth={"1px 1px 0px 1px"}
      borderColor={"#B83280"}
      py={1}
      textAlign={"center"}
      templateAreas={`"Name Name Name Name"
                      "Price Category Description Buttons"`}
      templateColumns={"2.5fr 2.5fr 4.5fr 2.5fr"}
    >
      <GridItem mx={1} area={"Name"}>
        <Text color={"#B83280"}>{editedProduct.name}</Text>
      </GridItem>
      <GridItem area={"Price"}>
        <Text>${editedProduct.price}</Text>
      </GridItem>
      <GridItem area={"Category"}>
        <Text mx={1}>{editedProduct.category?.name}</Text>
      </GridItem>
      <GridItem area={"Description"}>
        <Text display={{ base: "none", md: "flex" }} textAlign={"center"}>
          {editedProduct.description}
        </Text>
      </GridItem>
      <GridItem area={"Buttons"}>
        <Button
          mr={1}
          size={"xs"}
          bgColor={"#f0d3e9"}
          _hover={{ bgColor: "#B83280" }}
          onClick={editSwitch}
        >
          <RiEdit2Fill />
        </Button>
        <Button
          size={"xs"}
          bgColor={"#f0d3e9"}
          _hover={{ bgColor: "#B83280" }}
          onClick={onOpen}
        >
          <RiDeleteBin7Fill />
        </Button>
      </GridItem>
      <DelProductModal modal={modal} id={prod._id} />
    </Grid>
  );
};
