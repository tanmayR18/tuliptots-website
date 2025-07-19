import React from "react";

import image from "../../../assets/about/vission.png";

const Vision = () => {
  return (
    <div className=" bg-amber-200 p-5 sm:p-8 md:p-12 flex flex-col  items-center gap-3 md:gap-8 rounded-4xl">
      <div className=" -translate-x-4 flex items-center justify-center gap-1 lg:gap-2">
        <img className=" w-10 h-10 -mt-3" src={image} />
        <p className="  text-3xl lg:text-4xl font-bold text-black text-center">
          OUR VISION
        </p>
      </div>
      <p className="  leading-6 tracking-wide text-xl xl:text-2xl text-slate-800  font-semibold text-center">
        At Tulip Tots International, we envision a world where every child
        blossoms with curiosity, confidence, and creativity. Inspired by the
        symbolism of the tulip, we aim to cultivate growth, beauty, and
        resilience in every child. Through a play-based, international approach,
        we prepare children to become global citizens who are grounded in strong
        values and bloom with innovative ideas that impact the world.
      </p>
    </div>
  );
};

export default Vision;
