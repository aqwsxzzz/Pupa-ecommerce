import { Box, Button, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import logo2 from "../../Images/2.jpeg";
import { ModalProps, ProductsProps } from "../../Utils/Interfaces";
import { ProductsAdminCard } from "../Admin/ProductsCard";
import { RootState, useAppSelector } from "Store/store";
import { CategoriesModal } from "Components/Modals/CategoriesModal";
import { MdPostAdd } from "react-icons/md";
import { NewProductModal } from "Components/Modals/NewProductModal";

export const Admin: React.FC = () => {
  const { products } = useAppSelector((state: RootState) => state.productsSlice);
  const [showProducts, setShowProducts] = useState(products);

  useEffect(() => {
    setShowProducts(products);
    console.log(products);
  }, [products]);

  /* CATEGORY MODAL FUNCS */
  const { isOpen: isOpenCategories, onOpen: onOpenCategories, onClose: onCloseCategories } = useDisclosure();

  /* NEW PRODUCT MODAL FUNCS */
  const { isOpen: isOpenNewProduct, onOpen: onOpenNewProduct, onClose: onCloseNewProduct } = useDisclosure();
  const modal: ModalProps = {
    isOpen: isOpenNewProduct,
    onClose: onCloseNewProduct,
  };

  return (
    <Flex direction={"column"} w={"100%"}>
      <Flex w={"100%"} h={16} justify={"center"} direction={"row"} bgColor={"#f0d3e9"}>
        <Flex flex={"1"} justifyContent={"center"}>
          <Flex>
            <Text
              m={"auto"}
              color={"#B83280"}
              fontFamily={"sans-serif"}
              fontWeight={"bold"}
              cursor={"pointer"}
            >
              Productos
            </Text>
            <Button
              my={"auto"}
              ml={4}
              bgColor={"#f0d3e9"}
              _hover={{
                border: "1px",
                borderColor: "#B83280",
                marginLeft: "14px",
              }}
              color={"#B83280"}
              onClick={onOpenNewProduct}
            >
              <MdPostAdd />
            </Button>
            <NewProductModal modal={modal} />
          </Flex>
        </Flex>
        <Box
          my={"auto"}
          w={12}
          h={12}
          bgColor={"white"}
          borderRadius={"50%"}
          borderWidth={1}
          borderColor={"black"}
          style={{ overflow: "hidden" }}
        >
          <Flex mt={1.5} mb={1}>
            <Image src={logo2} w={8} m={"auto"} />
          </Flex>
        </Box>
        <Flex flex={"1"} justifyContent={"center"}>
          <Text
            m={"auto"}
            color={"#B83280"}
            fontFamily={"sans-serif"}
            fontWeight={"bold"}
            cursor={"pointer"}
            onClick={onOpenCategories}
          >
            Categorias
          </Text>
          <CategoriesModal isOpen={isOpenCategories} onClose={onCloseCategories} />
        </Flex>
      </Flex>
      <Flex w={"100%"} justifyContent={"center"}>
        <Flex
          direction={"column"}
          justifyContent={"center"}
          mt={12}
          w={"80%"}
          mb={12}
          borderBottom={"1px"}
          borderColor={"#B83280"}
        >
          {products
            ? showProducts.map((prod: ProductsProps) => <ProductsAdminCard prod={prod} key={prod._id} />)
            : null}
        </Flex>
      </Flex>
    </Flex>
  );
};
