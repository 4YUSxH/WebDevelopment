import {
  addItemToCart,
  createCartOrder,
  decrementCartItem,
  getItems,
  incrementCartItem,
  verifyCartOrder,
} from "../service/cart.api.js";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setItems } from "../state/cart.slice.js";

export const useCart = () => {
  const dispatch = useDispatch();

  const handleAddItemToCart = async ({ productId, variantId }) => {
    const data = await addItemToCart({ productId, variantId });

    return data;
  };

  const handleGetItems = useCallback(async () => {
    const data = await getItems();

    dispatch(setItems(data.cart));

    return data;
  }, [dispatch]);

  const handleIncrementCartItem = useCallback(
    async ({ productId, variantId }) => {
      const data = await incrementCartItem({ productId, variantId });

      await handleGetItems();

      return data;
    },
    [handleGetItems],
  );

  const handleDecrementCartItem = useCallback(
    async ({ productId, variantId }) => {
      const data = await decrementCartItem({ productId, variantId });

      await handleGetItems();

      return data;
    },
    [handleGetItems],
  );

  const handleCreateCartOrder = useCallback(async () => {
    const data = await createCartOrder();

    return data.order;
  }
  , []);

  const handleVerifyCartOrder = useCallback(async ({ razorpay_order_id, razorpay_payment_id, razorpay_signature }) => {
    const data = await verifyCartOrder({ razorpay_order_id, razorpay_payment_id, razorpay_signature });

    return data.success;
  }, []);

  return {
    handleAddItemToCart,
    handleGetItems,
    handleIncrementCartItem,
    handleDecrementCartItem,
    handleCreateCartOrder,
    handleVerifyCartOrder,
  };
};
