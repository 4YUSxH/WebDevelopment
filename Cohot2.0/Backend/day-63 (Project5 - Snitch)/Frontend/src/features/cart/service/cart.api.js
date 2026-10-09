import axios from "axios";

const cartApiinstance = axios.create({
  baseURL: "/api/cart",
  withCredentials: true,
});

export const addItemToCart = async ({ productId, variantId }) => {
  const response = await cartApiinstance.post(
    `/add/${productId}/${variantId}`,
    {
      quantity: 1,
    },
  );

  return response.data;
};

export const getItems = async () => {
  const response = await cartApiinstance.get("/");

  // console.log(response.data)

  return response.data;
};

export const incrementCartItem = async ({ productId, variantId }) => {
  const response = await cartApiinstance.patch(
    `quantity/increase/${productId}/${variantId}`,
  );

  return response.data;
};

export const decrementCartItem = async ({ productId, variantId }) => {
  const response = await cartApiinstance.patch(
    `quantity/decrease/${productId}/${variantId}`,
  );

  return response.data;
};

export const createCartOrder = async () => {
  const response = await cartApiinstance.post("/payment/create/order");

  return response.data;
};

export const verifyCartOrder = async ({ razorpay_order_id, razorpay_payment_id, razorpay_signature }) => {
  const response = await cartApiinstance.post("/payment/verify/order", {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  });

  return response.data;
};