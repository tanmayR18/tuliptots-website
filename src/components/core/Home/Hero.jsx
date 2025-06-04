import React from "react";
import { Link } from "react-router";

import image1 from "../../../assets/home/homeHero1.png";
import image2 from "../../../assets/home/homeHero2.png";

const Hero = () => {
  return (
    <div
      className="min-h-screen w-full relative bg-[#F7EEE9] overflow-x-hidden pt-44"
    >
      <div className=" absolute bottom-0 -left-8">
        <img className=" w-full h-full " src={image1} />
      </div>
      <div className=" absolute bottom-0 -right-8 h-[400px]">
        <img className=" w-full h-full" src={image2} />
      </div>
      <div className=" text-white flex flex-col h-full justify-center items-center">
        <p className=" font-bold text-xl lg:text-5xl text-slate-700">
          Tulip Tots International{" "}
        </p>
        <p className=" font-bold text-xl lg:text-5xl text-slate-700">
          where little minds bloom
        </p>
        <p className=" lg:w-1/2 mt-12 font-semibold text-base px-6 lg:text-xl leading-8 text-center text-slate-700 opacity-60">
          Tucked away in the cozy, green lanes of Punawale, Tulip Tots
          International is a thoughtfully crafted preschool reimagining early
          education—nurturing curious minds, inspiring creativity, and shaping
          confident global citizens for the 21st century.
        </p>
        <Link
          to={"/story"}
          className=" border-2 hover:scale-105 border-purple-600 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer px-5 py-2 rounded-md mt-16"
        >
          <p>Our Story</p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
