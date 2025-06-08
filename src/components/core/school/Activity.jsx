import React from "react";

const data = [
  {
    text: "Baking & Cooking Adventures",
    bgColor: "#B3E5FC",
  },
  {
    text: "STEAM Discovery & Design Thinking",
    bgColor: "#E6F7A9",
  },
  {
    text: "Building & Construction Play",
    bgColor: "#E6D6FF",
  },
  {
    text: "Board Games & Brain Builders",
    bgColor: "#FFDAB9",
  },
  {
    text: "Nature Exploration & Outdoor Play",
    bgColor: "#FFD1DC",
  },
  {
    text: "Creative Expression & Sensory Arts",
    bgColor: "#D5FAD6",
  },
  {
    text: "Storytelling, Public Speaking & Performance",
    bgColor: "#FFFACD",
  },
  {
    text: "Mindfulness & Emotional Well-being",
    bgColor: "#CDEBFF",
  },
  {
    text: "Book Club & Library Access",
    bgColor: "#FFECB3",
  },
  {
    text: "A Space Where All Children Belong",
    bgColor: "#EBD6F5",
  },
];

const Activity = () => {
  return (
    <div>
      <p className=" mt-16 text-3xl font-bold text-center">
        Tulip Trail Activity Centre
      </p>

      <p className=" text-center font-semibold text-gray-700 mt-2">
        ( Where every child finds their own way to grow )
      </p>

      <div className="bg-orange-200 mt-8 w-[90%] mx-auto p-10 text-black font-semibold text-lg rounded-[32px]">
        <p className=" text-slate-800">
          At Tulip Tots International, we believe children bloom best when
          they’re free to explore beyond curriculum, beyond comparison—and
          beyond the clock. That’s why we created Tulip Trail: a joyful,
          hands-on activity center for children up to 14 years, where every path
          leads to purpose, discovery, and delight.
        </p>
      </div>
      <p className=" text-center font-bold text-2xl mt-20">What Awaits Your Child</p>

      <div className=" w-[90%] grid grid-cols-3 mx-auto gap-8 my-10">
        {data.map((item, index) => (
          <Card key={index} bgColor={item.bgColor} text={item.text} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ bgColor, text }) => {
  return (
    <div className=" p-3 rounded-lg border border-gray-300" style={{ backgroundColor: bgColor }}>
      <p className=" text-black font-semibold text-center">{text}</p>
    </div>
  );
};

export default Activity;
