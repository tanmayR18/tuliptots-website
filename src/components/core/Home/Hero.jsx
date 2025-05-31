import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full relative">
      <div className="absolute h-screen w-full -z-10">
        <div className=" absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.75)]" />
        <img
          className=" w-full h-full"
          src="https://static.toiimg.com/thumb/msid-52685364,width-1280,height-720,resizemode-4/52685364.jpg"
        />
      </div>
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
