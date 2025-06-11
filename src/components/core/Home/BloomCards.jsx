import React, { useState } from "react";

const SCREEN_WIDTH = window.innerWidth;
// import image2 from "../../../assets/home/homeHero2.png";
import image1 from "../../../assets/home/bloom/1.jpg";
import image2 from "../../../assets/home/bloom/2.jpg";
import image3 from "../../../assets/home/bloom/3.jpg";
import image4 from "../../../assets/home/bloom/4.jpg";
import image5 from "../../../assets/home/bloom/5.jpg";

const BloomCards = () => {
  const [currentTapped, setCurrentTapped] = useState("");
  return (
    <div className=" pt-16 pb-16 ">
      <p className=" text-2xl lg:text-3xl font-bold text-gray-700 text-center">
        The{" "}
        <span className=" text-pink-500 relative">
          BLOOM
          <svg
            className=" absolute w-32 border-0 -right-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1418 125"
          >
            <path
              d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"
              fill="#000"
            ></path>
          </svg>
        </span>{" "}
        Philosophy{" "}
      </p>
      <div className=" grid grid-cols-1 md:hidden lg:flex lg:grid-cols-5 mx-auto justify-between items-center mt-12 px-12 gap-x-5 gap-y-8">
        <Card
          setCurrentTapped={setCurrentTapped}
          bgColor={"#BAE6FD"}
          currentTapped={currentTapped}
          letter={"B"}
          title={"Balance of Body and Brain"}
          description={
            "From barefoot sensory paths and climbing structures to puzzles and early logic games"
          }
          image={image1}
        />
        <Card
          bgColor={"#D9F99D"}
          setCurrentTapped={setCurrentTapped}
          currentTapped={currentTapped}
          letter={"L"}
          title={"Learning through Living"}
          description={
            "Children learn best by doing. Our days are filled with real-life activities, Montessori materials, open-ended toys, and hands-on learning experiences"
          }
          image={image2}
        />
        <Card
          bgColor={"#E9D5FF"}
          setCurrentTapped={setCurrentTapped}
          currentTapped={currentTapped}
          letter={"O"}
          title={"Open-Ended Wonder"}
          description={
            "Vertical learning spaces and flexible play zones offer children endless possibilities to imagine, create, and explore without limits."
          }
          image={image3}
        />
        <Card
          bgColor={"#FED7AA"}
          setCurrentTapped={setCurrentTapped}
          currentTapped={currentTapped}
          letter={"O"}
          title={"Observing the Whole Child"}
          description={
            "We celebrate and support every child’s unique learning style and intelligence—from music and movement to numbers and nature"
          }
          image={image4}
        />
        <Card
          bgColor={"#FECDD3"}
          setCurrentTapped={setCurrentTapped}
          currentTapped={currentTapped}
          letter={"M"}
          title={"Meaningful connections"}
          description={
            "We foster strong bonds and emotional growth through daily interactions, nurturing empathy, belonging, and self-awareness."
          }
          image={image5}
        />
      </div>
      <div>
        <div className=" hidden md:flex lg:hidden px-12 flex-wrap justify-center items-center gap-8 mt-8 ">
          <Card
            setCurrentTapped={setCurrentTapped}
            bgColor={"#BAE6FD"}
            currentTapped={currentTapped}
            letter={"B"}
            title={"Balance of Body and Brain"}
            description={
              "From barefoot sensory paths and climbing structures to puzzles and early logic games"
            }
            className={"w-[30%]"}
            image={image1}
          />
          <Card
            bgColor={"#D9F99D"}
            setCurrentTapped={setCurrentTapped}
            currentTapped={currentTapped}
            letter={"L"}
            title={"Learning through Living"}
            description={
              "Children learn best by doing. Our days are filled with real-life activities, Montessori materials, open-ended toys, and hands-on learning experiences"
            }
            className={"w-[30%]"}
            image={image2}
          />
          <Card
            bgColor={"#E9D5FF"}
            setCurrentTapped={setCurrentTapped}
            currentTapped={currentTapped}
            letter={"O"}
            title={"Open-Ended Wonder"}
            description={
              "Vertical learning spaces and flexible play zones offer children endless possibilities to imagine, create, and explore without limits."
            }
            className={"w-[30%]"}
            image={image3}
          />
          <Card
            bgColor={"#FED7AA"}
            setCurrentTapped={setCurrentTapped}
            currentTapped={currentTapped}
            letter={"O"}
            title={"Observing the Whole Child"}
            description={
              "We celebrate and support every child’s unique learning style and intelligence—from music and movement to numbers and nature"
            }
            className={"w-[30%]"}
            image={image4}
          />
          <Card
            bgColor={"#FECDD3"}
            setCurrentTapped={setCurrentTapped}
            currentTapped={currentTapped}
            letter={"M"}
            title={"Meaningful connections"}
            description={
              "We foster strong bonds and emotional growth through daily interactions, nurturing empathy, belonging, and self-awareness."
            }
            className={"w-[30%]"}
            image={image5}
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({
  letter,
  title,
  description,
  image,
  bgColor,
  setCurrentTapped,
  currentTapped,
  className,
}) => {
  return (
    <div
      onClick={() => {
        if (currentTapped === title) {
          setCurrentTapped("");
          return;
        }

        setCurrentTapped(title);
      }}
      style={{ perspective: 1000 }}
      className={` aspect-square bg-transparent cursor-pointer group rounded-3xl ${
        className ? className : "w-full"
      }`}
    >
      <div
        style={{ transformStyle: "preserve-3d" }}
        className={`${
          currentTapped === title && SCREEN_WIDTH <= 1024 && " rotate-y-180"
        } relative w-full h-full duration-700  group-hover:rotate-y-180 origin-center`}
      >
        <div
          style={{ backgroundColor: bgColor }}
          className=" w-full h-full absolute rounded-3xl flex flex-col justify-center items-center overflow-hidden"
        >
          {/* <img
              className=" h-full w-full"
              src="https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            /> */}

          <div className=" -translate-y-8 relative w-full">
            <p className=" text-5xl text-black font-bold text-center">
              {letter}
            </p>
            <div className=" absolute flex justify-center items-center w-full px-2">
              <p className=" text-xl text-center mt-3 text-slate-900 font-semibold">
                {title}
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setCurrentTapped("")}
          style={{ backfaceVisibility: "hidden", backgroundColor: bgColor }}
          className=" absolute w-full h-full rotate-y-180 rounded-3xl overflow-hidden  flex justify-center items-center text-neutral-300 "
        >
          <img src={image} />
          <div className=" absolute top-0 right-0 left-0 bottom-0 bg-black/70" />
          <p className=" text-center text-white absolute font-semibold p-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BloomCards;
