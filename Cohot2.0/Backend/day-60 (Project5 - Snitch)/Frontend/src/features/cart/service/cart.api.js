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
