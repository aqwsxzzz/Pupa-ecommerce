import { CategoryController } from "../../Controllers/CategoryController/CategoryController";
import { Router } from "express";

const router = Router();

router.put("/editCategory/:id", CategoryController.editCategory);

export { router };
