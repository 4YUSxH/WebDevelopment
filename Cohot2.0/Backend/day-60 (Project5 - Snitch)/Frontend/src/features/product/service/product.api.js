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

export const getAllProducts = async () => {
  const response = await productApiInstance.get("/");

  return response.data;
};

export const getProductDetails = async (productId) => {
  const response = await productApiInstance.get(`/detail/${productId}`);

  return response.data;
};

export const addProductVariant = async (productId, newProductVariant) => {
  const formData = new FormData();

  newProductVariant.images.forEach((image) => {
    console.log("API: " + image.file);
    formData.append("images", image.file);
  });

  formData.append("stock", newProductVariant.stock);
  formData.append("priceAmount", newProductVariant.price?.amount || 0);
  formData.append(
    "attributes",
    JSON.stringify(newProductVariant.attributes || {}),
  );

  const response = await productApiInstance.post(
    `/${productId}/variants`,
    formData,
  );

  return response.data;
};
