import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import image from "../assets/school/library/libraryHero.png";
import image1 from "../assets/school/library/libraryHero2.png";
import element1 from "../assets/school/library/element 1.png";
import element2 from "../assets/school/library/element2.png";
import element3 from "../assets/school/library/element6.png";
import star from "../assets/school/library/star.png";
import circle from "../assets/school/library/circle.png";

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
      initial={{ opacity: 0, translateX: -200 }}
      whileInView={{
        opacity: 1,
        translateX: 0,
        transition: { duration: 2 - index * 0.6 },
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
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

  const [isFirst, setIsFirst] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirst((prev) => !prev);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div ref={ref} className="pt-32 pb-16 lg:pt-44 px-4 bg-[#f7eee9]">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-black font-bold text-center text-xl md:text-2xl lg:text-3xl tracking-wide"
      >
        Our In-House Library
      </motion.p>

      <div className="flex flex-row mx-auto w-10/12 mt-5 lg:mt-8 items-center justify-between gap-10">
        <div className=" w-[50%] ">
          <p className="text-black font-bold text-xl md:text-2xl lg:text-2xl tracking-wide">
            Lifelong Readers Begin Here
          </p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=" mx-auto  text-base lg:text-2xl text-slate-600 font-semibold mt-9"
          >
            At Tulip Tots International, we nurture the love for reading from
            the very start. Our vibrant in-house library offers hundreds of
            carefully chosen books across themes like nature, science, art,
            emotions, cultures, and classic tales—ensuring there's something for
            every curious mind.
          </motion.p>
        </div>

        <div>
          {isFirst ? (
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              src={image}
              className="mx-auto mt-12 scale-100"
            />
          ) : (
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              src={image1}
              className="mx-auto mt-12 scale-100"
            />
          )}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, translateY: 20, scale: 1.05 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          translateY: 0,
          transition: { duration: 0.8 },
        }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        className="bg-blue-200 relative mt-16 overflow-hidden z-20 lg:w-[90%] mx-auto p-5 lg:p-10 text-black font-semibold text-lg rounded-[32px]"
      >
        <div className="relative z-20">
          <motion.p
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            className="text-xl md:text-2xl font-bold tracking-wide text-slate-900 text-center"
          >
            Why It Matters ?
          </motion.p>

          <div className=" flex flex-col justify-center items-center">
            <div className=" relative w-fit">
              <img className=" w-[250px]" src={element1} />
              <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3">
                <p className=" text-center">
                  Stronger vocabulary and comprehension
                </p>
              </div>
            </div>
            <div className=" flex gap-48 -mt-26">
              <div className=" relative w-fit">
                <img className=" w-[250px]" src={element2} />
                <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3">
                  <p className=" text-center">Better focus and imagination</p>
                </div>
              </div>
              <div className=" relative w-fit">
                <img className=" w-[250px]" src={element3} />
                <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3">
                  <p className=" text-center">
                    Empathy, curiosity, and lifelong learning
                  </p>
                </div>
              </div>
            </div>
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
        </div>

        <div className="  absolute -top-5 -left-5">
            <img className=" w-[200px]" src={circle} />
            <img className=" absolute bottom-0 -right-[120px] w-[100px]" src={star} />
        </div>
      </motion.div>
    </div>
  );
};

export default Library;
