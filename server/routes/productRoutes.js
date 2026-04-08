import { Router } from "express";
import ProductController from "../controllers/productController.js";
import { validateProduct } from "../middleware/validation.js";

const router = Router();

router.post("/", validateProduct, ProductController.createProduct);
router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);
router.get("/category/:categoryId", ProductController.getProductsByCategory);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

export default router;
