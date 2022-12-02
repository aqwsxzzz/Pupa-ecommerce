import { CategoryController } from "../../Controllers/CategoryController/CategoryController";
import { Router } from "express";

const router = Router();

router.get("/getAllCategories", CategoryController.getCategories);
router.get("/getCategoryById/:id", CategoryController.getCategoryById);

export { router };
