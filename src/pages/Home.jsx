/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <p>Home Page</p>
      </div>
    </>
  );
};

export default Home;
