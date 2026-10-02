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
  const sellerId = req.user.id
  
  const products = await productModel.find({seller: sellerId})

  res.status(200).json({
    message: "Products fetched successfully",
    success: true,
    products: products,
  });
}
