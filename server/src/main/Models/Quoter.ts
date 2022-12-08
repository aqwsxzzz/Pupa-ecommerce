import { Schema, model } from "mongoose";

export interface Quoter {
  cloth: [
    {
      type: string;
      rollWidth: number; //in centimeters
      price: number;
    }
  ];
  threadPrice: string;
  grifaPrice: string;
  cordPrice: string;
}

const QuoterInfoSchema = new Schema<Quoter>({
  cloth: [
    {
      type: String,
      rollWidth: Number,
      price: Number,
    },
  ],
  threadPrice: String,
  grifaPrice: String,
  cordPrice: String,
});

export const QuoterModel = model<Quoter>("QuoterInfo", QuoterInfoSchema);
