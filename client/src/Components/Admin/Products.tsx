import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { CategoriesProps, ProductsProps } from "../../Interfaces";
import { RiEdit2Fill, RiDeleteBin7Fill } from "react-icons/ri";
import { TiTick, TiCancel } from "react-icons/ti";
import { useEditProduct } from "../../Api/Products/put_products";
import { useGetCategories } from "../../Api/Categories/get_categories";

export const ProductsAdminCard: React.FC<ProductsProps> = (
  prod: ProductsProps
) => {
  const { data: dataCategories, isLoading: isLoadingCategory } =
    useGetCategories();
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

  const editProductHandler = (e: any) => {
    const value = e.target.value;
    setEditedProduct({
      ...editedProduct,
      [e.target.name]: value,
    });
  };

  const categoryHandler = (e: any) => {
    const value = e.target.value;
    console.log(value);
    setEditedProduct({
      ...editedProduct,
      category: { name: value, _id: e.target.label },
    });
    console.log(editedProduct);
  };

  /* SEND THE NEW PRODUC INFO */

  const { mutateAsync } = useEditProduct();
  const editProduct = async () => {
    await mutateAsync(editedProduct);
    editSwitch();
  };

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
        {isLoadingCategory
          ? null
          : dataCategories?.data.map((cat: CategoriesProps) => (
              <option
                value={cat.name}
                key={cat._id}
                label={cat._id}
                onSelect={categoryHandler}
              >
                {cat.name}
              </option>
            ))}
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
      <Text flex={"1"}>{prod.price}</Text>
      <Text mx={1} flex={"1"}>
        {editedProduct.category?.name}
      </Text>
      <Text flex={"3"}>{editedProduct.description}</Text>
      <Box flex={"1"}>
        <Button
          mr={1}
          bgColor={"#f0d3e9"}
          _hover={{ bgColor: "#B83280" }}
          onClick={editSwitch}
        >
          <RiEdit2Fill />
        </Button>
        <Button bgColor={"#f0d3e9"} _hover={{ bgColor: "#B83280" }}>
          <RiDeleteBin7Fill />
        </Button>
      </Box>
    </Flex>
  );
};
