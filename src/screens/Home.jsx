import React from "react";
import Hero from "../components/core/Home/Hero";
import BloomCards from "../components/core/Home/BloomCards";
import Highlights from "../components/core/Home/Highlights";
import CTA from "../components/core/Home/CTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <BloomCards />
      <Highlights />
      <CTA />
    </div>
  );
};

export default Home;
