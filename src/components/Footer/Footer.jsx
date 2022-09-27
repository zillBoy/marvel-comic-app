/**
 * Internal Dependencies
 */
import React from "react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="py-4 flex justify-center">
      <div>
        <p className="text-stone-200">
          Copyright &copy; {currentYear} - Muhammad Usman
        </p>
      </div>
    </div>
  );
};

export default Footer;
