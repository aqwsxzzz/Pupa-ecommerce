import { QuoterController } from "../../Controllers/QuoterController/quoterController";
import { Router } from "express";

const router = Router();

router.post("/newQuoter", QuoterController.newQuoter);

export { router };
