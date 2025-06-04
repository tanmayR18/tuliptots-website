import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen w-full relative bg-[#F7EEE9]">
      <div className=" text-white flex flex-col h-full justify-center items-center">
        <p className=" font-bold text-2xl lg:text-4xl">
          Tulip Tots International{" "}
        </p>
        <p className=" font-bold text-2xl lg:text-4xl">
          where little minds bloom
        </p>
        <p className=" lg:w-1/2 mt-8 font-semibold text-base px-6 lg:text-xl leading-8 text-center opacity-60">
          Tucked away in the cozy, green lanes of Punawale, Tulip Tots
          International is a thoughtfully crafted preschool reimagining early
          education—nurturing curious minds, inspiring creativity, and shaping
          confident global citizens for the 21st century.
        </p>
        <div className=" border border-white px-6 py-3 rounded-md mt-20">
          <p>Our Story</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
