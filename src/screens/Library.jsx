import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import image from "../assets/school/library/libraryHero.jpg";

const data = [
  {
    text: "Stronger vocabulary and comprehension",
    bgColor: "#E74C3C",
  },
  {
    text: "Better focus and imagination",
    bgColor: "#2ecc71",
  },
  {
    text: "Empathy, curiosity, and lifelong learning",
    bgColor: "#FF5722",
  },
];

const Card = ({ bgColor, text, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="p-2 md:p-3 gap-3 rounded-lg flex items-center"
      style={{ backgroundColor: bgColor }}
    >
      <FaCheckCircle size={20} color="#fff" />
      <p className="text-white text-base font-semibold text-center">{text}</p>
    </motion.div>
  );
};

const Library = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="pt-32 lg:pt-44 px-4 bg-[#f7eee9]">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-black font-bold text-center text-xl md:text-2xl lg:text-3xl tracking-wide"
      >
        Our In-House Library - Where Lifelong Readers Begin
      </motion.p>

      <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        src={image}
        className="mx-auto mt-12 scale-110"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="lg:w-10/12 mx-auto mt-5 lg:mt-8 text-base lg:text-lg text-slate-700 font-semibold text-center"
      >
        At Tulip Tots International, we nurture the love for reading from the
        very start. Our vibrant in-house library offers hundreds of carefully
        chosen books across themes like nature, science, art, emotions,
        cultures, and classic tales—ensuring there's something for every curious
        mind.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-blue-200 my-16 lg:w-[90%] mx-auto p-5 lg:p-10 text-black font-semibold text-lg rounded-[32px]"
      >
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="text-xl md:text-2xl font-bold tracking-wide text-slate-900 text-center"
        >
          Why It Matters ?
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-auto">
          {data.map((item, index) => (
            <Card key={index} text={item.text} bgColor={item.bgColor} index={index} isInView={isInView} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-slate-800 text-center mt-6 text-base md:text-lg md:mt-12"
        >
          No matter what future path a child takes—science, art, sports, or
          entrepreneurship—a reader today is a thinker tomorrow.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-slate-800 text-center text-base md:text-lg"
        >
          At Tulip Tots, we don't just build readers—we build joyful explorers
          of stories, facts, and feelings.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Library;
