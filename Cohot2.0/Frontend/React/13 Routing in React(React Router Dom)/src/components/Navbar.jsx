import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h2>Navbar</h2>
      <input type="text" />{/* Yaha kuch type karke route change karna iske andar ka text change nahi hoga cause we are using Link */}
      <div className="nav-con">
        {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/product">Product</a> Use Link with react router*/}

        {/* We are using Link instead of 'a' tag cause route change hone par raload hota hai 'a' tag mai par Lnk ka use karne mai pura page reaload nahi hota hai iska use SPA(Single Page Application) mai  hota hai */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
