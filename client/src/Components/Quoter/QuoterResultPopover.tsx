import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
  Box,
  Flex,
} from "@chakra-ui/react";
import { bagCostsSetState, bagInfoSetState, ModalProps } from "Utils/Interfaces";

interface ResultProps {
  bagCosts: bagCostsSetState;
  bagInfo: bagInfoSetState;
  modal: ModalProps;
}

export const QuoterResult: React.FC<ResultProps> = ({ bagInfo, bagCosts, modal }) => {
  const total =
    bagCosts.clothCost +
    bagCosts.cordCost +
    bagCosts.grifaCost +
    bagCosts.threadCost +
    bagCosts.workforceCost;

  return (
    <Modal isOpen={modal.isOpen} onClose={modal.onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={"center"}>
          <Text>Cotizacion</Text>
        </ModalHeader>
        <ModalBody>
          <Flex justifyContent={"space-evenly"}>
            <VStack spacing={1} textAlign={"center"}>
              <Text>Ancho: {bagInfo.bagWidth} cms.</Text>
              <Text>Largo: {bagInfo.bagLength} cms.</Text>
              <Text>Cantidad: {bagInfo.bagQuantity} unidades.</Text>
              {bagInfo.cord ? <Text>Cordon: Si </Text> : <Text>Cordon: No</Text>}
              <Text>Mano de obra: {bagInfo.workforcePercent}% </Text>
            </VStack>
            <Box>
              <VStack spacing={1}>
                <Text>Costo de tela: ${bagCosts.clothCost}</Text>
                <Text>Costo de cinta: ${bagCosts.cordCost}</Text>
                <Text>Costo de grifa: ${bagCosts.grifaCost}</Text>
                <Text>Costo de hilo: ${bagCosts.threadCost}</Text>
                <Text>Costo mano de obra: ${bagCosts.workforceCost} </Text>
              </VStack>
            </Box>
          </Flex>
          <Text mt={8} textAlign={"center"}>
            Costo total: ${total}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
