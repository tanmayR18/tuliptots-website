import React from "react";
import { motion, useInView } from "framer-motion";

import image1 from "../../../assets/school/await/1.jpg";
import image2 from "../../../assets/school/await/2.png";
import image3 from "../../../assets/school/await/3.jpg";
import image4 from "../../../assets/school/await/4.jpg";
import image5 from "../../../assets/school/await/5.png";
import image6 from "../../../assets/school/await/6.jpg";
import image7 from "../../../assets/school/await/7.jpg";
import image8 from "../../../assets/school/await/8.jpg";
import image9 from "../../../assets/school/await/9.jpg";
import image10 from "../../../assets/school/await/10.jpg";

const data = [
  {
    text1: `Baking & Cooking`,
    text2: `Adventures`,
    bgColor: "#B3E5FC",
    image: image1,
  },
  {
    text1: "STEAM Discovery &",
    text2: "Design Thinking",
    bgColor: "#E6F7A9",
    image: image2,
  },
  {
    text1: "Building & ",
    text2: "Construction Play",
    bgColor: "#E6D6FF",
    image: image3,
  },
  {
    text1: "Board Games &",
    text2: "Brain Builders",
    bgColor: "#FFDAB9",
    image: image4,
  },
  {
    text1: "Nature Exploration",
    text2: "& Outdoor Play",
    bgColor: "#FFD1DC",
    image: image5,
  },
  {
    text1: "Creative Expression",
    text2: " & Sensory Arts",
    bgColor: "#D5FAD6",
    image: image6,
  },
  {
    text1: "Storytelling, Public ",
    text2: "Speaking & Performance",
    bgColor: "#FFFACD",
    image: image7,
  },
  {
    text1: "Mindfulness & Emotional",
    text2: "Well-being",
    bgColor: "#CDEBFF",
    image: image8,
  },
  {
    text1: "Book Club &",
    text2: "Library Access",
    bgColor: "#FFECB3",
    image: image9,
  },
  {
    text1: "A Space Where All",
    text2: "Children Belong",
    bgColor: "#EBD6F5",
    image: image10,
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
        className="text-3xl px-4 md:px-0 md:text-4xl font-bold tracking-wider text-center"
      >
        Tulip Trail Activity Centre
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-2xl px-4 md:px-0 md:text-3xl font-semibold text-gray-600 mt-2"
      >
        (Where every child finds their own way to grow)
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-orange-200 mt-8 w-[90%] mx-auto p-10 text-black font-semibold text-xl md:text-2xl tracking-wide rounded-[32px]"
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
        className="text-center font-bold text-3xl px-4 md:px-0 md:text-4xl tracking-wider mt-20 "
      >
        What Awaits Your Child
      </motion.p>

      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8 mt-10 pb-16">
        {data.map((item, index) => (
          <Card
            key={index}
            bgColor={item.bgColor}
            text1={item.text1}
            text2={item.text2}
            index={index}
            isInView={isInView}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ bgColor, text1, text2, index, isInView, image }) => {
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
      className="p-5 rounded-3xl border border-gray-300"
      style={{ backgroundColor: bgColor }}
    >
      <div>
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
          className="text-black font-semibold text-xl xl:text-2xl tracking-wider text-center"
        >
          {text1}
        </motion.p>
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
          className="text-black font-semibold text-xl xl:text-2xl tracking-wider text-center"
        >
          {text2}
        </motion.p>
      </div>

      <div className=" mt-4 lg:mt-7 aspect-square rounded-2xl  overflow-hidden">
        <img className=" w-full h-full object-cover" src={image} />
      </div>
    </motion.div>
  );
};

export default Activity;
