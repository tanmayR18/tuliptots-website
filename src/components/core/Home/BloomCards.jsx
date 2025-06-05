import React, { useState } from "react";

const SCREEN_WIDTH = window.innerWidth;
// import image2 from "../../../assets/home/homeHero2.png";
import image1 from "../../../assets/home/bloom/1.jpg"
import image2 from "../../../assets/home/bloom/2.jpg"
import image3 from "../../../assets/home/bloom/3.jpg"
import image4 from "../../../assets/home/bloom/4.jpg"
import image5 from "../../../assets/home/bloom/5.jpg"

const BloomCards = () => {
  const [currentTapped, setCurrentTapped] = useState("");
  return (
    <div className=" pt-16 pb-16 ">
      <p className=" text-2xl lg:text-3xl font-bold text-gray-700 text-center">
        The BLOOM Philosophy{" "}
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
            className={'w-[30%]'}
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
            className={'w-[30%]'}
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
            className={'w-[30%]'}
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
            className={'w-[30%]'}
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
            className={'w-[30%]'}
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
      onClick={() => setCurrentTapped(title)}
      style={{ perspective: 1000 }}
      className={` aspect-square bg-transparent cursor-pointer group rounded-3xl ${className ? className : 'w-full'}`}
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
