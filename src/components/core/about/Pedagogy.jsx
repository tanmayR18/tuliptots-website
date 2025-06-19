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
    <div className="mt-26">
      <div className=" px-4 lg:w-[80%] mx-auto">
        <div className=" ">
          <p className=" text-2xl sm:text-3xl tracking-wide text-center font-bold text-black">
            How We Nurture young Minds
          </p>
          <div className=" bg-orange-200 p-5 sm:p-10 rounded-4xl mt-12">
            <p className="  font-semibold text-slate-800 text-base sm:text-lg">
              At Tulip Tots International, we believe the early years are a
              magical time of discovery, growth, and endless possibility. Our
              curriculum is thoughtfully designed to nurture the whole
              child—combining global best practices with the play-based,
              child-led approach at the heart of early learning.
            </p>
            <p className=" mt-4 font-semibold text-slate-800 text-lg">
              Our curriculum is closely aligned with the{" "}
              <strong>National Education Policy (NEP) 2020</strong>, with a
              strong focus on the <strong>Foundational Stage (ages 3–8)</strong>
              , and is guided by the{" "}
              <strong>Early Childhood Care and Education (ECCE)</strong>
              framework and{" "}
              <strong>
                the National Curriculum Framework for the Foundational Stage
                (NCF-FS)
              </strong>{" "}
              developed by the{" "}
              <strong>
                National Council of Educational Research and Training (NCERT)
              </strong>
              , which together outline the principles for high-quality,
              developmentally appropriate early education.
            </p>

            <p className=" mt-4 font-semibold text-slate-800 text-lg">
              These frameworks emphasize:
            </p>
            <div className=" mt-2 font-semibold text-slate-800 text-lg">
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

            <p className=" mt-4 font-semibold text-slate-800 text-lg">
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
          <p className=" mt-10 text-slate-800 font-semibold text-center text-lg ">
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
        currentSkill === skill ? "h-50" : "h-16"
      } transition-all duration-500 bg-white overflow-hidden cursor-pointer shadow-sm`}
    >
      <div className=" h-16 px-2 sm:px-4 flex items-center">
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
          className=" sm:text-lg ml-2 sm:ml-3 font-bold tracking-wide"
        >
          {skill}
        </p>
      </div>
      <div className="p-4 px-8 pt-2">
        <p className=" text-slate-700 font-semibold">{subSkills}</p>
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
