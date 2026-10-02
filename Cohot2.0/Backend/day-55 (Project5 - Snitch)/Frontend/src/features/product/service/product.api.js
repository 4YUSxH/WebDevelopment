import axios from "axios";

const productApiInstance = axios.create({
  baseURL: "/api/products",
  withCredentials: true,
});

export const createSellerProduct = async (formData) => {
  const response = await productApiInstance.post("/create", formData);

  return response.data;
};

export const getSellerProduct = async () => {
  const response = await productApiInstance.get("/seller");

  return response.data;
};
