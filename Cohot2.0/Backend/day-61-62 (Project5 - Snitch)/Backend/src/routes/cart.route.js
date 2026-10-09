import { Router } from "express";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import { validateAddToCart, validateUpdateCart } from "../validator/cart.validator.js";
import {
  addToCartController,
  getCartController,
  increaseQuantityController,
  decreaseQuantityController
} from "../controllers/cart.controller.js";

const cartRouter = Router();

/**
 * @route POST /api/cart/add/:productId/:variantId
 *  @desc Add a product variant to the user's cart
 * @access Private
 * @arguments productId - The ID of the product to add to the cart
 * @arguments variantId - The ID of the product variant to add to the cart
 * @arguments quantity - The quantity of the product variant to add to the cart (optional, default is 1)
 */
cartRouter.post(
  "/add/:productId/:variantId",
  authenticateUser,
  validateAddToCart,
  addToCartController,
);

/**
 * @route GET /api/cart
 * @desc Get the user's cart
 * @access Private
 */
cartRouter.get("/", authenticateUser, getCartController);

/**
 * @route PATCH /api/cart/quantity/increase/:productId/:variantId
 * @desc Increment item quantity by one
 * @access Private
 * @arguments productId - The ID of the product to update in the cart
 * @arguments variantId - The ID of the product variant to update in the cart
 */
cartRouter.patch(
  "/quantity/increase/:productId/:variantId",
  authenticateUser,
  validateUpdateCart,
  increaseQuantityController,
);

/**
 * @route PATCH /api/cart/quantity/decrease/:productId/:variantId
 * @desc Decrement item quantity by one
 * @access Private
 * @arguments productId - The ID of the product to update in the cart
 * @arguments variantId - The ID of the product variant to update in the cart
 */
cartRouter.patch(
  "/quantity/decrease/:productId/:variantId",
  authenticateUser,
  validateUpdateCart,
  decreaseQuantityController,
);

export default cartRouter;
