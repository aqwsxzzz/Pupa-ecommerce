import { OfferModel } from "../../Models/Offer";
import { Request, Response, NextFunction } from "express";

/* GET ALL THE OFFERS */

const getAllOffers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const offer = await OfferModel.find({});
    res.status(200).json(offer);
  } catch (error) {
    return next(error);
  }
};

export { getAllOffers };
