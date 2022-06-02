import { Schema, model } from "mongoose";

interface Offer {
  name: string;
  image: [];
  price: string;
  quantity: string;
  description: string;
}

const OfferSchema = new Schema<Offer>({
  name: String,
  image: [],
  price: String,
  quantity: String,
  description: String,
});

export const OfferModel = model<Offer>("Offer", OfferSchema);
