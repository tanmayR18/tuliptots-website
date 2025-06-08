import Footer from "@/components/common/Footer";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const data = [
  {
    text: "Stronger vocabulary and comprehension",
    bgColor: "#E74C3C",
  },
  {
    text: "Better focus and imagination",
    bgColor: "#2ecc71",
  },
  {
    text: "Empathy, curiosity, and lifelong learning",
    bgColor: "#FF5722",
  },
];

const Card = ({ bgColor, text }) => {
  return (
    <div
      className=" p-3  gap-3 rounded-lg flex items-center"
      style={{ backgroundColor: bgColor }}
    >
      <FaCheckCircle size={20} color="#fff" />
      <p className=" text-white text-base font-semibold text-center">{text}</p>
    </div>
  );
};

const Library = () => {
  return (
    <div className=" pt-44 bg-[#f7eee9]">
      <p className=" text-black font-bold text-center text-3xl tracking-wide">
        Our In-House Library - Where Lifelong Readers Begin
      </p>

      <p className=" w-10/12 mx-auto mt-8 text-lg text-slate-700 font-semibold text-center">
        At Tulip Tots International, we nurture the love for reading from the
        very start. Our vibrant in-house library offers hundreds of carefully
        chosen books across themes like nature, science, art, emotions,
        cultures, and classic tales—ensuring there’s something for every curious
        mind.
      </p>

      <div className="bg-blue-200 my-16 w-[90%] mx-auto p-10 text-black font-semibold text-lg rounded-[32px]">
        <p className=" text-2xl font-bold tracking-wide text-slate-900 text-center ">
          Why It Matters ?
        </p>

        <div className=" grid grid-cols-3 gap-6 mt-6 mx-auto ">
          {data.map((item, index) => (
            <Card key={index} text={item.text} bgColor={item.bgColor} />
          ))}
        </div>

        <p className=" text-slate-800 text-center mt-12">
          No matter what future path a child takes—science, art, sports, or
          entrepreneurship—a reader today is a thinker tomorrow.
        </p>
        <p className=" text-slate-800 text-center">
          At Tulip Tots, we don’t just build readers—we build joyful explorers
          of stories, facts, and feelings.
        </p>
      </div>

      <Footer/>
    </div>
  );
};

export default Library;
