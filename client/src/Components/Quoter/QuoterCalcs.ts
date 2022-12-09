import { bagCostsSetState, quoterBackEndInfo } from "Utils/Interfaces";

/* Calculate the cost of the cord used. */
const cordCostCalc = (
  state: bagCostsSetState,
  setState: React.Dispatch<React.SetStateAction<bagCostsSetState>>,
  bagWidth: number,
  quoterPrices: quoterBackEndInfo
) => {
  /* *4 bcuz the cord goes 4 times thru the width,
   +20 includes the cord used out of the width & 
   cordPrice / 100 bcuz we need centimeters and the price is store in meters */
  const cost = Math.ceil((bagWidth * 4 + 20) * (quoterPrices.cordPrice / 100));
  setState({ ...state, cordCost: cost });
};
/* Thread used cant be calculated in centimeters. 
For that we calculate $40 for every 50 bags */
const threadCostCalc = (
  bagQuantity: number,
  state: bagCostsSetState,
  setState: React.Dispatch<React.SetStateAction<bagCostsSetState>>
) => {
  const cost = Math.ceil(bagQuantity / 50) * 40;
  setState({ ...state, threadCost: cost });
};

/* Calculate grifa's cost depending on the bags's amount */
const grifaCostCalc = (
  state: bagCostsSetState,
  setState: React.Dispatch<React.SetStateAction<bagCostsSetState>>,
  bagQuantity: number,
  quoterPrices: quoterBackEndInfo
) => {
  const cost = bagQuantity * quoterPrices.grifaPrice;
  setState({ ...state, grifaCost: cost });
};

const clothCostCalc = (
  state: bagCostsSetState,
  setState: React.Dispatch<React.SetStateAction<bagCostsSetState>>,
  bagQuantity: number,
  bagWidth: number,
  bagLength: number,
  quoterPrices: quoterBackEndInfo
) => {
  /* Calculate how much bags fit using the bag width over the roll width*/
  const bagWxRollW = Math.floor(quoterPrices.cloth[0].rollWidth / bagWidth);
  /*Calculate how much bags fit using the bag length over the roll width*/
  const bagLxRollW = Math.floor(quoterPrices.cloth[0].rollWidth / bagLength);
  /* Checks if its better to cut bags over the width or the length */
  const clothCentimetersW = (bagLength * bagQuantity) / bagWxRollW;
  const clothCentimetersL = (bagWidth * bagQuantity) / bagLxRollW;
  if (clothCentimetersW > clothCentimetersL) {
    const cost = clothCentimetersW * (quoterPrices.cloth[0].price / 100);
    setState({ ...state, clothCost: cost });
  } else {
    const cost = clothCentimetersL * (quoterPrices.cloth[0].price / 100);
    setState({ ...state, clothCost: cost });
  }
};

export const calcs = { cordCostCalc, threadCostCalc, grifaCostCalc, clothCostCalc };
