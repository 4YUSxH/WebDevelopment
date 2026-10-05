import { uploadImage } from "../services/upload.service.js";
import productModel from "../models/product.model.js";

export const createProductController = async (req, res) => {
  const { title, description, priceAmount, priceCurrency } = req.body;
  const sellerId = req.user.id;

  const images = await Promise.all(
    req.files.map(async (file) => {
      return uploadImage(file, file.originalname);
    }),
  );

  const product = await productModel.create({
    title,
    description,
    seller: sellerId,
    price: {
      amount: priceAmount,
      currency: priceCurrency,
    },
    images: images.map((url) => ({ url })),
  });

  res.status(201).json({
    message: "Product created successfully",
    success: true,
    product,
  });
};

export const getSellerProductsController = async (req, res) => {
  const sellerId = req.user.id;

  const products = await productModel.find({ seller: sellerId });

  res.status(200).json({
    message: "Products fetched successfully",
    success: true,
    products: products,
  });
};

export const getAllProductsController = async (req, res) => {
  const products = await productModel.find();

  if (!products || products.length === 0) {
    return res.status(404).json({
      message: "No products found",
      success: false,
    });
  }

  return res.status(200).json({
    message: "Products fetched successfully",
    success: true,
    products,
  });
};

export const getProductDetailsController = async (req, res) => {
  const { id } = req.params;

  const productDetails = await productModel.findById(id);
  if (!productDetails) {
    return res.status(404).json({
      message: "Product not found",
      success: false,
    });
  }

  return res.status(200).json({
    message: "Product details fetched successfully",
    success: true,
    productDetails,
  });
};

export const addProductVariantController = async (req, res) => {
  const { productId } = req.params;

  // Check if the product exists and belongs to the authenticated seller
  const product = await productModel.findOne({
    _id: productId,
    seller: req.user.id,
  });
  if (!product) {
    return res.status(404).json({
      message:
        "Product not found or you are not authorized to add variants to this product",
      success: false,
    });
  }

  const files = req.files;
  const images = [];
  if (files || files.length !== 0) {
    const uploadedImages = (
      await Promise.all(
        files.map(async (file) => {
          const url = await uploadImage(file, file.originalname);
          return url;
        }),
      )
    ).map((url) => images.push(url));
  }

  const price = req.body.price;
  const stock = req.body.stock;
  const attributes = JSON.parse(req.body.attributes || "{}");

  console.log(product, images, price, stock, attributes);

  product.variants.push({
    images,
    price: {
      amount: Number(price) || product.price.amount, // Use the product's price if not provided
      currency: req.body.priceCurrency || product.price.currency, // Use the product's currency if not provided
    },
    stock,
    attributes,
  });

  await product.save();

  return res.status(200).json({
    message: "Product variant added successfully",
    success: true,
    product,
  });
};
