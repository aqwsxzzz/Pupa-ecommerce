import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { customHooks } from "Utils/CustomHooks";
import { APIS } from "Api/managersExport";

export const DailyPrices: React.FC = () => {
  /* Toggle the daily prices to enter editable instance. */
  const [editCosts, setEditCosts] = customHooks.useToggle();

  /* Get the information of the daily prices from the DB. */
  const { data: dataQuoter } = APIS.quoterManager.useGetQuoter();

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
            <Input size={"xs"} width={10} />
            <Text flex={"1"} fontWeight={"medium"}>
              x metro.
            </Text>
          </Flex>
          <Flex w={"100%"}>
            <Text fontWeight={"medium"} textAlign={"end"} flex={"1"}>
              Cinta: $
            </Text>
            <Input size={"xs"} width={10} />
            <Text flex={"1"} fontWeight={"medium"}>
              x metro.
            </Text>
          </Flex>
          <Flex w={"100%"}>
            <Text fontWeight={"medium"} textAlign={"end"} flex={"1"}>
              Grifa: $
            </Text>
            <Input size={"xs"} width={10} />
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
          <Text fontWeight={"medium"}>Tela: $ {dataQuoter?.data[0].cloth[0].price} x metro.</Text>
          <Text fontWeight={"medium"}>Cinta: $ {dataQuoter?.data[0].cordPrice} x metro.</Text>
          <Text fontWeight={"medium"}>Grifa: $ {dataQuoter?.data[0].grifaPrice} x bolsa.</Text>
        </VStack>
      )}
      <Flex justifyContent={"center"} mt={1}>
        <Button bgColor={"#B83280"} textColor={"white"} onClick={setEditCosts}>
          Editar
        </Button>
      </Flex>
    </Box>
  );
};
