import { ProductController } from "../../Controllers/ProductController/ProductionController";
import { Router } from "express";

const router = Router();

router.get("/getAllProducts", ProductController.getAllProducts);

router.get(
  "/getAllProductsPaginated",
  ProductController.getAllProductsPaginated
);

export { router };
