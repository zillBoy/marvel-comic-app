/**
 * React Dependencies
 */
import React from "react";

const NavItem = ({ navigation, ...props }) => {
  return (
    <p className="cursor-pointer hover:underline" {...props}>
      {navigation?.name}
    </p>
  );
};

export default NavItem;