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
import React, { useState, useEffect } from "react";
import { bagInfoSetState, bagCostsSetState } from "Utils/Interfaces";
import { calcs } from "./QuoterCalcs";
import { customHooks } from "Utils/CustomHooks";
import logo2 from "../../Images/2.jpeg";
import { APIS } from "Api/managersExport";

export const Quoter: React.FC = () => {
  const { data: dataQuoter } = APIS.quoterManager.useGetQuoter();

  /* WILL HANDLE THE INFORMATION GIVEN FROM THE ADMIN IN THE FRONT FORM */
  const [isCord, setIsCord] = customHooks.useToggle();
  const [editCosts, setEditCosts] = customHooks.useToggle();
  const [bagInfo, setBaginfo] = useState<bagInfoSetState>({
    bagWidth: 0,
    bagLength: 0,
    bagQuantity: 0,
    cord: false, //Bags have cord?
    workforcePercent: 0, //workforce percent to be applied to the material costs.
  });

  /* WILL SAVE THE COSTS INFORMATION TO BE RENDERED AS FINAL COST */
  const [bagCosts, setBagCosts] = useState<bagCostsSetState>({
    clothCost: 0,
    cordCost: 0,
    threadCost: 0,
    grifaCost: 0,
    workforceCost: 0,
  });

  return (
    <Flex flexDir={"column"}>
      <Flex bgColor={"#f0d3e9"} h={14} mb={8}>
        <Box
          m={"auto"}
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
      </Flex>
      <Flex>
        <Flex flex={"1"}></Flex>
        <Box>
          <FormControl isRequired>
            <VStack maxW={64}>
              <FormLabel textAlign={"center"}>Ancho</FormLabel>
              <Input></Input>
              <FormLabel>Largo</FormLabel>
              <Input></Input>
              <FormLabel>Cantidad de Bolsas</FormLabel>
              <Input></Input>
              {isCord ? (
                <Button onClick={setIsCord} colorScheme={"green"}>
                  Cordon
                </Button>
              ) : (
                <Button onClick={setIsCord} colorScheme={"red"}>
                  Cordon
                </Button>
              )}
              <Button>Cotizar</Button>
            </VStack>
          </FormControl>
        </Box>
        <Flex flex={"1"} justify={"center"}>
          <Box w={48}>
            <VStack borderWidth={1} borderColor={"#B83280"} pb={4} spacing={4}>
              <Text fontWeight={"bold"}>Precios al dia</Text>
              <Text fontWeight={"medium"}>Tela: $ {dataQuoter?.data[0].cloth[0].price}</Text>
              <Text fontWeight={"medium"}>Cinta: $ {dataQuoter?.data[0].cordPrice}</Text>
              <Text fontWeight={"medium"}>Grifa: $ {dataQuoter?.data[0].grifaPrice}</Text>
              {editCosts ? (
                <VStack>
                  <Divider />
                  <Text>Ingrese los nuevos precios.</Text>
                  <Input></Input>
                  <Input></Input>
                  <Input></Input>
                </VStack>
              ) : (
                <Box>
                  <Button bgColor={"#B83280"} textColor={"white"} onClick={setEditCosts}>
                    Editar
                  </Button>
                </Box>
              )}
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
