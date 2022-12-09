import React, { useState } from "react";
import { bagInfoSetState, bagCostsSetState } from "Utils/Interfaces";

export const Quoter: React.FC = () => {
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

  return <></>;
};
