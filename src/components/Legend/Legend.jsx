/**
 * React Dependencies
 */
import React from "react";

const Legend = ({ title = "", className }) => {
  return (
    <h3
      className={`comic-list-title text-xl sm:text-2xl text-white py-2 px-6 bg-red-500 w-48 my-4 ${className}`}
    >
      {title}
    </h3>
  );
};

export default Legend;
