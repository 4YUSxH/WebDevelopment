import { Router } from "express";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import {validateAddToCart} from "../validator/cart.validator.js";
import { addToCartController, getCartController } from "../controllers/cart.controller.js";

const cartRouter = Router();

/**
 * @route POST /api/cart/add/:productId/:variantId
 *  @desc Add a product variant to the user's cart
 * @access Private
 * @arguments productId - The ID of the product to add to the cart
 * @arguments variantId - The ID of the product variant to add to the cart
 * @arguments quantity - The quantity of the product variant to add to the cart (optional, default is 1)
 */
cartRouter.post("/add/:productId/:variantId", authenticateUser, validateAddToCart, addToCartController);

/**
 * @route GET /api/cart
 * @desc Get the user's cart
 * @access Private
 */
cartRouter.get("/", authenticateUser, getCartController);

export default cartRouter;
