import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
  VStack,
  Box,
  Flex,
} from "@chakra-ui/react";
import {
  bagCostsSetState,
  bagInfoSetState,
  ModalProps,
} from "Utils/Interfaces";
import { log } from "console";

interface ResultProps {
  bagCosts: bagCostsSetState;
  bagInfo: bagInfoSetState;
  modal: ModalProps;
}

interface bagInfoTypes{
  id: number;
  name: string;
  value: string;
  type: string;
}

export const QuoterResult: React.FC<ResultProps> = ({
  bagInfo,
  bagCosts,
  modal,
}) => {
  const total =
    bagCosts.clothCost +
    bagCosts.cordCost +
    bagCosts.grifaCost +
    bagCosts.threadCost +
    bagCosts.workforceCost;

  const [bagInfoResults, setBagInfoResults] = useState<bagInfoTypes[]>([
    { id: 1, name: "Ancho:", value: bagInfo.bagWidth.toString(), type: "cms." },
    {
      id: 2,
      name: "Largo:",
      value: "",
      type: "cms.",
    },
    {
      id: 3,
      name: "Cantidad:",
      value: bagInfo.bagQuantity.toString(),
      type: "unidades.",
    },
    { id: 4, name: "Cordon:", value: bagInfo.cord ? "Si" : "No", type: "" },
    {
      id: 5,
      name: "Mano de obra:",
      value: bagInfo.workforcePercent.toString(),
      type: "%",
    },
  ]);

  const [bagCostsResults, setBagCostsResults] = useState([
    { id: 1, name: "Costo de tela:", value: bagCosts.clothCost },
    { id: 2, name: "Costo de cinta:", value: bagCosts.cordCost },
    { id: 3, name: "Costo de grifa:", value: bagCosts.grifaCost },
    { id: 4, name: "Costo de hilo:", value: bagCosts.threadCost },
    { id: 5, name: "Costo mano de obra:", value: bagCosts.workforceCost },
  ]);

  useEffect(() => {
    setBagInfoResults([...bagInfoResults].map((info: bagInfoTypes) => {
      if(info.id === bagInfoResults[0].id) {
        return {...info,
        value: bagInfo?.bagWidth.toString()}
      } else if (info.id === bagInfoResults[1].id) {
        return {...info,
        value: bagInfo?.bagLength.toString()}
    } else if (info.id === bagInfoResults[2].id) {
      return {...info,
      value: bagInfo?.bagQuantity.toString()}
    } else if (info.id === bagInfoResults[3].id) {
      return {...info,
      value: bagInfo?.cord.toString()}
      } else if (info.id === bagInfoResults[4].id) {
        return {...info,
        value: bagInfo?.workforcePercent.toString()}
        }
    ))
  }, [bagInfo]);

  return (
    <Modal isOpen={modal.isOpen} onClose={modal.onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={"center"}>
          <Text textColor={"#B83280"} fontWeight={"bold"}>
            Cotizacion
          </Text>
        </ModalHeader>
        <ModalBody>
          <Flex justifyContent={"space-evenly"}>
            <VStack spacing={1} align={"start"}>
              {bagInfoResults.map(
                (info: bagInfoTypes) => (
                  <Text color={"#B7CD6A"} ml={0} key={info.id}>
                    <Text as={"span"} textColor={"#B83280"}>
                      {info.name}&nbsp;
                    </Text>
                    {info.value} {info.type}
                  </Text>
                )
              )}
            </VStack>
            <Box>
              <VStack spacing={1} align={"start"}>
                {bagCostsResults.map(
                  (cost: { id: number; name: string; value: number }) => (
                    <Text color={"#B7CD6A"} key={cost.id}>
                      <Text as={"span"} textColor={"#B83280"}>
                        {cost.name}&nbsp;
                      </Text>
                      ${cost.value}
                    </Text>
                  )
                )}
              </VStack>
            </Box>
          </Flex>
          <Text mt={8} textAlign={"center"} textColor={"#B83280"}>
            Costo total:{" "}
            <Text as={"span"} color={"#B7CD6A"}>
              ${total}
            </Text>
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
