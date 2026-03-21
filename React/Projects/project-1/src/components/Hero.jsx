import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <h1>your feet deserve the best</h1>
        <p>
          your feet deserve the best and we're here to help you with our shoes.
          your feet deserve the best and we're here to help you with our shoes.
        </p>
        <div className="hero-btn">
          <button className="hero-btn1">Shop Now</button>
          <button className="hero-btn2">Category</button>
        </div>
        <div className="below">
          <p>Also available on</p>
          <div className="available">
            <img src="/public/images/flipkart.png" alt="" />
            <img src="/public/images/amazon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero_right">
        <img src="/public/images/hero-image.png" alt="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
