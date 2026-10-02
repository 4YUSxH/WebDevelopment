import { setSellerProducts } from "../state/product.slice.js";
import {
  createSellerProduct,
  getSellerProduct,
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

  return {
    handleCreateProduct,
    handleGetSellerProduct,
  };
};
