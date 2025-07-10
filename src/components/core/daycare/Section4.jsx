import { motion, useInView } from "framer-motion";
import React from "react";

import classroom from "../../../assets/school/classroom.jpg";
import gardening from "../../../assets/school/gardening.jpg";
import health from "../../../assets/school/health.jpg";
import library from "../../../assets/school/library.png";
import { Link } from "react-router";

const Section4 = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div className=" py-20 bg-[#fafafa] font-kgPrimaryPenmanship">
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
        className=" text-3xl lg:text-4xl font-bold text-center tracking-wide -translate-y-6"
      >
        A Peek Into Our World
      </motion.p>

      <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-5 mt-12 w-10/12 mx-auto ">
        <SubSectionCard
          facilityName={"A Living, Breathing Space"}
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
      </div>
    </div>
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
        className="flex justify-center border-4 relative overflow-hidden items-center w-[150px] sm:w-[200px] aspect-square rounded-full"
        style={{ backgroundColor: bgColor, borderColor: borderColor }}
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          src={image}
        />
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/20" />
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/50 flex justify-center items-center">
          <p className="text-white text-center text-xl p-3 font-semibold tracking-widest">
            {facilityName}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Section4;
