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
        <div className=" border-2 border-green-500 hover:scale-105 group hover:bg-green-500 cursor-pointer transition-all duration-300   rounded-md py-1 w-32 flex justify-center items-center">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline font-bold" : ""} text-black text-lg`
            }
            to={"/aboutUs"}
          >
            <p className="text-green-500 group-hover:text-white transition-all duration-300">
              About
            </p>
          </NavLink>
        </div>
        <div className=" border-2 border-orange-400 group hover:scale-105 hover:bg-orange-400 cursor-pointer transition-all duration-300   rounded-md py-1  w-32 flex justify-center items-center">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline font-bold" : ""} text-black text-lg`
            }
            to={"/blogs"}
          >
            <p className="text-orange-400 group-hover:text-white transition-all duration-300 text-center">
              Blogs
            </p>
          </NavLink>
        </div>
        <div className=" border-2 border-blue-400 group hover:scale-105 hover:bg-blue-400 cursor-pointer transition-all duration-300  rounded-md py-1  w-32 flex justify-center items-center">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline font-bold" : ""} text-black text-lg`
            }
            to={"/gallery"}
          >
            <p className="text-blue-400 group-hover:text-white transition-all duration-300 text-center">
              Gallery
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
