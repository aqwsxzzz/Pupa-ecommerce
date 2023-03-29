import { QuoterController } from "../../Controllers/QuoterController/quoterController";
import { Router } from "express";

const router = Router();

router.get("/getQuoterInformation", QuoterController.getQuoterInfo);

export { router };
