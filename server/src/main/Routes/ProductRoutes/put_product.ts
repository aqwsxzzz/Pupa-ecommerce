import { ProductController } from "../../Controllers/ProductController/ProductionController";
import { Router } from "express";

const router = Router();

router.put("/editProduct/:id", ProductController.editProduct);

export { router };
