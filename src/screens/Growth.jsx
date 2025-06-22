import React from "react";
import { motion, useInView } from "framer-motion";
import image1 from "../assets/school/ourTeam/ourTeam.png";
import image2 from "../assets/school/ourTeam/ourTeam2.png";

const Growth = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="pt-32 pb-12 lg:pt-44 px-4 bg-[#f7eee9]">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-black font-bold md:text-center text-xl md:text-2xl lg:text-3xl tracking-wide"
      >
        Our Gardeners of Growth – The Tulip Tots Team
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:w-10/12 mx-auto mt-5 lg:mt-8 text-base lg:text-lg text-slate-700 font-semibold md:text-center"
      >
        At Tulip Tots International, we believe that early childhood educators
        are more than teachers—they are gentle guides, nurturers of wonder, and
        co-travelers in a child's magical journey. What truly sets our team
        apart are the values they embody: patience, empathy, joy, and a deep
        respect for the individuality of every child
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="md:w-10/12 mx-auto flex flex-col-reverse md:flex-row gap-4 md:gap-10 justify-center items-center mt-8"
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
            className="text-xl md:text-2xl font-bold"
          >
            A Values-First Approach
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-slate-800 font-semibold tracking-wide mt-4 md:mt-8 text-base md:text-lg"
          >
            We carefully select team members who radiate kindness, compassion,
            and curiosity—those who see teaching not as a job, but as a calling.
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
          className="rounded-2xl md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
          src={image1}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="md:w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-4 md:gap-10 items-center mt-16"
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
          className="rounded-2xl md:w-[400px] md:h-[500px] w-[400px] h-[500px]"
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
            className="text-xl md:text-2xl font-bold"
          >
            Mindful Recruitment Process
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-slate-800 font-semibold tracking-wide mt-4 md:mt-8 text-base md:text-lg"
          >
            <p>
              Every educator undergoes a thoughtful selection process including:
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
        className="p-6 bg-[#FECDD3] rounded-[32px] md:w-10/12 mx-auto mt-12"
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
          className="text-xl md:text-2xl font-bold tracking-wide text-center"
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
          className="text-slate-800 text-center text-base md:text-lg font-semibold mt-5"
        >
          Our educators are encouraged to continuously reflect, grow, and
          collaborate—just like the children they teach. Regular workshops,
          reflective circles, and co-learning sessions are part of our culture.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Growth;
