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
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Comic heading={"Top Comics"} />
        <Banner />
      </div>
    </>
  );
};

export default Home;
