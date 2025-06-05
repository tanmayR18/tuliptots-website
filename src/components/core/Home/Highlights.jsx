import React from "react";
import { NavLink } from "react-router";
import image1 from "../../../assets/home/unique/leap.jpg";
import image2 from "../../../assets/home/unique/globalMethodology.jpg";
import image3 from "../../../assets/home/unique/yoga.jpg";
import image4 from "../../../assets/home/unique/natureBasedLearning.jpg";
import image5 from "../../../assets/home/unique/trainedEducator.jpg";
import image6 from "../../../assets/home/unique/creative.jpg";

const points = [
  {
    text: "LEAP curriculum (Learn, explore, act, play)",
    image: image1,
    color: "#f34f6a",
  },
  {
    text: "Global methodologies",
    image: image2,
    color: "#008000",
  },
  {
    text: "Mindfulness & yoga",
    image: image3,
    color: "#f34f6a",
  },
  {
    text: "Nature-based  learning",
    image: image4,
    color: "#008000",
  },
  {
    text: "Trained educators",
    image: image5,
    color: "#f34f6a",
  },
  {
    text: "Emotional & creative spaces",
    image: image6,
    color: "#008000",
  },
];

const Highlights = () => {
  return (
    <div className=" bg-blue-100 py-12 px-4 lg:px-20">
      <p className=" text-center text-2xl md:text-3xl text-gray-800 font-bold">
        What Makes Us Unique
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 md:w-[90%] xl:w-[80%] mx-auto">
        {points.map((point, index) => (
          <div
            className={` h-[250px]  flex justify-center items-center mt-12`}
            key={index}
          >
            <div className=" flex flex-col justify-center items-center relative">
              <img
                className=" h-44 w-44 rounded-full md:-translate-y-2"
                src={point?.image}
              />
              <p
                style={{ color: point.color }}
                className=" md:absolute font-semibold tracking-wide text-lg leading-6 mt-6 text-center md:bottom-0 md:translate-y-full"
              >
                {point.text}
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
        <div className=" border-2 border-amber-700 group hover:scale-105 hover:bg-amber-700 cursor-pointer transition-all duration-300   rounded-md py-1  w-32 flex justify-center items-center">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline font-bold" : ""} text-black text-lg`
            }
            to={"/blogs"}
          >
            <p className="text-amber-700 group-hover:text-white transition-all duration-300 text-center">
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
