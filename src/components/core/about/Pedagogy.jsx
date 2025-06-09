import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { HiMinus } from "react-icons/hi";
import image from "../../../assets/about/pedagogy2.png";

const data = [
  {
    skill: "Language and Communication Skills",
    subSkills: [
      "Listening and following instructions",
      "Expressing thoughts and feelings",
      "Building vocabulary through play",
      "Storytelling and picture reading",
    ],
    bgColor: "#1E3A8A",
  },
  {
    skill: "Cognitive Skills",
    subSkills: [
      "Matching, sorting, and patterns",
      "Problem-solving through activities",
      "Early math and number sense",
      "Memory games and recall tasks",
    ],
    bgColor: "#047857",
  },
  {
    skill: "Social and Emotional Skills",
    subSkills: [
      "Sharing and taking turns",
      "Identifying emotions in self/others",
      "Group activities and cooperation",
      "Developing empathy and kindness",
    ],
    bgColor: "#7C3AED",
  },
  {
    skill: "Environmental Awareness",
    subSkills: [
      "Caring for plants and animals",
      "Understanding seasons and weather",
      "Exploring nature and surroundings",
      "Clean-up and recycling habits",
    ],
    bgColor: "#B91C1C",
  },
  {
    skill: "Physical skills (Gross motor and fine motor skills)",
    subSkills: [
      "Jumping, running, and balancing",
      "Catching and throwing balls",
      "Drawing and cutting practice",
      "Building with blocks and clay",
    ],
    bgColor: "#D97706",
  },
];

const Pedagogy = () => {
  const [currentSkill, setCurrentSkill] = useState("");
  return (
    <div className="mt-26">
      <div className=" px-4 lg:w-[80%] mx-auto">
        <div className=" ">
          <p className=" text-2xl sm:text-3xl tracking-wide text-center font-bold text-black">
            How We Nurture young Minds
          </p>
          <div className=" bg-orange-200 p-5 sm:p-10 rounded-4xl mt-12">
            <p className="  font-semibold text-slate-800 text-base sm:text-lg">
              Our curriculum is thoughtfully designed, combining global best
              practices with the nurturing spirit of play-based learning. We
              draw inspiration from renowned educational philosophies and align
              closely with the{" "}
              <strong>National Education Policy (NEP) 2020</strong>, which
              emphasizes the importance of the{" "}
              <strong>Foundational Stage (ages 3–8)</strong>—a period that lays
              the cornerstone for lifelong learning.
            </p>
            <p className=" mt-4 font-semibold text-slate-800 text-lg">
              Our approach follows the developmental and pedagogical guidelines
              set by the Early{" "}
              <strong>Childhood Care and Education (ECCE) framework</strong> and
              the
              <strong>
                {" "}
                National Council of Educational Research and Training (NCERT)
              </strong>
              .
            </p>
          </div>

          <div className=" mt-16 gap-10 grid lg:grid-cols-2 place-items-center grid-cols-1">
            <div>
              <img className="" src={image} />
            </div>
            <div>
              <p className=" text-center lg:text-start text-2xl font-bold text-purple-800 ">
                Our Innovative 5x4 Skill-Based Framework
              </p>
              <div className=" space-y-5 mt-7">
                {data.map((item) => (
                  <Card
                    setCurrentSkill={setCurrentSkill}
                    currentSkill={currentSkill}
                    skill={item.skill}
                    subSkills={item.subSkills}
                    bgColor={item.bgColor}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ bgColor, setCurrentSkill, currentSkill, skill, subSkills }) => {
  return (
    <div
      onClick={() => {
        if (currentSkill === skill) {
          setCurrentSkill("");
          return;
        }
        setCurrentSkill(skill);
      }}
      className={`${
        currentSkill === skill ? "h-50" : "h-16"
      } transition-all duration-500 bg-white overflow-hidden cursor-pointer shadow-sm`}
    >
      <div className=" h-16 px-2 sm:px-4 flex items-center">
        <div
          className=" h-6 w-6 sm:h-9 sm:w-9 rounded-full shrink-0 flex justify-center items-center"
          style={{ backgroundColor: bgColor }}
        >
          <p className=" text-white font-bold ">
            {currentSkill === skill ? <HiMinus size={14} color="#fff" /> : <IoMdAdd size={14} color="#fff" />}
          </p>
        </div>
        <p
          style={{ color: currentSkill === skill ? bgColor : "#000" }}
          className=" sm:text-lg ml-2 sm:ml-3 font-bold"
        >
          {skill}
        </p>
      </div>
      <div className="p-4 px-8 pt-2">
        {subSkills.map((sub) => (
          <li key={sub} className=" text-slate-700 font-semibold">
            {sub}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Pedagogy;
