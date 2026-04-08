import { Router } from "express";
import UserController from "../controllers/userController.js";
import { validateUser } from "../middleware/validation.js";

const router = Router();

router.post("/", validateUser, UserController.createUser);
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;
