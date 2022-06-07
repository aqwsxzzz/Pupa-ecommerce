import { ProductController } from "../../Controllers/ProductController/ProductionController";
import { Router } from "express";

const router = Router();

router.delete("/delProduct/:id", ProductController.delProduct);

export { router };
