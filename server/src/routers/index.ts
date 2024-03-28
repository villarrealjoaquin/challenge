import Router from "express";
import productsRouter from "./products.router";
import AuthRouter from "./auth.router";

const router = Router();

router.use("/products", productsRouter);
router.use("/auth", AuthRouter);

export default router;
