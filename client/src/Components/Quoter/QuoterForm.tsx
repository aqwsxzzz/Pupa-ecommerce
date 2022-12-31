import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { customHooks } from "Utils/CustomHooks";
import { bagInfoSetState, bagCostsSetState } from "Utils/Interfaces";
import { calcs } from "Components/Quoter/QuoterCalcs";
import { APIS } from "Api/managersExport";
import { QuoterResult } from "./QuoterResultPopover";

export const QuoterForm: React.FC = () => {
  const { data: dataQuoterInfo } = APIS.quoterManager.useGetQuoter();

  /* CHAKRA MODAL FUNCS */
  const {
    isOpen: isOpenResult,
    onOpen: onOpenResult,
    onClose: onCloseResult,
  } = useDisclosure();
  const modal = {
    isOpen: isOpenResult,
    onClose: onCloseResult,
  };

  /* Toggle cord to know if it will be part of the final price or not. */
  const [isCord, toggleCord] = customHooks.useToggle();

  /* WILL HANDLE THE INFORMATION GIVEN FROM THE ADMIN IN THE FRONT FORM */
  const [bagInfo, setBaginfo] = useState<bagInfoSetState>({
    bagWidth: 0,
    bagLength: 0,
    bagQuantity: 0,
    cord: isCord, //Bags have cord?
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

  /* FORM INFO HANDLER */
  const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setBaginfo({
      ...bagInfo,
      [e.target.name]: value,
    });
  };

  const cordToggle = () => {
    toggleCord();
    setBaginfo({
      ...bagInfo,
      cord: isCord,
    });
  };

  const quote = () => {
    if (isCord) {
      const clothCost = calcs.clothCostCalc(bagInfo, dataQuoterInfo);
      const cordCost = calcs.cordCostCalc(bagInfo, dataQuoterInfo);
      const grifaCost = calcs.grifaCostCalc(bagInfo, dataQuoterInfo);
      const threadCost = calcs.threadCostCalc(bagInfo);
      const workforceCost = Math.ceil(
        calcs.workforceCalc(bagInfo, clothCost, cordCost, grifaCost, threadCost)
      );
      setBagCosts({
        ...bagCosts,
        cordCost,
        clothCost,
        grifaCost,
        threadCost,
        workforceCost,
      });

      onOpenResult();
    } else {
      const clothCost = calcs.clothCostCalc(bagInfo, dataQuoterInfo);
      const cordCost = 0;
      const grifaCost = calcs.grifaCostCalc(bagInfo, dataQuoterInfo);
      const threadCost = calcs.threadCostCalc(bagInfo);
      const workforceCost = Math.ceil(
        calcs.workforceCalc(bagInfo, clothCost, cordCost, grifaCost, threadCost)
      );

      setBagCosts({
        ...bagCosts,
        clothCost,
        grifaCost,
        threadCost,
        workforceCost,
      });
      onOpenResult();
    }
  };

  return (
    <>
      <FormControl isRequired>
        <VStack>
          <FormLabel textAlign={"center"}>Ancho</FormLabel>
          <Input name="bagWidth" onChange={formHandler} />
          <FormLabel>Largo</FormLabel>
          <Input name="bagLength" onChange={formHandler} />
          <FormLabel>Cantidad de Bolsas</FormLabel>
          <Input name="bagQuantity" onChange={formHandler} />
          {isCord ? (
            <Button onClick={cordToggle} colorScheme={"green"}>
              Cordon
            </Button>
          ) : (
            <Button onClick={cordToggle} colorScheme={"red"}>
              Cordon
            </Button>
          )}
          <FormLabel textAlign={"center"}> Mano de Obra (%)</FormLabel>
          <Input name="workforcePercent" onChange={formHandler} />
          <Button onClick={quote}>Cotizar</Button>
          <QuoterResult bagInfo={bagInfo} bagCosts={bagCosts} modal={modal} />
        </VStack>
      </FormControl>
    </>
  );
};
