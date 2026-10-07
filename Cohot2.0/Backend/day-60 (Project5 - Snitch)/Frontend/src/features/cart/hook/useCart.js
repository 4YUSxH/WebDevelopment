import {
  addItemToCart,
  decrementCartItem,
  getItems,
  incrementCartItem,
} from "../service/cart.api.js";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { decrementItemQuantity, incrementItemQuantity, setItems } from "../state/cart.slice.js";

export const useCart = () => {
  const dispatch = useDispatch();

  const handleAddItemToCart = async ({ productId, variantId }) => {
    const data = await addItemToCart({ productId, variantId });

    return data;
  };

  const handleGetItems = useCallback(async () => {
    const data = await getItems();

    dispatch(setItems(data.cart.items));

    return data;
  }, [dispatch]);

  const handleIncrementCartItem = useCallback(
    async ({ productId, variantId }) => {
      const data = await incrementCartItem({ productId, variantId });

      dispatch(incrementItemQuantity({ productId, variantId }));

      return data;
    },
    [dispatch],
  );

  const handleDecrementCartItem = useCallback(
    async ({ productId, variantId }) => {
      const data = await decrementCartItem({ productId, variantId });

      dispatch(decrementItemQuantity({ productId, variantId }));

      return data;
    },
    [dispatch],
  );

  return {
    handleAddItemToCart,
    handleGetItems,
    handleIncrementCartItem,
    handleDecrementCartItem,
  };
};
