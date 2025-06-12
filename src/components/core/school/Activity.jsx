import React from "react";
import { motion, useInView } from "framer-motion";

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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-3xl font-bold text-center"
      >
        Tulip Trail Activity Centre
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center font-semibold text-gray-700 mt-2"
      >
        ( Where every child finds their own way to grow )
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-orange-200 mt-8 w-[90%] mx-auto p-10 text-black font-semibold text-lg rounded-[32px]"
      >
        <p className="text-slate-800">
          At Tulip Tots International, we believe children bloom best when
          they're free to explore beyond curriculum, beyond comparison—and
          beyond the clock. That's why we created Tulip Trail: a joyful,
          hands-on activity center for children up to 14 years, where every path
          leads to purpose, discovery, and delight.
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{
          opacity: 1,
          translateY: 0,
          transition: { duration: 0.8 },
        }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        className="text-center font-bold text-2xl mt-20"
      >
        What Awaits Your Child
      </motion.p>

      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8 my-10">
        {data.map((item, index) => (
          <Card
            key={index}
            bgColor={item.bgColor}
            text={item.text}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ bgColor, text, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 0, scale: 1.1 }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        scale: 1,
        transition: { duration: 0.8, delay: index * 0.1 },
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      className="p-3 rounded-lg border border-gray-300"
      style={{ backgroundColor: bgColor }}
    >
      <motion.p
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{
          opacity: 1,
          translateY: 0,
          transition: { duration: 0.8 },
        }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        className="text-black font-semibold text-center"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default Activity;
