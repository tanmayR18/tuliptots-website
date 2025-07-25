import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AnimatePresence, motion, useInView } from "framer-motion";
import image from "../assets/school/library/libraryHero11.png";
import element1 from "../assets/school/library/element 1.png";
import element2 from "../assets/school/library/element2.png";
import element3 from "../assets/school/library/element6.png";
import star from "../assets/school/library/star.png";
import circle from "../assets/school/library/circle.png";

import flower from "../assets/elements/flower6.png";
import flower1 from "../assets/elements/flower4.png";


const Library = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="pt-32 pb-16 lg:pt-44 px-4 relative bg-[#fafafa] font-kgPrimaryPenmanship"
    >
      <img
        className=" absolute hidden lg:flex top-[150px] -left-[40px] w-[200px] "
        src={flower}
      />
      <div className=" mx-auto relative w-fit">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-black font-bold text-center text-3xl md:text-4xl lg:text-5xl tracking-wide"
        >
          Our In-House Library
        </motion.p>
        <img className=" absolute -left-[150px] -top-1/2" src={flower1} />
      </div>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-2 rounded-full"></div>

      <div className="flex flex-col lg:flex-row mx-auto lg:w-10/12 mt-12 lg:mt-0 items-center justify-between">
        <div className=" lg:w-1/2">
          <p className="text-[#333] text-center lg:text-start font-bold text-3xl md:text-4xl lg:text-5xl tracking-wide">
            Lifelong Readers Begin Here
          </p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=" mx-auto max-w-xl  text-xl lg:text-2xl text-slate-600 font-semibold text-center lg:text-start mt-4 lg:mt-9"
          >
            At Tulip Tots International, we nurture the love for reading from
            the very start. Our vibrant in-house library offers hundreds of
            carefully chosen books across themes like nature, science, art,
            emotions, cultures, and classic tales—ensuring there's something for
            every curious mind.
          </motion.p>
        </div>

        <div className=" lg:w-[40%] max-w-md lg:max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              src={image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className=""
            />
          </AnimatePresence>
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
        className="bg-[#afe9e4] relative mt-16 overflow-hidden z-20 lg:w-[90%] mx-auto p-5 lg:p-10 text-black font-semibold text-lg rounded-[32px]"
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
            className="text-3xl lg:text-4xl mt-8 font-bold tracking-wide text-slate-900 text-center"
          >
            Why It Matters ?
          </motion.p>

          <div className=" flex flex-col mt-8 text-[#1d1b1b] font-semibold tracking-wider justify-center items-center">
            <div className=" relative w-fit">
              <img className=" w-[250px]" src={element1} />
              <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3">
                <p className=" text-center text-xl lg:text-2xl">
                  Stronger vocabulary and comprehension
                </p>
              </div>
            </div>
            <div className=" flex flex-col mt-7 sm:flex-row sm:gap-10 lg:gap-48 lg:-mt-26">
              <div className=" relative w-fit">
                <img className=" w-[250px]" src={element2} />
                <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3">
                  <p className=" text-center text-xl lg:text-2xl">
                    Better focus and imagination
                  </p>
                </div>
              </div>
              <div className=" relative w-fit -mt-10 sm:mt-0">
                <img className=" w-[250px]" src={element3} />
                <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3">
                  <p className=" text-center text-xl lg:text-2xl">
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
            className="text-slate-800 text-center mt-6 text-xl tracking-wide lg:text-2xl md:mt-12"
          >
            No matter what future path a child takes—science, art, sports, or
            entrepreneurship—a reader today is a thinker tomorrow.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-slate-800 text-center  tracking-wide text-xl lg:text-2xl"
          >
            At Tulip Tots International, we don't just build readers—we build
            joyful explorers of stories, facts, and feelings.
          </motion.p>
        </div>

        <div className="  absolute -top-5 -left-5">
          <img
            className=" w-[28%] sm:w-[150px] md:w-[150px] lg:w-[200px]"
            src={circle}
          />
          <img
            className=" absolute bottom-0 -right-[10px] sm:-right-[40px] md:-right-[100px] lg:-right-[120px] w-[50px] lg:w-[100px]"
            src={star}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Library;
