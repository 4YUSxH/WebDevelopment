import cartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";
import { stockOfVariant } from "../dao/product.dao.js";

export const addToCartController = async (req, res) => {
  const { productId, variantId } = req.params;
  const { quantity = 1 } = req.body;

  console.log("Product ID:", productId);
  console.log("Variant ID:", variantId);
  console.log("Quantity:", quantity);

  // Check if the product and variant exist in the database
  const product = await productModel.findOne({
    _id: productId,
    "variants._id": variantId,
  });
  if (!product) {
    return res
      .status(404)
      .json({ message: "Product or variant not found", success: false });
  }

  //   fetching the stock of the product variant from the database using dao file
  const stock = await stockOfVariant(productId, variantId);

  // Get the user's cart or create a new one if it doesn't exist
  const cart =
    (await cartModel.findOne({ user: req.user._id })) ||
    (await cartModel.create({ user: req.user._id }));

  // Check if the product variant is already in the cart
  const isProductAlreadyInCart = cart.items.some(
    (item) =>
      item.product.toString() === productId &&
      item.variant?.toString() === variantId,
  );

  if (isProductAlreadyInCart) {
    const quantityInCart = cart.items.find(
      // Find the item in the cart
      (item) =>
        item.product.toString() === productId &&
        item.variant?.toString() === variantId,
    ).quantity;

    // Check if the total quantity in the cart plus the new quantity exceeds the stock
    if (quantityInCart + quantity > stock) {
      return res.status(400).json({
        message: `Cannot add ${quantity} items to cart. Only ${stock} items left in stock.`,
        success: false,
      });
    }

    await cartModel.findOneAndUpdate(
      {
        user: req.user._id,
        "items.product": productId,
        "items.variant": variantId,
      },
      { $inc: { "items.$.quantity": quantity } },
      { new: true },
    );

    return res.status(200).json({
      message: "Cart updated successfully",
      success: true,
    });
  }

  if (quantity > stock) {
    // Check if the requested quantity is greater than the stock
    return res.status(400).json({
      message: `Cannot add ${quantity} items to cart. Only ${stock} items left in stock.`,
      success: false,
    });
  }

  cart.items.push({
    product: productId,
    variant: variantId,
    quantity,
    price: product.variants.find(
      (variant) => variant._id.toString() === variantId,
    ).price, // Set the price of the item in the cart to the price of the product variant
  });

  await cart.save();

  return res.status(200).json({
    message: "Product added to cart successfully",
    success: true,
  });
};

export const getCartController = async (req, res) => {
  const userId = req.user._id;

  let cart = await cartModel
    .findOne({ user: userId })
    .populate("items.product");

  if (!cart) {
    cart = await cartModel.create({ user: userId });
  }

  return res.status(200).json({
    message: "Cart fetched successfully",
    success: true,
    cart,
  });
};

export const increaseQuantityController = async (req, res) => {
  const { productId, variantId } = req.params;

  const product = await productModel.findOne({
    _id: productId,
    "variants._id": variantId,
  });
  if (!product) {
    return res
      .status(404)
      .json({ message: "Product or variant not found", success: false });
  }

  const cart = await cartModel.findOne({ user: req.user._id });
  if (!cart) {
    return res.status(404).json({ message: "Cart not found", success: false });
  }

  const stock = await stockOfVariant(productId, variantId);

  const itemQuantityInCart =
    cart.items.find(
      (item) =>
        item.product.toString() === productId &&
        item.variant?.toString() === variantId,
    )?.quantity || 0;

  if (itemQuantityInCart + 1 > stock) {
    return res.status(400).json({
      message: `Cannot increase quantity. Only ${stock} items left in stock.`,
      success: false,
    });
  }

  await cartModel.findOneAndUpdate(
    {
      user: req.user._id,
      "items.product": productId,
      "items.variant": variantId,
    },
    { $inc: { "items.$.quantity": 1 } },
    { new: true },
  );

  return res.status(200).json({
    message: "Cart updated successfully",
    success: true,
  });
};

export const decreaseQuantityController = async (req, res) => {
  const { productId, variantId } = req.params;

  const product = await productModel.findOne({
    _id: productId,
    "variants._id": variantId,
  });
  if (!product) {
    return res
      .status(404)
      .json({ message: "Product or variant not found", success: false });
  }

  const cart = await cartModel.findOne({ user: req.user._id });
  if (!cart) {
    return res.status(404).json({ message: "Cart not found", success: false });
  }

  const itemQuantityInCart =
    cart.items.find(
      (item) =>
        item.product.toString() === productId &&
        item.variant?.toString() === variantId,
    )?.quantity || 0;

  if (itemQuantityInCart <= 1) {
    return res
      .status(400)
      .json({
        message: "Cannot decrease quantity. Item not in cart.",
        success: false,
      });
  }

  const qty = await cartModel.findOneAndUpdate(
    {
      user: req.user._id,
      "items.product": productId,
      "items.variant": variantId,
    },
    { $inc: { "items.$.quantity": -1 } },
    { new: true },
  );

  return res.status(200).json({
    message: "Cart updated successfully",
    success: true,
  });
};
