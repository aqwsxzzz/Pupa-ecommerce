import { Schema, model } from "mongoose";

interface Offer {
  name: string;
  image: string;
  price: string;
  quantity: string;
  description: string;
  status: boolean;
}

const OfferSchema = new Schema<Offer>({
  name: String,
  image: String,
  price: String,
  quantity: String,
  description: String,
  status: Boolean,
});

export const OfferModel = model<Offer>("Offer", OfferSchema);
