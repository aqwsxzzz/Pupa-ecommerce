import { OfferController } from "../../Controllers/OfferController/OfferController";
import { Router } from "express";

const router = Router();

router.delete("/delOffer", OfferController.delOffer);

export { router };
