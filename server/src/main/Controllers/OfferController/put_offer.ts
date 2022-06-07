import { OfferModel } from "../../Models/Offer";
import { Request, Response, NextFunction } from "express";

/* EDIT OFFER */

const editOffer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, image, price, quantity, description } = req.body;
    const { id } = req.params;

    const offer = await OfferModel.findByIdAndUpdate(id, {
      name,
      image,
      price,
      quantity,
      description,
    });

    res.status(200).json(offer);
  } catch (error) {
    return next(error);
  }
};

/* ACTIVE/DEACTIVE OFFER STATUS (MAKE AN OFFER AVAILABLE OR NOT IN THE PAGE) */

const switchOfferStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    const offer = await OfferModel.findByIdAndUpdate(id, { status });
    res.status(200).json(offer);
  } catch (error) {
    return next(error);
  }
};

export { editOffer, switchOfferStatus };
