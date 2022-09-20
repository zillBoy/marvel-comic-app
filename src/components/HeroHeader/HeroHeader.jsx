/**
 * React Dependencies
 */
import React from "react";

const HeroHeader = ({ image, eyebrow, title, btnText }) => {
  return (
    <div>
      <div className="relative">
        <div className="bg-black">
          <img
            className="w-full h-screen object-cover opacity-80"
            src={image}
            alt="hero header cover"
          />
        </div>
        <div className="absolute bottom-40 ml-20">
          <p className="text-base text-white ">{eyebrow}</p>
          <h1 className="text-6xl font-bold italic text-white w-4/6 my-4">
            {title}
          </h1>
          <button className="text-white bg-black px-5 py-2">{btnText}</button>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
