/**
 * React Dependencies
 */
import React from "react";

const HeroHeader = () => {
  return (
    <div>
      <div className="relative -mt-[72px]">
        <div>
          <img
            className="w-full h-screen object-cover"
            src={require("../../assets/image/hero-header.jpg")}
            alt=""
          />
        </div>
        <div className="absolute bottom-40 ml-6">
          <p>New Release</p>
          <h1>The New 52! Wonder Woman</h1>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
