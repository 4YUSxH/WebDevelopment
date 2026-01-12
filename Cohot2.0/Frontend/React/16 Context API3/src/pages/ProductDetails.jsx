import React from "react";
import { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const productData = useContext(ProductDataContext);

  const { productId } = useParams();
  // console.log(id)
  let selectedProduct = []
  if(productData.length > 0) {

    selectedProduct = productData.find((elem) => elem.id == productId);
  } // productData mai find karo jiski param id === elem.id ke and elem productData ke elements hai indexwise
  console.log(selectedProduct)

  return (
    <div>
      <div>
        <img src={selectedProduct.image} alt="" />
        <h2>{selectedProduct.title}</h2>
      </div>
    </div>
  );
};

export default ProductDetails;
