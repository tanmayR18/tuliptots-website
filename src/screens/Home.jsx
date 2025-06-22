import React from "react";
import Hero from "../components/core/Home/Hero";
import BloomCards from "../components/core/Home/BloomCards";
import Highlights from "../components/core/Home/Highlights";
import CTA from "../components/core/Home/CTA";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Hero />
      <BloomCards />
      <Highlights />
      <CTA />
      <div
        onClick={() => navigate("/enquiry")}
        className=" fixed bottom-5 right-5 animate-pulse cursor-pointer"
      >
        <div className="group z-20">
          <div className=" z-30 bg-blue-700 relative text-white p-4 rounded-full border-5 border-white">
            <Phone size={25} />
          </div>
          <div className=" z-20 absolute top-1/2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-800 -translate-y-1/2 right-20 py-2 rounded-2xl bg-white text-[#333] font-semibold w-32 text-center">
            <p>Enquiry Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
