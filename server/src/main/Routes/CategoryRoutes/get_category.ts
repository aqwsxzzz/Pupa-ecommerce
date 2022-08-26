import { CategoryController } from "../../Controllers/CategoryController/CategoryController";
import { Router } from "express";

const router = Router();

router.get("/getAllCategories", CategoryController.getCategories);

export { router };
