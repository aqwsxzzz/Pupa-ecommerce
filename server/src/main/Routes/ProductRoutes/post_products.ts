import { ProductController } from "../../Controllers/ProductController/ProductionController";
import { Router } from "express";

const router = Router();

router.post("/newProduct", ProductController.newProduct);

export { router };
