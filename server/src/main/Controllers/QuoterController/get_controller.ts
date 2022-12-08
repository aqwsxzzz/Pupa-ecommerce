import { QuoterModel } from "../../Models/Quoter";
import { Request, Response, NextFunction } from "express";

/* GET QUOTER INFORMATION */
const getQuoterInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quoter = await QuoterModel.find({});
    res.json(quoter);
  } catch (error) {
    return next(error);
  }
};

export { getQuoterInfo };
