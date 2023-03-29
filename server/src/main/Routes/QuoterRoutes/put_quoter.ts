import { QuoterController } from "../../Controllers/QuoterController/quoterController";
import { Router } from "express";

const router = Router();

router.put("/editQuoter/:id", QuoterController.editQuoter);

export { router };
