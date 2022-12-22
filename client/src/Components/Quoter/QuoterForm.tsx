import { Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { customHooks } from "Utils/CustomHooks";
import { bagInfoSetState, bagCostsSetState } from "Utils/Interfaces";
import { calcs } from "Components/Quoter/QuoterCalcs";

export const QuoterForm: React.FC = () => {
  /* Toggle cord to know if it will be part of the final price or not. */
  const [isCord, setIsCord] = customHooks.useToggle();
  /* WILL HANDLE THE INFORMATION GIVEN FROM THE ADMIN IN THE FRONT FORM */
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
    <>
      <FormControl isRequired>
        <VStack>
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
    </>
  );
};
