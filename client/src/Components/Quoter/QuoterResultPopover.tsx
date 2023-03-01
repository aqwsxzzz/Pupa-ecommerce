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

interface ResultProps {
  bagCosts: bagCostsSetState;
  bagInfo: bagInfoSetState;
  modal: ModalProps;
}

interface bagInfoTypes {
  name: string;
  value: string;
  type: string;
}

interface bagCostsTypes {
  name: string;
  value: number;
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
    { name: "Ancho:", value: "", type: "cms." },
    {
      name: "Largo:",
      value: "",
      type: "cms.",
    },
    {
      name: "Cantidad:",
      value: "",
      type: "unidades.",
    },
    { name: "Cordon:", value: bagInfo.cord ? "Si" : "No", type: "" },
    {
      name: "Mano de obra:",
      value: "",
      type: "%",
    },
  ]);

  const [bagCostsResults, setBagCostsResults] = useState<bagCostsTypes[]>([
    {
      name: "Costo de tela:",
      value: 0,
    },
    { name: "Costo de cinta:", value: 0 },
    { name: "Costo de grifa:", value: 0 },
    { name: "Costo de hilo:", value: 0 },
    { name: "Costo mano de obra:", value: 0 },
  ]);

  const [, setForceRerender] = useState({});

  useEffect(() => {
    let arr = bagInfoResults;

    arr.map((info: bagInfoTypes) => {
      if (info.name === "Ancho:") {
        arr[0] = { ...info, value: bagInfo.bagWidth.toString() };
      } else if (info.name === "Largo:") {
        arr[1] = { ...info, value: bagInfo.bagLength.toString() };
      } else if (info.name === "Cantidad:") {
        arr[2] = { ...info, value: bagInfo.bagQuantity.toString() };
      } else if (info.name === "Cordon:") {
        arr[3] = { ...info, value: bagInfo.cord ? "Si" : "No" };
      } else arr[4] = { ...info, value: bagInfo.workforcePercent.toString() };
    });
    setBagInfoResults(arr);
  }, [bagInfo]);

  useEffect(() => {
    let arr = bagCostsResults;
    // arr[0] = { ...arr[0], value: bagCosts.clothCost };
    // arr[1] = { ...arr[1], value: bagCosts.cordCost };
    // arr[2] = { ...arr[2], value: bagCosts.grifaCost };
    // arr[3] = { ...arr[3], value: bagCosts.threadCost };
    // arr[4] = { ...arr[4], value: bagCosts.workforceCost };

    arr.map((info: bagCostsTypes) => {
      if (info.name === "Costo de tela:") {
        arr[0] = { ...arr[0], value: bagCosts.clothCost };
      } else if (info.name === "Costo de cinta:") {
        arr[1] = { ...arr[1], value: bagCosts.cordCost };
      } else if (info.name === "Costo de grifa:") {
        arr[2] = { ...arr[2], value: bagCosts.grifaCost };
      } else if (info.name === "Costo de hilo:") {
        arr[3] = { ...arr[3], value: bagCosts.threadCost };
      } else arr[4] = { ...arr[4], value: bagCosts.workforceCost };
    });

    setBagCostsResults(arr);
    forceUpdate();
  }, [bagCosts]);

  const forceUpdate = () => {
    setForceRerender({});
  };

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
              {bagInfoResults.map((info: bagInfoTypes) => (
                <Text color={"#B7CD6A"} ml={0} key={info.name}>
                  <Text as={"span"} textColor={"#B83280"}>
                    {info.name}&nbsp;
                  </Text>
                  {info.value} {info.type}
                </Text>
              ))}
            </VStack>
            <Box>
              <VStack spacing={1} align={"start"}>
                {bagCostsResults.map((cost: bagCostsTypes) => (
                  <Text color={"#B7CD6A"} key={cost.name}>
                    <Text as={"span"} textColor={"#B83280"}>
                      {cost.name}&nbsp;
                    </Text>
                    ${cost.value}
                  </Text>
                ))}
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
