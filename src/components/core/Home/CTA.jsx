import React from "react";
import { NavLink } from "react-router";

const CTA = () => {
  return (
    <>
      <div className=" h-[90vh] w-full relative flex items-end">
        <img
          className=" w-full h-full"
          src="https://educateradiateelevate.org/wp-content/uploads/2023/04/pexels-mikhail-nilov-8923075-1-1024x682.jpg"
        />
        <div className=" absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.75)] flex flex-col justify-center items-center">
          <div className=" text-white flex flex-col px-10">
            <p className=" text-xl">
              Hard work is worthless for those that don't believe in themselves.
            </p>
            <p className=" self-end mt-1">- Naruto Uzumaki</p>
          </div>
        </div>
        <div className=" shadow-2xl translate-y-1/2 absolute w-[90%] translate-x-1/2 right-1/2 bg-blue-400 py-20 px-5 rounded-4xl flex flex-col justify-center items-center">
          <p className=" text-white text-lg lg:text-3xl text-center mb-10">
            From Little Seeds to Mighty Blossoms <br className=" lg:hidden" /> —
            Join the Tulip Tots Family!
          </p>
          <NavLink to={"enquiry"}>
            <div className={" px-4 py-2 border rounded-md border-white "}>
              <p className=" text-white">Book a Visit</p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className=" h-80 w-full" />
    </>
  );
};

export default CTA;
