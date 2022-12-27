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
} from "@chakra-ui/react";
import { bagCostsSetState, ModalProps } from "Utils/Interfaces";

interface ResultProps {
  bagCosts: bagCostsSetState;
  modal: ModalProps;
}

export const QuoterResult: React.FC<ResultProps> = ({ bagCosts, modal }) => {
  const total =
    bagCosts.clothCost +
    bagCosts.cordCost +
    bagCosts.grifaCost +
    bagCosts.threadCost +
    bagCosts.workforceCost;

  return (
    <Modal isOpen={modal.isOpen} onClose={modal.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={"center"}>
          <Text>Cotizacion</Text>
        </ModalHeader>
        <ModalBody textAlign={"center"}>
          <VStack spacing={1}>
            <Text>Costo de tela: ${bagCosts.clothCost}</Text>
            <Text>Costo de cinta: ${bagCosts.cordCost}</Text>
            <Text>Costo de grifa: ${bagCosts.grifaCost}</Text>
            <Text>Costo de hilo: ${bagCosts.threadCost}</Text>
            <Text>Costo mano de obra: ${bagCosts.workforceCost} </Text>
          </VStack>
          <Text mt={8}>Costo total: ${total} </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
