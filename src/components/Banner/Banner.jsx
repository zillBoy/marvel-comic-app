/**
 * Internal Dependencies
 */
import React, { useRef } from "react";

const Banner = () => {
  const emailRef = useRef();

  const onSubscribeHandler = () => {
    // TODO: Subscribe to mailing list
  };

  return (
    <div className="relative mt-4" id="subscribe">
      <div className="bg-gradient-to-r from-stone-900">
        <img
          className="w-full h-80 object-cover opacity-60"
          src={require("../../assets/image/banner-1.jpg")}
          alt="banner"
        />
      </div>
      <div className="absolute top-8 sm:top-16 px-6">
        <p className="text-2xl sm:text-3xl font-semibold uppercase text-white italic">
          Subscribe To
        </p>
        <p className="text-4xl sm:text-6xl font-black uppercase text-white italic">
          Our mailing list
        </p>
        <input
          ref={emailRef}
          className="w-56 sm:w-60 mt-24 sm:mt-8 py-1.5 px-2"
        />
        <button className="bg-red-800 py-1.5 px-6 text-white my-2 mx-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default Banner;
