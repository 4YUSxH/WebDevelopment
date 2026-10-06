import { addItemToCart } from "../service/cart.api.js";
import { useDispatch } from "react-redux";
import { addItem } from "../state/cart.slice.js";

export const useCart = () => {
  const dispatch = useDispatch();

  const handleAddItemToCart = async ({ productId, variantId }) => {
    const data = await addItemToCart({ productId, variantId });

    return data;
  };

  return {
    handleAddItemToCart,
  };
};
