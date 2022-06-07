import { Request, Response, NextFunction } from "express";
import { OfferModel } from "../../Models/Offer";

/* DELETE OFFER */

const delOffer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const offer = await OfferModel.findByIdAndDelete(id);
    res.status(200).json(offer);
  } catch (error) {
    return next(error);
  }
};

export { delOffer };
