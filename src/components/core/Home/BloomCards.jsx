import React, { useState } from "react";

const SCREEN_WIDTH = window.innerWidth;
import image2 from "../../../assets/home/homeHero2.png";

const BloomCards = () => {
  const [currentTapped, setCurrentTapped] = useState("");
  return (
    <div className=" pt-16 pb-16 ">
      <p className=" text-lg lg:text-3xl font-bold text-gray-700 text-center">
        The BLOOM Philosophy{" "}
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-12 px-12 gap-y-8">
        <Card
          setCurrentTapped={setCurrentTapped}
          bgColor={"#BAE6FD"}
          currentTapped={currentTapped}
          letter={"B"}
          title={"Balance of Body and Brain"}
          description={
            "From barefoot sensory paths and climbing structures to puzzles and early logic games"
          }
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
        />
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
}) => {
  return (
    <div
      onClick={() => setCurrentTapped(title)}
      style={{ perspective: 1000 }}
      className=" lg:w-[18%] w-full aspect-square bg-transparent cursor-pointer group rounded-3xl"
    >
      <div
        style={{ transformStyle: "preserve-3d" }}
        className={`${
          currentTapped === title && SCREEN_WIDTH <= 1024 && " rotate-y-180"
        } relative w-full h-full duration-700  group-hover:rotate-y-180 origin-center`}
      >
        <div style={{backgroundColor: bgColor}} className=" w-full h-full absolute rounded-3xl flex flex-col justify-center items-center overflow-hidden">
          {/* <img
              className=" h-full w-full"
              src="https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            /> */}

          <p className=" text-5xl text-black font-bold">{letter}</p>
          <p className=" text-xl text-center mt-3">{title}</p>
        </div>
        <div
          style={{ backfaceVisibility: "hidden" }}
          className=" absolute w-full h-full rotate-y-180 rounded-3xl overflow-hidden p-4 flex justify-center items-center text-neutral-300 space-y-5"
        >
          <img src={image2}/>
          <div className=" absolute top-0 right-0 left-0 bottom-0 bg-black/60" />
          <p className=" text-center absolute font-semibold ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BloomCards;
