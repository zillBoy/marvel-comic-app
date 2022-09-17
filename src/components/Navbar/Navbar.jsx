import React from "react";

const navigations = [
  { name: "Home" },
  { name: "Shop" },
  { name: "Blog" },
  { name: "Subscribe" },
  { name: "Samples" },
];

const Navbar = () => {
  return (
    <div className="flex justify-center space-x-8 w-full py-6">
      {navigations.map((nav) => (
        <p className="cursor-pointer hover:underline">{nav.name}</p>
      ))}
    </div>
  );
};

export default Navbar;
