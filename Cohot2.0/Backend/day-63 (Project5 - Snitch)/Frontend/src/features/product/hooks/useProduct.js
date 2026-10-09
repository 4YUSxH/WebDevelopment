import { setSellerProducts, setAllProducts } from "../state/product.slice.js";
import {
  createSellerProduct,
  getAllProducts,
  getSellerProduct,
  getProductDetails,
  addProductVariant,
} from "../service/product.api.js";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useProduct = () => {
  const dispatch = useDispatch();

  const handleCreateProduct = useCallback(async (formData) => {
    const data = await createSellerProduct(formData);

    return data.products;
  }, []);

  const handleGetSellerProduct = useCallback(async () => {
    const data = await getSellerProduct();

    dispatch(setSellerProducts(data.products));

    return data.products;
  }, [dispatch]);

  const handleGetAllProducts = useCallback(async () => {
    const data = await getAllProducts();

    dispatch(setAllProducts(data.products));

    return data.products;
  }, [dispatch]);

  const handleGetProductDetails = useCallback(async (productId) => {
    const data = await getProductDetails(productId);

    return data.productDetails;
  }, []);

  const handleAddProductVariant = async (productId, newProductVariant) => {
    const data = await addProductVariant(productId, newProductVariant);

    console.log("Hook: " + newProductVariant)

    return data;
  };

  return {
    handleCreateProduct,
    handleGetSellerProduct,
    handleGetAllProducts,
    handleGetProductDetails,
    handleAddProductVariant,
  };
};
