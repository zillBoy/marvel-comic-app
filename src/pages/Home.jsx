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
import Footer from "../components/Footer/Footer";
import Character from "../components/Character/Character";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Comic heading={"Top Comics"} />
        <Banner />
        <Character />
        <Footer />
      </div>
    </>
  );
};

export default Home;
