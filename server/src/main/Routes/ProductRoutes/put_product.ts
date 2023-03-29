import { ProductController } from "../../Controllers/ProductController/ProductionController";
import { Router } from "express";
import { upload } from "../../Cloudinary/cloudinary";

const router = Router();

router.put("/editProduct/:id", upload.single("image"), ProductController.editProduct);

export { router };
