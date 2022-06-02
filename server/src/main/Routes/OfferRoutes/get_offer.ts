import { OfferController } from "../../Controllers/OfferController/OfferController";
import { Router } from "express";

const router = Router();

router.get("/getAllOffers", OfferController.getAllOffers);

export { router };
