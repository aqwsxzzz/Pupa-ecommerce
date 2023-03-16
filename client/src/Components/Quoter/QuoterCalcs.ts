import { AxiosResponse } from "axios";
import { bagCostsSetState, bagInfoSetState } from "Utils/Interfaces";

/* Calculate the cost of the cord used. */
const cordCostCalc = (bagInfo: bagInfoSetState, quoterPrices: AxiosResponse<any, any> | undefined) => {
  /* *4 bcuz the cord goes 4 times thru the width,
   +20 includes the cord used out of the width & 
   cordPrice / 100 bcuz we need centimeters and the price is store in meters */
  return Math.ceil(
    (bagInfo.bagWidth * 4 + 20) * (quoterPrices?.data[0].cordPrice / 100) * bagInfo.bagQuantity
  );
};
/* Thread used cant be calculated in centimeters. 
For that we calculate $40 for every 50 bags */
const threadCostCalc = (bagInfo: bagInfoSetState) => {
  return Math.ceil(bagInfo.bagQuantity / 50) * 40;
};

/* Calculate grifa's cost depending on the bags's amount */
const grifaCostCalc = (bagInfo: bagInfoSetState, quoterPrices: AxiosResponse<any, any> | undefined) => {
  return bagInfo.bagQuantity * quoterPrices?.data[0].grifaPrice;
};

const clothCostCalc = (bagInfo: bagInfoSetState, quoterPrices: AxiosResponse<any, any> | undefined) => {
  /* Calculate how much bags fit using the bag width over the roll width.
   +2 is the cloth excess for the sewing*/
  const bagWxRollW = Math.floor(quoterPrices?.data[0].cloth[0].rollWidth / (bagInfo.bagWidth + 2));
  /*Calculate how much bags fit using the bag length over the roll width.
   x 2 is for the 2 sides u need for a bag and the +5 is for the cloth excess for the sewing*/
  const bagLxRollW = Math.floor(quoterPrices?.data[0].cloth[0].rollWidth / bagInfo.bagLength);
  /* Checks if its better to cut bags over the width or the length */
  const clothCentimetersW = Math.ceil((bagInfo.bagLength * bagInfo.bagQuantity) / bagWxRollW);
  const clothCentimetersL = Math.ceil(((bagInfo.bagWidth + 2) * bagInfo.bagQuantity) / bagLxRollW);
  if (clothCentimetersW < clothCentimetersL) {
    return Math.ceil(clothCentimetersW * (quoterPrices?.data[0].cloth[0].price / 100));
  } else {
    return Math.ceil(clothCentimetersL * (quoterPrices?.data[0].cloth[0].price / 100));
  }
};

/* WILL CALCULATE A % OF THE TOTAL TO ADD AS WORKFORCE COSTS AND SET IT TO THE BAG COSTS*/
const workforceCalc = (
  bagInfo: bagInfoSetState,
  clothCost: number,
  cordCost: number,
  grifaCost: number,
  threadCost: number
) => {
  if (bagInfo.workforcePercent === 0) return 0;
  return ((clothCost + cordCost + grifaCost + threadCost) * bagInfo.workforcePercent) / 100;
};

export const calcs = {
  cordCostCalc,
  threadCostCalc,
  grifaCostCalc,
  clothCostCalc,
  workforceCalc,
};
