import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { customHooks } from "Utils/CustomHooks";
import { APIS } from "Api/managersExport";
import { quoterBackEndInfo } from "Utils/Interfaces";
import { TiCancel, TiTick } from "react-icons/ti";

export const DailyPrices: React.FC = () => {
  /* Get the information of the daily prices from the DB. */
  const { data: dataQuoter } = APIS.quoterManager.useGetQuoter();
  /* Toggle the daily prices to enter editable instance. */
  const [editCosts, setEditCosts] = customHooks.useToggle();

  /* State to save new edit information. */
  const [newEdit, setNewEdit] = useState<quoterBackEndInfo>({
    _id: "",
    cloth: [
      {
        clothType: "",
        rollWidth: 0,
        price: 0,
      },
    ],
    grifaPrice: 0,
    cordPrice: 0,
  });

  useEffect(() => {
    if (dataQuoter) {
      setNewEdit({
        _id: dataQuoter?.data[0]._id,
        cloth: [
          {
            clothType: dataQuoter?.data[0].cloth[0].clothType,
            rollWidth: dataQuoter?.data[0].cloth[0].rollWidth,
            price: dataQuoter?.data[0].cloth[0].price,
          },
        ],
        grifaPrice: dataQuoter?.data[0].grifaPrice,
        cordPrice: dataQuoter?.data[0].cordPrice,
      });
    }
  }, [dataQuoter]);
  /* HANDLER */
  const inputsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setNewEdit({
      ...newEdit,
      [e.target.name]: value,
    });
  };
  /* Cloth price handler, needed bcuz cloth is an object type. */
  const clothHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setNewEdit({
      ...newEdit,
      cloth: [{ price: value, clothType: newEdit.cloth[0].clothType, rollWidth: newEdit.cloth[0].rollWidth }],
    });
  };

  /* Cancel Edition */
  const cancelEdition = () => {
    setNewEdit({
      _id: dataQuoter?.data[0]._id,
      cloth: [
        {
          clothType: dataQuoter?.data[0].cloth[0].clothType,
          rollWidth: dataQuoter?.data[0].cloth[0].rollWidth,
          price: dataQuoter?.data[0].cloth[0].price,
        },
      ],
      grifaPrice: dataQuoter?.data[0].grifaPrice,
      cordPrice: dataQuoter?.data[0].cordPrice,
    });
    setEditCosts();
  };

  /* Send change to the DB */
  const { mutateAsync: mutateAsyncEditQuoterPrices } = APIS.quoterManager.usePutQuoter();
  const editQuoterPrices = async () => {
    await mutateAsyncEditQuoterPrices(newEdit);
    setEditCosts();
  };

  return (
    <Box>
      {editCosts ? (
        <VStack
          borderWidth={1}
          borderColor={"#B83280"}
          padding={"4px 16px 16px 16px"}
          spacing={4}
          display={"table"}
          w={"200px"}
        >
          <Text fontWeight={"bold"} textAlign={"center"}>
            Precios al dia
          </Text>
          <Flex w={"100%"}>
            <Text fontWeight={"medium"} textAlign={"end"} flex={"1"}>
              Tela: $
            </Text>
            <Input size={"xs"} width={10} onChange={clothHandler} name={"cloth.price"} />
            <Text flex={"1"} fontWeight={"medium"}>
              x metro.
            </Text>
          </Flex>
          <Flex w={"100%"}>
            <Text fontWeight={"medium"} textAlign={"end"} flex={"1"}>
              Cinta: $
            </Text>
            <Input size={"xs"} width={10} onChange={inputsHandler} name={"cordPrice"} />
            <Text flex={"1"} fontWeight={"medium"}>
              x metro.
            </Text>
          </Flex>
          <Flex w={"100%"}>
            <Text fontWeight={"medium"} textAlign={"end"} flex={"1"}>
              Grifa: $
            </Text>
            <Input size={"xs"} width={10} onChange={inputsHandler} name={"grifaPrice"} />
            <Text flex={"1"} fontWeight={"medium"}>
              x bolsa.
            </Text>
          </Flex>
        </VStack>
      ) : (
        <VStack
          borderWidth={1}
          borderColor={"#B83280"}
          padding={"4px 16px 16px 16px"}
          spacing={4}
          w={"200px"}
        >
          <Text fontWeight={"bold"}>Precios al dia</Text>
          <Text fontWeight={"medium"}>Tela: $ {newEdit.cloth[0].price} x metro.</Text>
          <Text fontWeight={"medium"}>Cinta: $ {newEdit.cordPrice} x metro.</Text>
          <Text fontWeight={"medium"}>Grifa: $ {newEdit.grifaPrice} x bolsa.</Text>
        </VStack>
      )}
      <Flex justifyContent={"center"} mt={1} w={"200px"}>
        {editCosts ? (
          <Flex justifyContent={"space-evenly"} w={"100%"}>
            <Button colorScheme={"green"} onClick={editQuoterPrices}>
              <TiTick />
            </Button>
            <Button colorScheme={"red"} onClick={cancelEdition}>
              <TiCancel />
            </Button>
          </Flex>
        ) : (
          <Button bgColor={"#B83280"} textColor={"white"} onClick={setEditCosts}>
            Editar
          </Button>
        )}
      </Flex>
    </Box>
  );
};
