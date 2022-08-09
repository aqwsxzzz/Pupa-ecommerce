import { UserController } from "../../Controllers/UserController/UserController";
import { Router } from "express";
const router = Router();

/* CREATES USER */
router.post("/newUser", UserController.newUser);

/* LOGIN USER */
router.post("/loginUser", UserController.localLogin);

export { router };
