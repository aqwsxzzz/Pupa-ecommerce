import { ProductController } from "../../Controllers/ProductController/ProductionController";
import { Router } from "express";
import { upload } from "../../Cloudinary/cloudinary";

const router = Router();

router.post(
  "/newProduct",
  upload.single("image"),
  ProductController.newProduct
);

export { router };
