import React from "react";
import image1 from "../assets/school/ourTeam/ourTeam.jpg";
import image2 from "../assets/school/ourTeam/ourTeam2.jpg";

const Growth = () => {
  return (
    <div className=" pt-32 pb-12 lg:pt-44 px-4 bg-[#f7eee9]">
      <p className=" text-black font-bold text-center text-xl md:text-2xl lg:text-3xl tracking-wide">
        Our Gardeners of Growth – The Tulip Tots Team
      </p>

      <p className=" lg:w-10/12 mx-auto mt-5 lg:mt-8 text-base lg:text-lg text-slate-700 font-semibold text-center">
        At Tulip Tots International, we believe that early childhood educators
        are more than teachers—they are gentle guides, nurturers of wonder, and
        co-travelers in a child’s magical journey. What truly sets our team
        apart are the values they embody: patience, empathy, joy, and a deep
        respect for the individuality of every child
      </p>

      <div className=" w-10/12 mx-auto flex gap-10 justify-center items-center mt-8">
        <div className=" w-1/2">
          <p className=" text-2xl font-bold">A Values-First Approach</p>
          <p className=" text-slate-800 font-semibold tracking-wide mt-8 text-lg">
            We carefully select team members who radiate kindness, compassion,
            and curiosity—those who see teaching not as a job, but as a calling.
          </p>
        </div>

        <img className=" rounded-2xl w-[400px] h-[400px]" src={image1} />
      </div>

      <div className=" w-10/12 mx-auto flex justify-between gap-10 items-center mt-6">
        <img className=" rounded-2xl w-[400px] h-[400px]" src={image2} />

        <div className=" w-1/2">
          <p className=" text-2xl font-bold">Mindful Recruitment Process</p>
          <div className=" text-slate-800 font-semibold tracking-wide mt-8 text-lg">
            <p>
              Every educator undergoes a thoughtful selection process including:
            </p>
            <li>A values-aligned face-to-face conversation</li>
            <li>A creative written reflection</li>
            <li>A psychometric evaluation</li>
            <li>A thorough background check</li>
          </div>
        </div>
      </div>

      <div className=" p-6 bg-[#FECDD3] rounded-[32px] w-10/12 mx-auto mt-12 ">
        <p className=" text-2xl font-bold tracking-wide text-center">
          Lifelong Learners at Heart
        </p>

        <p className=" text-slate-800 text-center text-lg font-semibold mt-5">
          Our educators are encouraged to continuously reflect, grow, and
          collaborate—just like the children they teach. Regular workshops,
          reflective circles, and co-learning sessions are part of our culture.
        </p>
      </div>
    </div>
  );
};

export default Growth;
