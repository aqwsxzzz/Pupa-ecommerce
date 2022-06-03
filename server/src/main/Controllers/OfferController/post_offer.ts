import { Request, Response, NextFunction } from "express";
import { OfferModel } from "../../Models/Offer";

/* NEW OFFER */
const newOffer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, price, quantity, description } = req.body;

    const offer = new OfferModel({
      name,
      image: req.file?.path,
      price,
      quantity,
      description,
      status: false,
    });
    await offer.save();
    return res.json(offer);
  } catch (error) {
    return next(error);
  }
};

export { newOffer };
