import React from "react";
import { motion } from "framer-motion";
import motherChild1 from "../assets/story/motherChild1.jpg";
import nurtureStory from "../assets/story/nurtureStory.jpeg";
import logo from "../assets/bgremoved.png";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-[#f7eee9] py-20 pt-44 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-12"
        >
          {/* First Card - The Beginning */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-br from-pink-200 via-purple-50 to-white rounded-2xl p-8 shadow-lg overflow-hidden"
          >
            <div className="relative z-10 flex flex-col items-center md:flex-row gap-8">
              <div className="md:w-1/3 flex items-center justify-center">
                <img className=" w-32 h-32" src={logo} />
              </div>
              <div className="md:w-2/3">
                <p className="text-xl leading-relaxed text-gray-800 font-medium">
                  Tulip Tots International was born from the passion and
                  persistence of two mothers—deeply committed to giving their
                  children the best start in life.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={motherChild1}
                alt="Mother and child"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </div>

          {/* Second Card - The Journey */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-br from-blue-100 via-teal-50 to-white rounded-2xl p-8 shadow-lg overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-blue-400"></div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-200 to-teal-300 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-300 to-teal-400"></div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-blue-400"></div>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                As we navigated the early years of parenting, we embarked on a
                relentless journey—researching, building, and curating
                meaningful learning experiences at home. From hands-on sensory
                play and logical thinking tools to global teaching philosophies
                and nature-inspired activities, we poured our hearts into
                creating a rich, holistic environment that nurtured curiosity,
                confidence, and creativity.
              </p>
              <div className="relative z-10 mt-12">
                <div className="grid grid-cols-2 gap-4 mb-12">
                  <div className="h-24  flex justify-center items-center font-semibold text-xl bg-amber-100 rounded-lg">
                    <p>Purpose-Driven Learning</p>
                  </div>
                  <div className="h-24 flex justify-center items-center font-semibold text-xl bg-orange-100 rounded-lg">
                    <p>Support for Families</p>
                  </div>
                  <div className="h-24 flex justify-center items-center font-semibold text-xl bg-orange-100 rounded-lg">
                    <p>Clarity in Early Education</p>
                  </div>
                  <div className="h-24 flex justify-center items-center font-semibold text-xl bg-amber-100 rounded-lg">
                    <p>Sharing What Works</p>
                  </div>
                </div>
                <p className="text-lg text-center  leading-relaxed font-semibold text-gray-700">
                  Homeschooling became more than just a choice—it was a mission.
                  But it also revealed how challenging it can be for most
                  families to find the time, resources, and clarity to provide
                  this level of depth in early learning. We knew we had
                  something special—and we couldn't keep it to ourselves.
                </p>
              </div>
              <div className="relative z-10 mt-20 flex flex-col items-center md:flex-row-reverse gap-8">
                <div className="md:w-1/3 flex items-center justify-center">
                  <img className=" rounded-3xl" src={nurtureStory} />
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg  leading-relaxed font-semibold text-pink-700">
                    That's when the vision for Tulip Tots was born: a warm,
                    thoughtfully designed preschool where every child gets the
                    benefit of the same love, intention, and excellence we
                    wanted for our own.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Third Card - The Challenge */}
          {/* <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-white rounded-2xl p-8 shadow-lg overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1/2 "></div>
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="h-24  flex justify-center items-center font-semibold text-xl bg-amber-100 rounded-lg">
                  <p>Purpose-Driven Learning</p>
                </div>
                <div className="h-24 flex justify-center items-center font-semibold text-xl bg-orange-100 rounded-lg">
                  <p>Support for Families</p>
                </div>
                <div className="h-24 flex justify-center items-center font-semibold text-xl bg-orange-100 rounded-lg">
                  <p>Clarity in Early Education</p>
                </div>
                <div className="h-24 flex justify-center items-center font-semibold text-xl bg-amber-100 rounded-lg">
                  <p>Sharing What Works</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed font-semibold text-gray-700">
                Homeschooling became more than just a choice—it was a mission.
                But it also revealed how challenging it can be for most families
                to find the time, resources, and clarity to provide this level
                of depth in early learning. We knew we had something special—and
                we couldn't keep it to ourselves.
              </p>
            </div>
          </motion.div> */}

          {/* Fourth Card - The Vision */}
          {/* <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-br from-green-100 via-emerald-50 to-white rounded-2xl p-8 shadow-lg overflow-hidden"
          >
            <div className="relative z-10 flex flex-col items-center md:flex-row-reverse gap-8">
              <div className="md:w-1/3 flex items-center justify-center">
                <img className=" rounded-3xl" src={nurtureStory} />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg leading-relaxed font-semibold text-pink-700">
                  That's when the vision for Tulip Tots was born: a warm,
                  thoughtfully designed preschool where every child gets the
                  benefit of the same love, intention, and excellence we wanted
                  for our own.
                </p>
              </div>
            </div>
          </motion.div> */}

          {/* Fifth Card - The Impact */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-br from-violet-100 via-indigo-50 to-white rounded-2xl p-8 shadow-lg overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <img
                  className=" w-1/2 rounded-3xl"
                  src="https://thumbs.dreamstime.com/b/happy-children-making-high-five-robotics-school-education-technology-science-people-concept-group-kids-building-robots-93175013.jpg"
                />
              </div>
              <p className="text-xl leading-relaxed text-gray-800 font-medium text-center">
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
