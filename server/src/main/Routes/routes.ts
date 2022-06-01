import { Router } from "express";
const router = Router();

/* PRODUCTS */
import { router as postProduct } from "./ProductRoutes/post_products";

router.use(postProduct);

export { router };
