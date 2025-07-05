import React, { useState } from "react";
import heroImage from "../assets/about/aboutHero2.png";
import image1 from "../assets/about/whychooseus/1.png";
import image2 from "../assets/about/whychooseus/2.png";
import image3 from "../assets/about/whychooseus/3.png";
import image4 from "../assets/about/whychooseus/4.png";
import image5 from "../assets/about/whychooseus/5.png";
import image6 from "../assets/about/whychooseus/6.png";
import image7 from "../assets/about/whychooseus/7.png";
import image8 from "../assets/about/whychooseus/8.png";
import image9 from "../assets/about/whychooseus/9.png";
import image10 from "../assets/about/whychooseus/10.png";
import image11 from "../assets/about/whychooseus/11.png";
import image12 from "../assets/about/whychooseus/12.png";
import image13 from "../assets/about/whychooseus/13.png";
import image14 from "../assets/about/whychooseus/14.png";
import image15 from "../assets/about/whychooseus/15.png";
import image16 from "../assets/about/whychooseus/16.png";
import image17 from "../assets/about/whychooseus/17.png";
import image18 from "../assets/about/whychooseus/18.png";
import image19 from "../assets/about/whychooseus/19.png";
import image20 from "../assets/about/whychooseus/20.png";
import image21 from "../assets/about/whychooseus/21.png";
import image22 from "../assets/about/whychooseus/22.jpg";
import image23 from "../assets/about/whychooseus/23.jpg";
import image24 from "../assets/about/whychooseus/24.jpg";
import image25 from "../assets/about/whychooseus/25.jpg";

import phi1 from "../assets/about/phy/1.png";
import phi2 from "../assets/about/phy/2.png";
import phi3 from "../assets/about/phy/3.png";
import phi4 from "../assets/about/phy/4.jpeg";
import phi5 from "../assets/about/phy/5.png";
import phi6 from "../assets/about/phy/6.jpg";

import bgImage from "../assets/about/philosopherBack.jpg";
import Vision from "@/components/core/about/Vision";
import Mission from "@/components/core/about/Mission";
import Pedagogy from "@/components/core/about/Pedagogy";
import { Link } from "react-router";
import Assessment from "@/components/core/about/Assessment";

const SCREEN_WIDTH = window.innerWidth;

const data = [
  {
    name: "Maria Montessori ",
    country: "Italy",
    quote:
      "The greatest gifts we can give our children are the roots of responsibility and the wings of independence.",
    mainIdea:
      "Children learn best through hands-on experiences in a well-prepared environment.",
    howToApply: [
      "Practical life areas with pouring, scooping, and real tasks like baking.",
      "Child-led exploration in organized, inviting learning spaces.",
      "Mixed-age interactions to foster collaboration and leadership.",
    ],
    image: phi1,
    bgColor: "#FF5733",
  },
  {
    name: "Emmi Pikler",
    country: "Hungary",
    quote:
      "Let the child be the scriptwriter, the director, and the actor in his own play.”",
    mainIdea:
      "Respectful care and free movement build trust and physical confidence",
    howToApply: [
      "Gross motor zones with climbing structures and balance boards",
      "Calm, observant caregiving and unhurried transitions",
      "Trusting children’s pace and choices to guide their day.",
    ],
    image: phi2,
    bgColor: "#4CAF50 ",
  },
  {
    name: "Glenn Doman",
    country: "United States",
    quote: "The brain grows by use",
    mainIdea: "Early learning thrives on rich, joyful input.",
    howToApply: [
      "Daily dot cards, word flashcards, and early math play.",
      "Brief, exciting lessons based on interest—not pressure.",
      "A joyful environment that values knowledge and fun equally.",
    ],
    image: phi3,
    bgColor: "#E91E63 ",
  },
  {
    name: "Reggio Emilia",
    country: "Italy",
    quote: "The child has a hundred languages",
    mainIdea:
      "Children express themselves in countless ways—art, play, movement, words",
    howToApply: [
      "Art corners, loose parts play, and pretend zones for self-expression",
      "Curriculum that follows the child’s questions and interests",
      "Displays of children’s work and thoughts to honor their voices",
    ],
    image: phi4,
    bgColor: "#9C27B0 ",
  },
  {
    name: "Howard Gardner's",
    country: "United States",
    quote:
      "intelligence is not a single, unified ability, but rather a collection of distinct, independent intelligences",
    mainIdea:
      "We celebrate each child’s unique strengths and ways of learning.",
    howToApply: [
      "Word Smart: Language play, phonics, storytelling",
      "Logic Smart: Math games, puzzles, cause-effect play",
      "Body Smart: Movement zones, obstacle courses, dance",
      //   "Music Smart: Singing, rhythm games, instruments",
    ],
    image: phi5,
    bgColor: "#3F51B5 ",
  },
  {
    name: "Erin Kenny",
    country: "United Kingdom",
    quote: "Children cannot bounce off the walls if we take away the walls",
    mainIdea:
      "Nature is a teacher, a classroom, and a friend. Outdoor play fosters resilience, confidence, and a deep bond with the earth",
    howToApply: [
      "Mud kitchen, sandpit, and gardening time",
      "Nature-based crafts using leaves, seeds, and sticks",
      "Gentle risk-taking with climbing, balancing, and exploring",
      //   "Natural loose part play, weather journaling, and nature storytelling",
    ],
    image: phi6,
    bgColor: "#00BCD4 ",
  },
];

const data2 = [
  "Imaginative Free Play",
  "Multi-Sensory Exploration",
  "Hands-On Experiential Learning",
  "360° Holistic Learning",
  "Gardening & Nature Play",
  "Sandpit & Mud Kitchen",
  "Splash Play Pool",
  "Limitless Play Zones",
  "Adventure Climbing Frames",
  "Magnetic Building Station",
  "Practical Life Skills Learning",
  "Global Best Practices",
  "In-House Library",
  "Cozy calm corner",
  "Heartfelt Educators",
  "Innovative Play Structures",
  "Bright, Air-conditioned Classrooms",
  "Child-Centric Spaces",
  "Parent-School Partnership",
  "On-Call Paediatric Support",
  "Secure CCTV Monitoring",
  "Fire safety",
];

const data3 = [
  {
    text: "Hands-On Experiential Learning",
    image: image1,
  },
  {
    text: "360° Holistic Learning",
    image: image2,
  },
  {
    text: "Global best practices",
    image: image22,
  },
  {
    text: "Personalized growth tracking",
    image: image3,
  },
  {
    text: "Interactive walls zones",
    image: image9,
  },
  {
    text: "In-House Library",
    image: image7,
  },
  {
    text: "Imaginative Free Play",
    image: image11,
  },
  {
    text: "Endless possibilities play zone",
    image: image4,
  },
  {
    text: "Sandpit & Mud Kitchen",
    image: image10,
  },
  {
    text: "Life size building structure",
    image: image24,
  },
  {
    text: "Cozy calm corner",
    image: image5,
  },
  {
    text: "Practical Life Skills and Stem Explaination",
    image: image14,
  },
  {
    text: "Gardening & Nature Play",
    image: image15,
  },
  {
    text: "Growth not grades",
    image: image25,
  },
  {
    text: "Splash Play Pool",
    image: image6,
  },
  {
    text: "Obstacle courses",
    image: image13,
  },
  {
    text: "Adventure Climbing Frames",
    image: image12,
  },
  {
    text: "Child-Centric Spaces",
    image: image8,
  },
  {
    text: "Gentle Transition",
    image: image18,
  },
  {
    text: "Bright, Air-conditioned Classrooms",
    image: image19,
  },
  {
    text: "School Parent Partnership",
    image: image20,
  },
  {
    text: "Secure CCTV Monitoring",
    image: image16,
  },

  {
    text: "On-Call Paediatric Support",
    image: image17,
  },

  {
    text: "Fire Safety",
    image: image21,
  },
  //   {
  //     text: "Continuous assessment",
  //     image: image23,
  //   },
];

const About = () => {
  const [currentTapped, setCurrentTapped] = useState("");

  function getRandomHexColor() {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${hex.padStart(6, "0")}`;
  }

  return (
    <div className=" bg-[#FAFAFA] font-kgPrimaryPenmanship">
      {/* Hero section */}
      <div className="">
        <div className="px-4 pb-10  pt-32 lg:pt-44 relative ">
          <video
            className=" w-screen h-full absolute top-0 left-0 right-0 bottom-0 object-cover"
            // controls
            muted
            autoPlay
            loop
            controlsList="nodownload"
            disablePictureInPicture
          >
            <source
              src={
                "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/About/aboutHero.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQWJvdXQvYWJvdXRIZXJvLm1wNCIsImlhdCI6MTc1MTIwODM5MiwiZXhwIjoxNzgyNzQ0MzkyfQ.hOXX4e4CxZm_M4-1PpiirIxwzpa5HiOWK_CgHmN7sgs"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/70" />
          <div className=" relative ">
            <div>
              <p className=" lg:ml-10 text-4xl  md:text-5xl lg:text-6xl tracking-wider font-black text-white">
                About Us
              </p>
              <div className=" max-w-4xl  lg:p-10 mt-6 lg:mt-5 rounded-4xl flex flex-col justify-center items-center">
                <p className=" text-slate-100 tracking-wider text-2xl  lg:text-3xl font-medium">
                  Our tagline “Where Little Minds Bloom” beautifully reflects
                  our vision. We are dedicated to creating a free-flowing,
                  nurturing environment where young children are encouraged to
                  explore, imagine, and grow at their own natural pace.
                </p>

                <p className=" mt-8 text-slate-100 tracking-wider text-2xl  lg:text-3xl font-medium">
                  By tending to their curiosity and planting deep, strong roots
                  of confidence, creativity, and love for learning, we help them
                  blossom into lifelong learners
                </p>
                <Link
                  to={"/story"}
                  className=" self-start border-2 hover:scale-105 border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer px-5 py-2 rounded-md  mt-16"
                >
                  <p>Our Story</p>
                </Link>
              </div>
            </div>

            {/* <div className=" flex justify-center">
              <img className=" rounded-4xl w-[80%]" src={heroImage} />
            </div> */}
          </div>
        </div>

        {/* Vision and Mission */}
        <div className=" grid grid-cols-1 gap-10 mt-12 px-5 lg:px-12 ">
          <Vision />
          <Mission />
        </div>
      </div>
      <div className=" lg:px-12  mt-20">
        {/* Curriculum & Pedagogy */}
        <Pedagogy />

        {/* philosophies */}
        <div className=" max-w-6xl mx-auto px-4">
          <h1 className=" text-4xl font-semibold text-center mt-16">
            Our Core Philosophies
          </h1>
          <div
            className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20 mt-10
        "
          >
            {data.map((item, index) => (
              <Card
                key={index}
                setCurrentTapped={setCurrentTapped}
                currentTapped={currentTapped}
                name={item.name}
                country={item.country}
                quote={item.quote}
                howToApply={item.howToApply}
                mainIdea={item.mainIdea}
                image={item?.image}
                bgColor={item?.bgColor}
              />
            ))}
          </div>
        </div>

        {/* <Assessment /> */}

        {/* Why choose us */}
        <div className=" mt-12">
          <div className=" bg-gray-700 py-12">
            <h1 className=" text-3xl md:text-4xl tracking-wider font-semibold text-center text-white">
              Why choose Tulip tots international?
            </h1>

            <div className=" w-[90%] xl:w-[90%] mx-auto mt-12 grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {data3.map((item, index) => (
                <div key={index} className=" flex justify-center items-center">
                  <div
                    style={{ borderWidth: 4, borderColor: getRandomHexColor() }}
                    className=" w-32  md:w-36 md:h-36 xl:w-40  h-32 xl:h-40 cursor-none relative overflow-hidden hover:scale-110 transition-all duration-500 rounded-3xl flex justify-center items-center bg-white"
                  >
                    <div className=" absolute right-0 left-0 bottom-0 top-0 flex justify-center items-center">
                      <img src={item.image} />
                      <div className=" absolute right-0 left-0 bottom-0 top-0 bg-black/55 w-full h-full" />
                    </div>
                    <div className=" absolute right-0 left-0 bottom-0 top-0 flex p-1 justify-center items-center">
                      <p className=" text-center text-white  font-semibold text-xl tracking-wider">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

const Card = ({
  name,
  country,
  quote,
  mainIdea,
  howToApply,
  currentTapped,
  setCurrentTapped,
  image,
  bgColor,
}) => {
  return (
    <div>
      <p className=" text-2xl sm:text-3xl tracking-wide font-semibold text-black text-center">
        {name} <span className=" text-xl">({country})</span>
      </p>
      <div
        onClick={() => {
          if (currentTapped === name) {
            setCurrentTapped("");
            return;
          }
          setCurrentTapped(name);
        }}
        style={{ perspective: 1000 }}
        className="  w-full aspect-square bg-transparent cursor-pointer group rounded-3xl mt-3"
      >
        <div
          style={{ transformStyle: "preserve-3d" }}
          className={`${
            currentTapped === name && " rotate-y-180"
          } relative w-full h-full duration-700  group-hover:rotate-y-180 origin-center`}
        >
          <div
            className=" w-full h-full absolute rounded-3xl
         flex flex-col justify-between  items-center bg-white border-4 border-amber-200 overflow-hidden"
          >
            <img className=" absolute w-full h-full object-cover" src={image} />
            {/* front */}
            <div className=" w-full relative h-full flex flex-col justify-end">
              {/* <div className=" flex justify-end items-center w-full">
                <p className=" uppercase font-semibold text-sm">{country}</p>
              </div>
              <p className=" w-full font-semibold tracking-wide text-xl sm:text-2xl self-start mt-2 lg:mt-1">
                {name}
              </p> */}

              {quote && (
                <blockquote className=" italic text-center text-xl tracking-wide bg-[#f7ecdd] px-4 py-4 rounded-lg mt-7">
                  " {quote} "
                </blockquote>
              )}
            </div>

            {/* <p className=" text-slate-600 font-semibold">{mainIdea}</p> */}
          </div>
          <div
            style={{ backfaceVisibility: "hidden", backgroundColor: bgColor }}
            className=" absolute w-full h-full rotate-y-180 rounded-3xl overflow-hidden p-4 flex flex-col justify-center items-center text-neutral-300 space-y-5"
          >
            {/* back */}

            {/* <img
              src={bgImage}
              className=" absolute top-0 right-0 left-0 bottom-0 w-full h-full"
            /> */}
            <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-white/60" />
            <div className=" absolute top-0 right-0 left-0 bottom-0 flex flex-col justify-center items-center  p-5 ">
              <p className=" text-white text-xl tracking-wider font-semibold">
                How We Apply
              </p>
              <div className=" h-px bg-slate-400 w-full my-3" />
              {howToApply?.map((point, index) => (
                <li key={index} className=" text-white font-bold mt-2">
                  {point}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
