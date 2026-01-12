import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../api/productApi";

export const ProductDataContext = createContext()


const ProductContext = (prop) => {
  const [productData, setProductData] = useState([]);

  const setData = async () => {
    setProductData(await getData())
  }

  useEffect(() => {
    setData()
  }, []);

  return <div>
    <ProductDataContext.Provider value={productData}>
        {prop.children}
    </ProductDataContext.Provider>
  </div>;
};

export default ProductContext;
