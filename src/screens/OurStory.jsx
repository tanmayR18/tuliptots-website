import React from "react";
import { motion } from "framer-motion";
import motherChild1 from "../assets/story/motherChild1.jpg";
import motherChild2 from "../assets/story/image2.png";
import nurtureStory from "../assets/story/nurtureStory.jpeg";
import story from "../assets/story/story.jpg";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-kgPrimaryPenmanship py-20 pt-44 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <p className="text-2xl mt-8 leading-8 text-center max-w-lg mx-auto text-gray-800 font-medium">
          Tulip Tots International was born from the most personal of
          journeys—my daughter.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-12"
        >
          <div className="grid grid-cols-1 w-1/2 mx-auto gap-8 items-center mb-16 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={motherChild1}
                alt="Mother and child"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={motherChild2}
                alt="Mother and child"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div> */}
          </div>

          {/* Second Card - The Journey */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-br from-blue-100 via-teal-50 to-white rounded-2xl p-8 shadow-lg overflow-hidden"
          >
            <div className="relative z-10">
              <p className="text-2xl  leading-7 tracking-wide text-gray-700">
                When I first discovered I was expecting her, I felt both joy and
                uncertainty. Like many new parents, I had questions about how
                best to raise her. I turned to books, research, and global
                philosophies on parenting and education. What I found was an
                entirely new world—one that emphasized the right environment for
                children: care, play, trust, curiosity, and freedom over rigid
                compliance.
              </p>

              <p className="text-2xl z-10 mt-6 leading-7 tracking-wide  text-gray-700">
                As I practiced these approaches with my daughter, I watched her
                bloom. Soon, I began sharing what I had learned with other
                parents, and their children too began to thrive—growing more
                confident, curious, and creative. That was when I realized how
                deeply parents longed for this kind of environment, yet how hard
                it was to create amidst the challenges of daily life and work.
              </p>

              <p className="text-2xl z-10 mt-6 leading-7 tracking-wide  text-gray-700">
                My personal journey connected with another lifelong
                calling—education. Inspired by my mother, a teacher, I pursued
                academics wholeheartedly, ranking first in both B.Sc. and M.Sc.
                Microbiology at Mumbai University. I later became an Assistant
                Professor, teaching undergraduate students from 2017 onwards.
                While teaching was rewarding, I noticed something striking: many
                learning gaps appeared because children hadn’t been given a
                strong foundation in their early years.
              </p>

              <p className="text-2xl z-10 mt-6 leading-7 tracking-wide  text-gray-700">
                That realization led me to take a new path—pursuing a Post
                Graduate Diploma in Nursery Teacher Training, along with several
                other certifications in early childhood education. Each step was
                guided by one mission: to give my daughter the best start, and
                then extend that opportunity to many more children.
              </p>

              <p className="text-2xl z-10 mt-6 leading-7 tracking-wide  text-gray-700">
                This mission grew into Tulip Tots International. The name
                reflects our belief: just as tulips bloom when given the right
                soil, light, and care, children too flourish when nurtured with
                the right environment—where care is constant, play is
                encouraged, trust is mutual, and freedom allows curiosity to
                grow.
              </p>

              <div className="relative z-10 mt-20 flex flex-col items-center md:flex-row-reverse gap-8">
                <div className="md:w-1/3 flex items-center justify-center">
                  <img className=" rounded-3xl" src={nurtureStory} />
                </div>
                <div className="md:w-2/3">
                  <p className="text-2xl  leading-7 tracking-wide font-semibold text-pink-700">
                    Tulip Tots International is more than a preschool, daycare,
                    or children’s library. It is a heartfelt extension of my
                    journey as a mother, an educator, and a lifelong learner.
                    Here, curiosity is celebrated, individuality is respected,
                    and every child is empowered to blossom into their best self

                    <br/>
                    We invite you to join our Tulip Tots family—where learning
                    feels like play, and every child is nurtured to bloom
                    beautifully.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Fifth Card - The Impact */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-br from-violet-100 via-indigo-50 to-white rounded-2xl p-4 md:p-8 shadow-lg overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <img className=" md:w-1/2 rounded-3xl" src={story} />
              </div>
              <p className="text-2xl  leading-7 tracking-wide text-gray-800 font-medium text-center">
                We didn't just open a school—we opened our hearts and
                experiences to support a generation of lifelong learners and
                compassionate global citizens.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;
