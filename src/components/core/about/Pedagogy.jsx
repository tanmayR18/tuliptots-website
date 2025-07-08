import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { HiMinus } from "react-icons/hi";
import image from "../../../assets/about/pedagogy2.png";

// import cric2 from "../../../assets/about/leap/cric2.png";
// import cric1 from "../../../assets/about/leap/cric1.png";
// import cric3 from "../../../assets/about/leap/cric3.png";
// import cric4 from "../../../assets/about/leap/cric4.png";

import cric1 from "../../../assets/school/library/element 1.png";
import cric2 from "../../../assets/school/library/element2.png";
import cric3 from "../../../assets/school/library/element6.png";
import cric4 from "../../../assets/about/leap/cric5.png";

import rocket from "../../../assets/about/leap/rocket.png";

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

const data2 = [
  {
    skill: "L - Learn through Living",
    subSkills:
      "Children absorb knowledge best through experience. From real-life tasks to storytelling, songs, and sensory exploration, our learning is grounded in what children do—not just what they’re told.",
    bgColor: "#1E3A8A",
  },
  {
    skill: "E - Explore with Wonder",
    subSkills:
      "Curiosity is our compass. We invite children to explore their world through nature walks, loose parts, discovery corners, and open-ended materials that spark questions and ideas.",
    bgColor: "#047857",
  },
  {
    skill: "A - Act with Purpose",
    subSkills:
      "Every action matters—from planting a seed to helping a friend. Children engage in meaningful tasks, build independence, and develop a sense of responsibility, empathy, and initiative.",
    bgColor: "#7C3AED",
  },
  {
    skill: "P - Play as Learning",
    subSkills:
      "Play is the heartbeat of childhood. Through imaginative, constructive, and social play, children build skills in language, problem-solving, collaboration, and emotional expression.",
    bgColor: "#B91C1C",
  },
];

const Pedagogy = () => {
  const [currentSkill, setCurrentSkill] = useState("");
  return (
    <div className="py-20 bg-[#EAF4F5] overflow-x-hidden">
      <div className=" px-4 lg:w-[85%] mx-auto">
        <div className=" ">
          <p className=" text-3xl lg:text-4xl sm:text-3xl tracking-wide text-center font-bold text-black">
            How We Nurture young Minds
          </p>
          <div className=" bg-orange-200 p-5 sm:p-10 rounded-4xl mt-12">
            <p className="  font-semibold text-slate-800 text-xl tracking-wider lg:text-2xl">
              At Tulip Tots International, we believe the early years are a
              magical time of discovery, growth, and endless possibility. Our
              curriculum is thoughtfully designed to nurture the whole
              child—combining global best practices with the play-based,
              child-led approach at the heart of early learning.
            </p>

            <div className=" relative">
              <p className=" text-center font-semibold  text-3xl lg:text-4xl mt-8">
                Our Curriculum Aligned with
              </p>

              <div className=" flex justify-between relative z-20">
                <div className=" text-xl  mt-8 z-40 relative flex-col mx-auto md:mx-0 pl-8">
                  <div className=" flex flex-col sm:flex-row items-center  md:translate-x-14 gap-5">
                    <div className=" relative w-fit">
                      <img className=" w-[250px]" src={cric1} />
                      <div className=" absolute top-0 left-0 right-0 bottom-0 -translate-y-3 flex justify-center items-center p-3">
                        <p className=" text-center">
                          NEP 2020 <br /> National <br /> Education Policy
                        </p>
                      </div>
                    </div>
                    <div className=" relative w-fit">
                      <img className=" w-[250px]" src={cric2} />
                      <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3">
                        <p className=" text-center">
                          LEAP <br /> Curriculum
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col sm:flex-row items-center  gap-5">
                    <div className=" relative w-fit">
                      <img className=" w-[250px]" src={cric3} />
                      <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3">
                        <p className=" text-center">
                          ECCE <br /> Early Childhood <br /> Care and Education
                        </p>
                      </div>
                    </div>
                    <div className=" relative w-fit">
                      <img className=" w-[250px]" src={cric4} />
                      <div className=" absolute top-0 left-0 right-0 bottom-0 -translate-y-0 flex justify-center items-center p-3">
                        <p className=" text-center">
                          NCERT <br /> National Council of <br /> Education
                          Research and <br /> Training
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" hidden z-20 md:flex absolute top-1/2 -translate-y-1/2 md:-right-[70px] lg:-right-[100px] xl:-right-[150px]">
                  <img
                    className=" md:h-[200px] lg:h-[260px] xl:h-[350px] mt-20 "
                    src={rocket}
                  />
                </div>
              </div>
            </div>

            <p className=" mt-4 font-semibold text-slate-800 tracking-wider text-2xl hidden lg:flex">
              These frameworks emphasize:
            </p>
            <div className=" hidden lg:flex-col mt-2 font-semibold text-slate-800 tracking-wider">
              <li>A flexible, multi-level, activity-based learning model</li>
              <li>
                A strong foundation in language, early numeracy,
                problem-solving, and emotional wellbeing
              </li>
              <li>
                Hands-on exploration, creative expression, and a connection with
                nature
              </li>
              <li>
                Learning through stories, songs, art, movement, and real-world
                experiences
              </li>
            </div>

            <p className=" hidden lg:flex mt-4 font-semibold text-slate-800 tracking-wider text-2xl">
              Every learning moment at Tulip Tots is filled with wonder,
              purpose, and joy. Whether indoors or outdoors, our children are
              encouraged to ask questions, explore freely, and express
              themselves—building not just knowledge, but also confidence,
              empathy, and resilience
            </p>
          </div>

          <div className=" mt-16 gap-10 grid lg:grid-cols-2 place-items-center grid-cols-1">
            <div>
              <img className="" src={image} />
            </div>
            <div>
              <p className=" text-center  lg:text-start text-3xl font-bold text-purple-800 ">
                Introducing the LEAP Curriculum
              </p>

              <div className=" space-y-5 mt-7">
                {data2.map((item) => (
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
          <p className=" mt-10 text-slate-800 font-semibold text-center text-xl md:text-2xl tracking-wide ">
            Our LEAP Curriculum (Learn, Explore, Act, Play) brings our
            educational philosophy to life. It is a hands-on, experiential, and
            holistic framework designed especially for young children—supporting
            their cognitive, physical, social-emotional, and creative
            development.
          </p>
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
        currentSkill === skill ? " h-60 sm:h-44 lg:h-60" : "h-16"
      } transition-all duration-500 bg-white overflow-hidden cursor-pointer shadow-sm`}
    >
      <div className=" h-16 px-2 sm:px-4  flex items-center">
        <div
          className=" h-6 w-6 sm:h-9 sm:w-9 rounded-full shrink-0 flex justify-center items-center"
          style={{ backgroundColor: bgColor }}
        >
          <p className=" text-white font-bold ">
            {currentSkill === skill ? (
              <HiMinus size={14} color="#fff" />
            ) : (
              <IoMdAdd size={14} color="#fff" />
            )}
          </p>
        </div>
        <p
          style={{ color: currentSkill === skill ? bgColor : "#000" }}
          className=" text-xl sm:text-2xl ml-2 sm:ml-3 font-bold tracking-wider"
        >
          {skill}
        </p>
      </div>
      <div className="p-4 px-8 pt-2">
        <p className=" text-slate-700 font-semibold text-xl leading-6 tracking-wider sm:text-2xl">
          {subSkills}
        </p>
      </div>
    </div>
  );
};

// {subSkills.map((sub) => (
//           <li key={sub} className=" text-slate-700 font-semibold">
//             {sub}
//           </li>
//         ))}
export default Pedagogy;
