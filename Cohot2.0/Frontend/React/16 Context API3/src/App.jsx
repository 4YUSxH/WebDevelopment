import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/products" element= {<Products />}/>
        <Route path="/products/:productId" element= {<ProductDetails />}/>
      </Routes>
    </div>
  );
};

export default App;
