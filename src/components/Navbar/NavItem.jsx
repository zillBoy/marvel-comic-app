/**
 * React Dependencies
 */
import React from "react";

const NavItem = ({ navigation: { name, ...navProps }, ...props }) => {
  return (
    <a
      className="scroll-smooth font-semibold cursor-pointer hover:underline"
      {...navProps}
    >
      {name}
    </a>
  );
};

export default NavItem;
