import Router from "express";
import productsController from "../controllers/products.controller";
import { validateToken } from "../middlewares/validateToken";

const router = Router();

router.get("/", productsController.getAllProducts);
router.get("/:id", productsController.getProductById);
router.post("/", validateToken, productsController.createProduct);
router.patch("/:id", validateToken, productsController.updateProduct);
router.delete("/:id", validateToken, productsController.deleteProduct);

export default router;
