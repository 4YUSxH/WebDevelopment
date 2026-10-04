import { setSellerProducts, setAllProducts } from "../state/product.slice.js";
import {
  createSellerProduct,
  getAllProducts,
  getSellerProduct,
  getProductDetails
} from "../service/product.api.js";
import { useDispatch } from "react-redux";

export const useProduct = () => {
  const dispatch = useDispatch();

  const handleCreateProduct = async (formData) => {
    const data = await createSellerProduct(formData);

    return data.products;
  };

  const handleGetSellerProduct = async () => {
    const data = await getSellerProduct();

    dispatch(setSellerProducts(data.products));

    return data.products;
  };

  const handleGetAllProducts = async () => {
    const data = await getAllProducts();

    dispatch(setAllProducts(data.products));

    return data.products;
  };

  const handleGetProductDetails = async (productId) => {
    const data = await getProductDetails(productId);

    return data.productDetails;
  };

  return {
    handleCreateProduct,
    handleGetSellerProduct,
    handleGetAllProducts,
    handleGetProductDetails,
  };
};
