import React from "react";
import { Link } from "react-router";

import image1 from "../../../assets/home/homeHero1.png";
import image2 from "../../../assets/home/homeHero2.png";

const Hero = () => {
  return (
    <div
      className=" pb-12 lg:min-h-screen w-full relative bg-[#F7EEE9] overflow-x-hidden pt-32 lg:pt-44"
    >
      <div className=" absolute bottom-0 hidden lg:flex -left-8">
        <img className=" w-full h-full " src={image1} />
      </div>
      <div className=" absolute bottom-0 -right-8 h-[400px] hidden lg:flex">
        <img className=" w-full h-full" src={image2} />
      </div>
      <div className=" text-white flex flex-col h-full justify-center items-center">
        <p className=" font-bold text-2xl lg:text-5xl text-pink-700">
          Tulip Tots International{" "}
        </p>
        <p className=" font-bold text-2xl lg:text-5xl text-green-700">
          where little minds bloom
        </p>
        <p className=" lg:w-1/2 mt-8 lg:mt-12 font-semibold text-lg px-4 md:px-6 lg:text-xl lg:leading-8 text-center text-slate-900 opacity-60">
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
