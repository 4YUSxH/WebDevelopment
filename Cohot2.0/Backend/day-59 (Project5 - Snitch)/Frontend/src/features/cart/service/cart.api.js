import axios from "axios";

const cartApiinstance = axios.create({
  baseURL: "/api/cart",
  withCredentials: true,
});

export const addItemToCart = async ({productId, variantId}) => {
  const response = await cartApiinstance.post(
    `/add/${productId}/${variantId}`,
    {
      quantity: 1, 
    },
  );

  return response.data;
};
