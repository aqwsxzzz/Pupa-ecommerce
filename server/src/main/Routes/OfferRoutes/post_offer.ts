import { OfferController } from "../../Controllers/OfferController/OfferController";
import { Router } from "express";

const router = Router();

router.post("/newOffer", OfferController.newOffer);

export { router };
