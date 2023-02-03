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
  FormControl,
  Select,
} from "@chakra-ui/react";
import { APIS } from "Api/managersExport";
import { NewProductProps, ModalProps, CategoriesProps } from "Utils/Interfaces";
import { RootState, useAppSelector } from "Store/store";

interface newProd {
  modal: ModalProps;
}

export const NewProductModal: React.FC<newProd> = ({ modal }) => {
  /* DATA FOR THE NEW PRODUCT TO CREATE */
  const [productInfo, setProductInfo] = useState<NewProductProps>({
    name: "",
    image: "",
    price: "",
    categoryId: "",
  });

  /* RETRIEVE THE CATEGORIES FROM REDUX STORE */
  const { categories } = useAppSelector(
    (state: RootState) => state.categoriesSlice
  );

  /* RETRIVE THE INFO NEEDED FROM THE PICKED CATEGORY AND SAVE IT TO THE PRODUCT STATE */
  const categoryHandler = (e: any) => {
    const value = e.target.value;
    for (let i = 0; i < categories.length; i++) {
      if (value === categories[i].name) {
        setProductInfo({
          ...productInfo,
          categoryId: categories[i]._id,
        });
      }
    }
  };

  /* RETRIEVE NEEDED INFO FROM INPUTS AND SAVE IT TO THE PRODUCT STATE */
  const inputsHandler = (e: any) => {
    const value = e.target.value;
    setProductInfo({
      ...productInfo,
      [e.target.name]: value,
    });
  };

  /* SET THE UPLOADED IMAGE IN THE PRODUCT STATE */
  const imageHandler = (e: any) => {
    setProductInfo({
      ...productInfo,
      image: e.target.files[0],
    });
  };

  /* FUNCTIONS TO CREATE NEW PRODUCT */
  const { mutateAsync: mutateAsyncNewProduct } =
    APIS.productManager.useNewProduct();
  const createNewProduct = async () => {
    await mutateAsyncNewProduct(productInfo);
    modal.onClose();
  };

  return (
    <Modal
      isOpen={modal.isOpen}
      onClose={modal.onClose}
      isCentered
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent maxW={"400px"}>
        <ModalHeader>
          <Text textAlign={"center"} textColor={"#B83280"}>
            NUEVO PRODUCTO
          </Text>
        </ModalHeader>
        <ModalBody>
          <FormControl>
            <Input
              name="name"
              textAlign={"center"}
              placeholder={"Nombre"}
              borderColor={"#B83280"}
              onChange={inputsHandler}
              sx={{
                ":hover": {
                  borderColor: "#B83280",
                },
              }}
            ></Input>
            <Input
              borderColor={"#B83280"}
              type={"file"}
              mt={2}
              onChange={imageHandler}
              sx={{
                "::file-selector-button": {
                  mt: 1,
                  borderColor: "#B83280",
                  color: "#f0d3e9",
                  bgColor: "#B83280",
                  maxW: "95px",
                },
                ":hover": {
                  borderColor: "#B83280",
                },
              }}
            />
            <Input
              name="price"
              textAlign={"center"}
              placeholder={"Precio"}
              borderColor={"#B83280"}
              mt={2}
              onChange={inputsHandler}
              sx={{
                ":hover": {
                  borderColor: "#B83280",
                },
              }}
            ></Input>
            <Input
              name="description"
              textAlign={"center"}
              placeholder={"Descripcion"}
              borderColor={"#B83280"}
              mt={2}
              sx={{
                ":hover": {
                  borderColor: "#B83280",
                },
              }}
            ></Input>
            <Select
              textAlign={"center"}
              placeholder={"Elija una categoria"}
              borderColor={"#B83280"}
              mt={2}
              sx={{
                ":hover": {
                  borderColor: "#B83280",
                },
              }}
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
            <Flex justify={"center"} mt={8}>
              <Button
                onClick={createNewProduct}
                bgColor={"#f0d3e9"}
                border={"1px"}
                borderColor={"#B83280"}
                _hover={{ bgColor: "#B83280" }}
              >
                Crear
              </Button>
            </Flex>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
