import React from 'react'
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>Product Page</h1>
      
      <Link to='/product/men'>Men Collection</Link>
      <Link to='/product/women'>Women Collection</Link>
    </div>
  )
}

export default Product
