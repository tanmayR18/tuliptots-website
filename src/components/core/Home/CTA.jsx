import React from "react";
import { NavLink } from "react-router";
import image from '../../../assets/home/homeCta.jpg'

const CTA = () => {
  return (
    <>
      <div className=" h-[90vh] w-full relative flex items-end">
        <img
          className=" w-full h-full"
          src={image}
        />
        <div className=" absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.8)] flex flex-col justify-center items-center">
          <div className=" text-white flex flex-col px-10">
            <p className=" text-xl">
              Hard work is worthless for those that don't believe in themselves.
            </p>
            <p className=" self-end mt-1">- Naruto Uzumaki</p>
          </div>
        </div>
        <div
          style={{
            
            boxShadow: "4 20px 20px rgba(0, 0, 0, 0.6)",
          }}
          className=" translate-y-1/2 absolute w-[90%] translate-x-1/2 right-1/2 bg-purple-600 py-20 px-5 rounded-4xl flex flex-col justify-center items-center"
        >
          <p className=" text-white  md:text-2xl text-lg lg:text-3xl text-center mb-10">
            From Little Seeds to Mighty Blossoms <br className=" lg:hidden" /> —
            Join the Tulip Tots Family!
          </p>
          <NavLink to={"enquiry"}>
            <div className={" px-4 py-2 border rounded-md border-white hover:bg-white transition-all duration-300 hover:scale-105 text-white hover:text-purple-600 font-semibold"}>
              <p className=" ">Book a Visit</p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className=" h-64 sm:h-80 w-full" />
    </>
  );
};

export default CTA;
