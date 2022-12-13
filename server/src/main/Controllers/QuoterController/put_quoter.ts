import { QuoterModel } from "../../Models/Quoter";
import { Request, Response, NextFunction } from "express";

/* EDIT QUOTER INFORMATION */
const editQuoter = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { cloth, cordPrice, grifaPrice } = req.body;
    const { id } = req.params;

    const quoter = await QuoterModel.findByIdAndUpdate(
      id,
      {
        cloth,
        cordPrice,
        grifaPrice,
      },
      { new: true }
    );

    res.json(quoter);
  } catch (error) {
    return next(error);
  }
};

export { editQuoter };
