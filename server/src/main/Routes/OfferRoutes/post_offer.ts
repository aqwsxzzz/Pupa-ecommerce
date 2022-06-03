import { OfferController } from "../../Controllers/OfferController/OfferController";
import { Router } from "express";
import { upload } from "../../Cloudinary/cloudinary";

const router = Router();

router.post("/newOffer", upload.single("image"), OfferController.newOffer);

export { router };
