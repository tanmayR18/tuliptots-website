import React from "react";
import { Link } from "react-router";
import { motion, useInView } from "framer-motion";
import classroom from "../assets/school/classroom.jpg";
import daycare from "../assets/school/daycare.jpg";
import gardening from "../assets/school/gardening.jpg";
import health from "../assets/school/health.jpg";
import library from "../assets/school/library.jpg";
import Activity from "@/components/core/school/Activity";

const ProgramCard = ({
  programName,
  programIdea,
  programPetName,
  content,
  bgColor,
  borderColor,
  eligibily,
  index,
  isInView,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white flex flex-col rounded-2xl overflow-hidden"
    >
      <div className="p-2" style={{ backgroundColor: bgColor }}>
        <p className="text-white text-lg font-bold text-center tracking-wider">
          {programName}
        </p>
      </div>
      <div className="grow p-4 flex flex-col justify-between">
        <div>
          <p className="text-center text-base text-slate-800 font-semibold">
            {programIdea}
          </p>

          <div className="h-px w-full bg-slate-600 my-3" />
          <p className="text-center text-gray-600 font-semibold">{content}</p>
        </div>

        <div>
          <div className="w-full border-t border-dashed border-black my-2" />

          <p className="text-center text-black font-semibold">
            Eligibility - {eligibily}
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: bgColor }}>
        <p className="text-white font-bold text-center tracking-wider p-2">
          {programPetName}
        </p>
      </div>
    </motion.div>
  );
};

const SubSectionCard = ({
  facilityName,
  navigate,
  bgColor,
  borderColor,
  image,
  index,
  isInView,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        transition: { duration: 0.8, delay: index * 0.1 },
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
    >
      <Link
        to={navigate}
        className="flex justify-center border-4 relative overflow-hidden items-center w-[160px] sm:w-[200px] aspect-square rounded-full"
        style={{ backgroundColor: bgColor, borderColor: borderColor }}
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          src={image}
        />
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/50" />
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/50 flex justify-center items-center">
          <p className="text-white text-center text-lg p-3 font-semibold tracking-wide">
            {facilityName}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

const Academics = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pt-44 bg-[#f7eee9]" ref={ref}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center tracking-wide"
      >
        Our Preschool Programs
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 max-w-[85rem] mt-8 lg:mt-20 mx-auto gap-8">
        <ProgramCard
          programName={"PlayGROUP"}
          programIdea={"Nurturing Early Explorers"}
          programPetName={"Sprouts"}
          content={
            "This is the beginning—where tiny steps lead to big discoveries. Just like a sprout breaking through the soil, our youngest learners explore the world with wide-eyed curiosity, building trust, comfort, and early independence through sensory play, music, and nurturing interactions."
          }
          bgColor={"#9B59B6"}
          borderColor={"#000"}
          eligibily={"2 to 3 years"}
          index={0}
          isInView={isInView}
        />
        <ProgramCard
          programName={"Nursery"}
          programIdea={"Building a Strong Foundation"}
          programPetName={"Buds"}
          content={
            "At this stage, children begin to form a solid sense of self—like buds gaining strength before they open. Through hands-on exploration, early language development, and meaningful social interactions, they grow confident, communicative, and deeply curious about the world around them."
          }
          bgColor={"#FF5722"}
          borderColor={"#000"}
          eligibily={"3 to 4 years"}
          index={1}
          isInView={isInView}
        />
        <ProgramCard
          programName={"LKG"}
          programIdea={"Inspiring Young Learners"}
          programPetName={"Blossoms"}
          content={
            "In this vibrant stage, children blossom with curiosity and creativity. They thrive on playful problem-solving, asking questions, and connecting deeply with peers. Through joyful, interest-led exploration, they build early literacy, numeracy, and a sense of independence"
          }
          bgColor={"#1ABC9C"}
          borderColor={"#000"}
          eligibily={"4 to 5 years"}
          index={2}
          isInView={isInView}
        />
        <ProgramCard
          programName={"UKG"}
          programIdea={"Preparing for Primary School"}
          programPetName={"Blooms"}
          content={
            "Fully bloomed and ready to face the world—our Bloomers demonstrate leadership, empathy, and advanced skills across literacy, numeracy, and life learning. This stage focuses on preparing them for the next leap, helping them carry the confidence and joy of learning into primary school and beyond"
          }
          bgColor={"#e91e63"}
          borderColor={"#000"}
          eligibily={"5 to 6 years"}
          index={3}
          isInView={isInView}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{
          opacity: 1,
          translateY: 0,
          transition: { duration: 0.8 },
        }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        className="mt-12 lg:mt-44 text-3xl font-bold text-center tracking-wide"
      >
        A Peek Into Our World
      </motion.p>

      <div className="hidden md:flex flex-col">
        <div className="flex justify-center mx-auto gap-8 mt-10">
          <SubSectionCard
            facilityName={"A Living, Breathing Classroom"}
            bgColor={"#ccc"}
            borderColor={"#007BFF"}
            navigate={"/classroom"}
            image={classroom}
            index={0}
            isInView={isInView}
          />
          <SubSectionCard
            facilityName={"In-House Library"}
            bgColor={"#ccc"}
            borderColor={"#FFFF00"}
            navigate={"/library"}
            image={library}
            index={1}
            isInView={isInView}
          />
          <SubSectionCard
            facilityName={"Our Gardeners of Growth"}
            bgColor={"#ccc"}
            borderColor={"#00BCD4"}
            navigate={"/growth"}
            image={gardening}
            index={2}
            isInView={isInView}
          />
        </div>
        <div className="flex justify-center mx-auto gap-8 mt-8">
          <SubSectionCard
            facilityName={"Health, hygiene & Safety"}
            bgColor={"#ccc"}
            borderColor={"#2ecc71"}
            navigate={"/health"}
            image={health}
            index={3}
            isInView={isInView}
          />
          <SubSectionCard
            facilityName={"Daycare"}
            bgColor={"#ccc"}
            borderColor={"#FF6F61"}
            navigate={"/daycare"}
            image={daycare}
            index={4}
            isInView={isInView}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 place-items-center gap-5 mt-6 md:hidden">
        <SubSectionCard
          facilityName={"A Living, Breathing Classroom"}
          bgColor={"#ccc"}
          borderColor={"#007BFF"}
          navigate={"/classroom"}
          image={classroom}
          index={0}
          isInView={isInView}
        />
        <SubSectionCard
          facilityName={"In-House Library"}
          bgColor={"#ccc"}
          borderColor={"#FFFF00"}
          navigate={"/library"}
          image={library}
          index={1}
          isInView={isInView}
        />
        <SubSectionCard
          facilityName={"Our Gardeners of Growth"}
          bgColor={"#ccc"}
          borderColor={"#00BCD4"}
          navigate={"/growth"}
          image={gardening}
          index={2}
          isInView={isInView}
        />
        <SubSectionCard
          facilityName={"Health, hygiene & Safety"}
          bgColor={"#ccc"}
          borderColor={"#2ecc71"}
          navigate={"/health"}
          image={health}
          index={3}
          isInView={isInView}
        />
        <SubSectionCard
          facilityName={"Daycare"}
          bgColor={"#ccc"}
          borderColor={"#FF6F61"}
          navigate={"/daycare"}
          image={daycare}
          index={4}
          isInView={isInView}
        />
      </div>

      <Activity />
    </div>
  );
};

export default Academics;
