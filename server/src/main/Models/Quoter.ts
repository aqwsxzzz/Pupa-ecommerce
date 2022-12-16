import { Schema, model } from "mongoose";

export interface Quoter {
  cloth: [
    {
      clothType: string;
      rollWidth: number; //in centimeters
      price: number;
    }
  ];
  grifaPrice: number;
  cordPrice: number;
}

const QuoterInfoSchema = new Schema<Quoter>({
  cloth: [
    {
      clothType: String,
      rollWidth: Number,
      price: Number,
    },
  ],
  grifaPrice: Number,
  cordPrice: Number,
});

export const QuoterModel = model<Quoter>("QuoterInfo", QuoterInfoSchema);
