import { Router } from "express";
import { authenticateSeller } from "../middlewares/auth.middleware.js";
import multer from "multer";
import { createProductController, getSellerProductsController } from "../controllers/product.controller.js";
import { productValidator } from "../validator/product.validator.js";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
}); // 5MB

const productRouter = Router();

productRouter.post(
  "/create",
  authenticateSeller,
  upload.array("images", 7),
  productValidator,
  createProductController,
);

productRouter.get("/seller", authenticateSeller, getSellerProductsController);

export default productRouter;
