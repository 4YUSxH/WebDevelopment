import productModel from "../models/product.model.js";

// Get the stock of a specific product variant
export const stockOfVariant = async (productId, variantId) => {
    const product = await productModel.findOne({
        _id: productId,
        "variants._id": variantId,
    });

    const stock = product.variants.find(variant => variant._id.toString() === variantId).stock || 0;
    
    return stock;
}