import React from "react";
import { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const productData = useContext(ProductDataContext);

  let rederData = "Loading...";
  if (productData.length > 0) {
    rederData = productData.map((elem, idx) => {
      return (
        <Link
          className="product"
          to={`/products/${elem.id}`}
          key={idx}
        >
          <div>
            <img src={elem.image} alt="" />
            <h2>{elem.title}</h2>
          </div>
        </Link>
      );
    });
  }

  return <div className="allProducts">{rederData}</div>;
};

export default Products;
