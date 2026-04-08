import { Router } from "express";
import CategoryController from "../controllers/categoryController.js";
import { validateCategory } from "../middleware/validation.js";

const router = Router();

router.post("/", validateCategory, CategoryController.createCategory);
router.get("/", CategoryController.getAllCategories);
router.get("/:id", CategoryController.getCategoryById);
router.put("/:id", CategoryController.updateCategory);
router.delete("/:id", CategoryController.deleteCategory);

export default router;
