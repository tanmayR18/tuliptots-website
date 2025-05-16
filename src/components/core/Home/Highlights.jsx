import React from "react";
import { NavLink } from "react-router";

const points = [
  "LEAP curriculum (Learn, explore, act, play)",
  "Global methodologies",
  "Mindfulness & yoga",
  "Nature-based learning",
  "Trained educators",
  "Emotional & creative spaces",
];

const Highlights = () => {
  return (
    <div className=" bg-blue-100 py-12 px-4 lg:px-20">
      <p className=" text-center text-lg lg:text-3xl text-gray-800 font-bold">
        What Makes Us Unique
      </p>
      <div className=" grid lg:grid-cols-3 gap-12 mt-12 w-[80%] mx-auto">
        {points.map((point, index) => (
          <div
            className={` aspect-square  flex justify-center items-center  bg-blue-300`}
            key={index}
          >
            <div className=" flex flex-col justify-center items-center ">
              <img
                className=" h-12 w-12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFm-aSgSMEzAXrdf9horLstHHtihCOq3HpA&s"
              />
              <p className=" font-semibold text-xl mt-6 text-center text-white">
                {point}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex mt-16 justify-center gap-10">
        <div className=" border-2 border-blue-600 rounded-md py-1 w-32 flex justify-center">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline font-bold" : ""} text-black text-lg`
            }
            to={"/about"}
          >
            About
          </NavLink>
        </div>
        <div className=" border-2 border-blue-600 rounded-md py-1  w-32 flex justify-center">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline font-bold" : ""} text-black text-lg`
            }
            to={"/academics"}
          >
            The School
          </NavLink>
        </div>
        <div className=" border-2 border-blue-600 rounded-md py-1  w-32 flex justify-center">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline font-bold" : ""} text-black text-lg`
            }
            to={"/academics"}
          >
            Course
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
