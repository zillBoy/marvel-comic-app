/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Comic from "../components/Comic/Comic";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <p>Home Page</p>
        <Comic />
        <p>hello world</p>
      </div>
    </>
  );
};

export default Home;
