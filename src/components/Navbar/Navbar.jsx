/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import NavItem from "./NavItem";

/**
 * Constants
 */
import { navigations, mobileNavigation } from "../../utils/constants";

const Navbar = () => {
  return (
    <>
      <div className="sm:hidden flex flex-row-reverse py-6 pr-8">
        <NavItem navigation={mobileNavigation} />
      </div>
      <div className="sm:flex hidden justify-center space-x-8 w-full py-6">
        {navigations.map((nav, index) => (
          <NavItem navigation={nav} key={index} />
        ))}
      </div>
    </>
  );
};

export default Navbar;
