import React from "react";
import Header from "./Header";
import What from "./What";
import Features from "./Features";
import Support from "./Support";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";
import "../styles/landing.css";

const Landing = () => {
  return (
    <>
      <Header />
      <What />
      <Features />
      <Support />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Landing;
