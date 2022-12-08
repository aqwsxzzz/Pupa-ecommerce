import { Request, Response, NextFunction } from "express";
import { Quoter, QuoterModel } from "../../Models/Quoter";

/* NEW QUOTER INFO */
const newQuoter = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { cloth, threadPrice, grifaPrice, cordPrice } = req.body;

    const quoter = new QuoterModel<Quoter>({
      cloth,
      threadPrice,
      grifaPrice,
      cordPrice,
    });
    await quoter.save();
    return res.json(quoter);
  } catch (error) {
    return next(error);
  }
};

export { newQuoter };
