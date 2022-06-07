import { OfferController } from "../../Controllers/OfferController/OfferController";
import { Router } from "express";

const router = Router();

router.put("/editOffer/:id", OfferController.editOffer);
router.put("/switchOfferStatus/:id", OfferController.switchOfferStatus);

export { router };
