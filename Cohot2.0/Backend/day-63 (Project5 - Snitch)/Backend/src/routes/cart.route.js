import { Router } from "express";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import { validateAddToCart, validateUpdateCart } from "../validator/cart.validator.js";
import {
  addToCartController,
  getCartController,
  increaseQuantityController,
  decreaseQuantityController,
  createOrderController,
  verifyOrderController
} from "../controllers/cart.controller.js";

const cartRouter = Router();

/**
 *  @route POST /api/cart/add/:productId/:variantId
 * @desc Add a product variant to the user's cart
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

/**
 * @route POST /api/cart/payment/create/order
 * @desc Create a Razorpay order for the user's cart
 * @access Private
 */
cartRouter.post("/payment/create/order", authenticateUser, createOrderController);

/**
 * @route POST /api/cart/payment/verify/order
 * @desc Verify a Razorpay order for the user's cart
 * @access Private
 * @arguments razorpay_order_id - The ID of the Razorpay order to verify
 * @arguments razorpay_payment_id - The ID of the Razorpay payment to verify
 * @arguments razorpay_signature - The signature of the Razorpay payment to verify
 */
cartRouter.post("/payment/verify/order", authenticateUser, verifyOrderController);

export default cartRouter;
