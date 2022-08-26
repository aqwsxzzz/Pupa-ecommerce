import { CategoryController } from "../../Controllers/CategoryController/CategoryController";
import { Router } from "express";

const router = Router();

router.post("/newCategory", CategoryController.newCategory);

export { router };
