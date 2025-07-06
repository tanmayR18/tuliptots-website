import React from "react";
import { motion, useInView } from "framer-motion";
import image1 from "../assets/school/ourTeam/ourTeam.png";
import image2 from "../assets/school/ourTeam/ourTeam2.png";

import girl from "../assets/school/ourTeam/girl.png";
import circle1 from "../assets/school/ourTeam/circle1.png";
import circle2 from "../assets/school/ourTeam/circle2.png";
import circle3 from "../assets/school/ourTeam/circle3.png";
import ninja from "../assets/school/ourTeam/ninja.png";

const Growth = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="pt-32 font-kgPrimaryPenmanship lg:px-0 lg:pt-44  bg-[#fafafa]"
    >
      <div className=" px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-black font-bold text-center text-3xl md:text-4xl lg:text-5xl tracking-wide"
        >
          Our Gardeners of Growth – The Tulip Tots Team
        </motion.p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-2"></div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-10/12 mx-auto mt-5 lg:mt-8 text-xl lg:text-2xl text-slate-700 font-semibold hidden md:flex text-center"
        >
          At Tulip Tots International, we believe that early childhood educators
          are more than teachers—they are gentle guides, nurturers of wonder,
          and co-travelers in a child's magical journey. What truly sets our
          team apart are the values they embody: patience, empathy, joy, and a
          deep respect for the individuality of every child
        </motion.p>

        <div className=" p-9 px-0  md:p-8 rounded-[64px] flex flex-col-reverse md:flex-row relative md:mt-10 justify-between items-center lg:w-10/12 mx-auto">
          <img
            className=" hidden lg:flex absolute top-0 right-56"
            src={ninja}
          />
          <div className=" mt-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-10/12 mx-auto mt-5 lg:mt-8 text-xl lg:text-2xl text-slate-700 font-semibold text-center md:hidden"
            >
              At Tulip Tots International, we believe that early childhood
              educators are more than teachers—they are gentle guides, nurturers
              of wonder, and co-travelers in a child's magical journey. What
              truly sets our team apart are the values they embody: patience,
              empathy, joy, and a deep respect for the individuality of every
              child
            </motion.p>
            <div className="  flex flex-col justify-center items-center  mt-5 md:mt-0">
              <div className=" relative w-fit">
                <img className=" w-[300px]" src={circle1} />
                <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3">
                  <p className=" text-center font-bold text-2xl xl:text-3xl">
                    Unique
                  </p>
                </div>
              </div>
              <div className=" flex md:gap-6 ">
                <div className=" relative w-fit">
                  <img className="  w-[300px]" src={circle2} />
                  <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3">
                    <p className=" text-center font-bold text-2xl lg:text-3xl xl:text-4xl">
                      Ready to <br /> Blossom
                    </p>
                  </div>
                </div>
                <div className=" relative w-fit flex justify-center items-center">
                  <img className=" w-[300px]" src={circle3} />
                  <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3">
                    <p className=" text-center font-bold text-2xl lg:text-3xl xl:text-4xl">
                      Full of Potential
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className=" z-20 sm:h-[400px]" src={girl} />
        </div>
      </div>

      <div className="pb-12 pt-6 px-4 bg-[#CDE8EA]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:w-10/12 mx-auto flex flex-col-reverse md:flex-row gap-4 md:gap-10 justify-center items-center mt-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="md:w-1/2"
          >
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.4, delay: 0.8 }}
              className="text-2xl md:text-3xl text-center md:text-left font-bold"
            >
              A Values-First Approach
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-slate-800 font-semibold text-center md:text-left tracking-wide mt-4 md:mt-8 text-xl md:text-2xl"
            >
              We carefully select team members who radiate kindness, compassion,
              and curiosity—those who see teaching not as a job, but as a
              calling.
            </motion.p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, x: 0 }
                : { opacity: 0, scale: 0.95, x: 100 }
            }
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
            src={image1}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="lg:w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-4 md:gap-10 items-center mt-16"
        >
          <motion.img
            initial={{ opacity: 0, x: -70, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            className="rounded-2xl w-[250px] h-[320px] md:w-[400px] md:h-[500px] lg:w-[400px] lg:h-[500px]"
            src={image2}
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            className="md:w-1/2"
          >
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.4, delay: 1.4 }}
              className="text-2xl md:text-3xl text-center md:text-left font-bold"
            >
              Mindful Recruitment Process
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-slate-800 font-semibold tracking-wide mt-4 md:mt-8 text-xl md:text-2xl"
            >
              <p className=" text-center md:text-start">
                Every educator undergoes a thoughtful selection process
                including:
              </p>
              <motion.li
                initial={{ opacity: 0, x: -10, y: 15 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                  transition: { duration: 0.8 },
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                className=" mt-5"
              >
                A values-aligned face-to-face conversation
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10, y: 15 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.2 },
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
              >
                A creative written reflection
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10, y: 15 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.4 },
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
              >
                A psychometric evaluation
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10, y: 15 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.6 },
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
              >
                A thorough background check
              </motion.li>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.8 },
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className=" p-4 lg:p-6 bg-[#FECDD3] rounded-[32px] lg:w-10/12 mx-auto mt-12"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            className="text-3xl  lg:text-4xl font-bold tracking-wide text-center"
          >
            Lifelong Learners at Heart
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            className="text-slate-800 text-center text-xl md:text-2xl font-semibold mt-5"
          >
            Our educators are encouraged to continuously reflect, grow, and
            collaborate—just like the children they teach. Regular workshops,
            reflective circles, and co-learning sessions are part of our
            culture.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Growth;
