import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

import image1 from "../../../assets/home/homeHero1.png";
import image2 from "../../../assets/home/homeHero2.png";

const Hero = () => {
  return (
    <div className=" pb-12 min-h-screen w-full relative bg-[#F7EEE9] overflow-x-hidden pt-32 lg:pt-44">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 hidden lg:flex -left-8"
      >
        <img className=" w-full h-full " src={image1} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 -right-8 h-[400px] hidden lg:flex"
      >
        <img className=" w-full h-full" src={image2} />
      </motion.div>
      <div className=" text-white flex flex-col h-full justify-center items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-bold text-2xl lg:text-5xl text-pink-700"
        >
          Tulip Tots Preschool{" "}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-bold text-xl lg:text-4xl mt-1 text-green-700"
        >
          where little minds bloom
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="lg:w-1/2 mt-12 z-40 font-semibold text-lg px-4 md:px-6 lg:text-xl lg:leading-8 text-center text-slate-900 opacity-60"
        >
          Rooted in love and led by research, Tulip Tots International is a
          thoughtfully designed early learning space where every child’s wonder
          is honored, voices are heard, and play leads the way—gently shaping
          confident global citizens for the 21st century.
        </motion.p>
        <Link className=" hidden md:flex" to={"/story"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-2 hover:scale-105 border-purple-600 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-all  duration-300 cursor-pointer px-5 py-2 rounded-md mt-28 lg:mt-16"
          >
            <p>Our Story</p>
          </motion.div>
        </Link>

        {/* For mobile view */}
        <div className=" relative flex justify-center items-center w-full  mt-28 lg:mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute h-[200px] sm:h-[300px] -bottom-16 flex lg:hidden -left-8"
          >
            <img className=" w-full h-full " src={image1} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute -bottom-16 -right-8 h-[180px] sm:h-[300px] flex lg:hidden"
          >
            <img className=" w-full h-full" src={image2} />
          </motion.div>
          <Link className=" flex md:hidden" to={"/story"}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="border-2 hover:scale-105 border-purple-600 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-all  duration-300 cursor-pointer px-5 py-2 rounded-md"
            >
              <p>Our Story</p>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
