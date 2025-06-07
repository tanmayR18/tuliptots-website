import Footer from "@/components/common/Footer";
import React, { useState } from "react";
import heroImage from "../assets/about/aboutUsHero.jpg";
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
import image19 from "../assets/about/whychooseus/19.png";

import bgImage from "../assets/about/philosopherBack.jpg";

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
  },
  {
    name: "Howard Gardner's Multiple Intelligences",
    country: "United States",
    quote:
      "intelligence is not a single, unified ability, but rather a collection of distinct, independent intelligences",
    mainIdea:
      "We celebrate each child’s unique strengths and ways of learning.",
    howToApply: [
      "Word Smart: Language play, phonics, storytelling",
      "Logic Smart: Math games, puzzles, cause-effect play",
      "Body Smart: Movement zones, obstacle courses, dance",
      "Music Smart: Singing, rhythm games, instruments",
    ],
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
      "Natural loose part play, weather journaling, and nature storytelling",
    ],
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
    text: "Personalized growth tracking",
    image: image3,
  },
  {
    text: "Endless possibilities play zone",
    image: image4,
  },
  {
    text: "Cozy calm corner",
    image: image5,
  },
  {
    text: "Splash Play Pool",
    image: image6,
  },
  {
    text: "In-House Library",
    image: image7,
  },
  {
    text: "Child-Centric Spaces",
    image: image8,
  },
  {
    text: "12+ interactive walls",
    image: image9,
  },
  {
    text: "Sandpit & Mud Kitchen",
    image: image10,
  },
  {
    text: "Imaginative Free Play",
    image: image11,
  },
  {
    text: "Adventure Climbing Frames",
    image: image12,
  },
  {
    text: "Obstacle courses",
    image: image13,
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
    text: "Secure CCTV Monitoring",
    image: image16,
  },
  {
    text: "On-Call Paediatric Support",
    image: image17,
  },
  {
    text: "Bright, Air-conditioned Classrooms",
    image: image19,
  },
];

const About = () => {
  const [currentTapped, setCurrentTapped] = useState("");

  function getRandomHexColor() {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${hex.padStart(6, "0")}`;
  }

  return (
    <div className=" bg-[#f7eee9]">
      {/* Hero section */}
      <div className=" px-12  ">
        <div className=" grid grid-cols-2 gap-10  pt-44 min-h-screen">
          <div>
            <p className=" ml-10 text-5xl tracking-wider font-black text-black">
              About Us
            </p>
            <div className="  p-10 rounded-4xl flex flex-col justify-center items-center">
              <p className=" text-slate-800 font-semibold">
                Our tagline “Where Little Minds Bloom” beautifully reflects our
                vision. We are dedicated to creating a free-flowing, nurturing
                environment where young children are encouraged to explore,
                imagine, and grow at their own natural pace.
              </p>

              <p className=" mt-8 text-slate-700 font-semibold">
                By tending to their curiosity and planting deep, strong roots of
                confidence, creativity, and love for learning, we help them
                blossom into lifelong learners
              </p>
            </div>
          </div>

          <div>
            <img className=" rounded-4xl w-full aspect-video" src={heroImage} />
          </div>
        </div>

        {/* Vision and Mission */}
        <div className=" grid grid-cols-2 gap-10 mt-12">
          <div className=" bg-amber-200 p-12 flex flex-col  items-center gap-8 rounded-4xl">
            <p className=" text-2xl font-bold text-black uppercase">
              Our Vision
            </p>
            <p className=" text-center text-lg font-semibold">
              At Tulip Tots International, we envision a world where every child
              blossoms with curiosity, confidence, and creativity. Inspired by
              the symbolism of the tulip, we aim to cultivate growth, beauty,
              and resilience in every child. Through a play-based, international
              approach, we prepare children to become global citizens who are
              grounded in strong values and bloom with innovative ideas that
              impact the world.
            </p>
          </div>
          <div className=" bg-slate-200 p-12 flex flex-col  items-center gap-8 rounded-4xl">
            <p className=" text-2xl font-bold text-black">MISSION</p>
            <p className=" text-center text-lg font-semibold">
              Our mission is to create a nurturing environment where every child
              feels safe, cherished, and inspired to explore. At Tulip Tots
              International, we foster a joyful learning atmosphere, where
              children are encouraged to follow their natural curiosity and grow
              at their own pace. We focus on meaningful play and strong
              relationships, ensuring that each child blossoms with confidence,
              creativity, and joy, embracing the endless possibilities of their
              early years
            </p>
          </div>
        </div>
      </div>
      {/* Curriculum & Pedagogy */}
      <div className="px-12 mt-26">
        <div className=" w-[70%] mx-auto">
          <div>
            <p className="text-2xl text-center font-bold text-black">
              How We Nurture young Minds
            </p>
            <p className=" mt-12 font-semibold text-slate-800 text-lg">
              Our curriculum is thoughtfully designed, combining global best
              practices with the nurturing spirit of play-based learning. We
              draw inspiration from renowned educational philosophies and align
              closely with the{" "}
              <strong>National Education Policy (NEP) 2020</strong>, which
              emphasizes the importance of the{" "}
              <strong>Foundational Stage (ages 3–8)</strong>—a period that lays
              the cornerstone for lifelong learning.
            </p>

            <p>
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

            <div className=" mt-8">
              <p className=" text-xl font-bold text-black">
                5×4 Skill-Based Framework
              </p>
              <p className=" mt-1 font-semibold text-slate-800 text-lg">
                The curriculum is built around a 5×4 skill matrix, focusing on
                five core developmental domains, each encompassing four
                sub-skills:
              </p>
              <div className=" ml-4 font-semibold text-slate-800 text-lg">
                <p>1. Language and Communication Skills</p>
                <p>2. Cognitive Skills</p>
                <p>3. Social and Emotional Skills</p>
                <p>4. Environmental Awareness</p>
                <p>5. Physical skills (Gross motor and fine motor skills)</p>
              </div>
              <p className="font-semibold text-slate-800 text-lg">
                This comprehensive approach ensures that children develop a
                balanced set of abilities, preparing them for lifelong learning
                and success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* philosophies */}
      <div className=" max-w-6xl mx-auto">
        <h1 className=" text-3xl font-bold text-center mt-16">
          Our Core Philosophies
        </h1>
        <div
          className=" grid grid-cols-3 gap-8 mt-10
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
            />
          ))}
        </div>
      </div>

      {/* Why choose us */}
      <div className=" mt-12">
        <div className=" bg-gray-700 py-12">
          <h1 className=" text-3xl font-semibold text-center text-white">
            Why choose Tulip tots international?
          </h1>

          <div className=" w-[80%] mx-auto mt-12 grid gap-10 grid-cols-6">
            {data3.map((item, index) => (
              <div
                style={{ borderWidth: 4, borderColor: getRandomHexColor() }}
                className=" w-40 h-40 relative overflow-hidden hover:scale-110 transition-all duration-500 rounded-full flex justify-center items-center bg-white"
                key={index}
              >
                <div className=" absolute right-0 left-0 bottom-0 top-0">
                  <img src={item.image} />
                  <div className=" absolute right-0 left-0 bottom-0 top-0 bg-black/50 w-full h-full" />
                </div>
                <div className=" absolute right-0 left-0 bottom-0 top-0 flex p-1 justify-center items-center">
                  <p className=" text-center text-white  font-semibold text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
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
}) => {
  return (
    <div
      onClick={() => setCurrentTapped(name)}
      style={{ perspective: 1000 }}
      className="  w-full aspect-square bg-transparent cursor-pointer group rounded-3xl"
    >
      <div
        style={{ transformStyle: "preserve-3d" }}
        className={`${
          currentTapped === name && SCREEN_WIDTH <= 1024 && " rotate-y-180"
        } relative w-full h-full duration-700  group-hover:rotate-y-180 origin-center`}
      >
        <div
          className=" w-full h-full absolute rounded-3xl
         flex flex-col justify-between items-center p-7 bg-white border-3 border-amber-200 overflow-hidden"
        >
          {/* front */}
          <div className=" w-full">
            <div className=" flex justify-end items-center w-full">
              <p className=" uppercase font-semibold text-sm">{country}</p>
            </div>
            <p className=" w-full font-semibold tracking-wide text-2xl self-start mt-1">
              {name}
            </p>

            {quote && (
              <blockquote className=" italic text-center bg-[#f7ecdd] px-4 py-4 rounded-lg mt-7">
                " {quote} "
              </blockquote>
            )}
          </div>

          <p className=" text-slate-600 font-semibold">{mainIdea}</p>
        </div>
        <div
          style={{ backfaceVisibility: "hidden" }}
          className=" absolute w-full h-full  bg-[#fff] rotate-y-180 rounded-3xl overflow-hidden p-4 flex flex-col justify-center items-center text-neutral-300 space-y-5"
        >
          {/* back */}

          <img
            src={bgImage}
            className=" absolute top-0 right-0 left-0 bottom-0 w-full h-full"
          />
          <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-white/60" />
          <div className=" absolute top-0 right-0 left-0 bottom-0 flex flex-col justify-center items-center  p-5 ">
            <p className=" text-black text-xl tracking-wider font-semibold mb-5">How To Apply</p>
            {howToApply?.map((point, index) => (
              <li key={index} className=" text-slate-900">
                {point}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
