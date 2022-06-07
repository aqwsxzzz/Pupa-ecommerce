import { Schema, model } from "mongoose";

interface Quoter {
  clothPrice: string;
  threadPrice: string;
  grifaPrice: string;
  tapePrice: string;
}

const QuoterInfoSchema = new Schema<Quoter>({
  clothPrice: String,
  threadPrice: String,
  grifaPrice: String,
  tapePrice: String,
});

export const QuoterModel = model<Quoter>("QuoterInfo", QuoterInfoSchema);
