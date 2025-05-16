import React from "react";

const BloomCards = () => {
  return (
    <div className=" mt-16">
      <p className=" text-lg lg:text-3xl font-semibold text-gray-700 text-center">
        The BLOOM Philosophy{" "}
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-12 px-12 space-y-8">
        <Card
          letter={"B"}
          title={"Balance of Body and Brain"}
          description={
            "From barefoot sensory paths and climbing structures to puzzles and early logic games"
          }
        />
        <Card
          letter={"L"}
          title={"Learning through Living"}
          description={
            "Children learn best by doing. Our days are filled with real-life activities, Montessori materials, open-ended toys, and hands-on learning experiences"
          }
        />
        <Card
          letter={"O"}
          title={"Open-Ended Wonder"}
          description={
            "Vertical learning spaces and flexible play zones offer children endless possibilities to imagine, create, and explore without limits."
          }
        />
        <Card
          letter={"O"}
          title={"Observing the Whole Child"}
          description={
            "We celebrate and support every child’s unique learning style and intelligence—from music and movement to numbers and nature"
          }
        />
        <Card
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

const Card = ({ letter, title, description, image, bgColor }) => {
  return (
    <div
      style={{ perspective: 1000 }}
      className=" lg:w-[18%] w-full aspect-square bg-transparent cursor-pointer group rounded-3xl"
    >
      <div
        style={{ transformStyle: "preserve-3d" }}
        className=" relative w-full h-full duration-500  group-hover:rotate-y-180 origin-center"
      >
        <div className=" w-full h-full absolute rounded-3xl flex flex-col justify-center items-center bg-green-500 overflow-hidden">
          {/* <img
              className=" h-full w-full"
              src="https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            /> */}

          <p>{letter}</p>
          <p>{title}</p>
        </div>
        <div
          style={{ backfaceVisibility: "hidden" }}
          className=" absolute w-full h-full bg-[#0F1823] rotate-y-180 rounded-3xl overflow-hidden p-4 flex justify-center items-center text-neutral-300 space-y-5"
        >
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BloomCards;
