import { CategoryController } from "../../Controllers/CategoryController/CategoryController";
import { Router } from "express";

const router = Router();

router.delete("/delCategory/:id", CategoryController.delCategory);

export { router };
