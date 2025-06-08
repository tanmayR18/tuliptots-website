import React from "react";
import { Link } from "react-router";
import classroom from "../assets/school/classroom.jpg";
import daycare from "../assets/school/daycare.jpg";
import gardening from "../assets/school/gardening.jpg";
import health from "../assets/school/health.jpg";
import library from "../assets/school/library.jpg";
import Footer from "@/components/common/Footer";
import Activity from "@/components/core/school/Activity";

const ProgramCard = ({
  programName,
  programIdea,
  programPetName,
  content,
  bgColor,
  borderColor,
  eligibily,
}) => {
  return (
    <div className="  bg-white flex flex-col rounded-2xl overflow-hidden">
      <div className=" p-2" style={{ backgroundColor: bgColor }}>
        <p className=" text-white  text-lg font-bold text-center tracking-wider">
          {programName}
        </p>
      </div>
      <div className=" grow p-4 flex flex-col justify-between">
        <div>
          <p className=" text-center text-base text-slate-800 font-semibold">
            {programIdea}
          </p>

          <div className=" h-px w-full bg-slate-600 my-3 " />
          <p className=" text-center text-gray-600 font-semibold">{content}</p>
        </div>

        <div>
          <div className=" w-full border-t border-dashed border-black my-2" />

          <p className=" text-center text-black font-semibold">
            Eligibily - {eligibily}
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: bgColor }}>
        <p className=" text-white  font-bold text-center tracking-wider p-2">
          {programPetName}
        </p>
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
}) => {
  return (
    <Link
      to={navigate}
      className=" flex justify-center border-4 relative overflow-hidden items-center w-[200px]  aspect-square rounded-full"
      style={{ backgroundColor: bgColor, borderColor: borderColor }}
    >
      <img src={image} />
      <div className=" absolute top-0 right-0 left-0 bottom-0 bg-black/50" />
      <div className=" absolute top-0 right-0 left-0 bottom-0 bg-black/50 flex justify-center items-center">
        <p className=" text-white text-center text-lg p-3 font-semibold tracking-wide">
          {facilityName}
        </p>
      </div>
    </Link>
  );
};

const Academics = () => {
  return (
    <div className=" pt-44 bg-[#f7eee9]">
      <p className=" text-3xl font-bold text-center tracking-wide">
        Tulip's Programs
      </p>

      <div className=" grid grid-cols-4 px-5 max-w-[85rem] mt-8 mx-auto gap-8">
        <ProgramCard
          programName={"Playground"}
          programIdea={"Nurturing Early Explorers"}
          programPetName={"Sprouts"}
          content={
            "This is the beginning—where tiny steps lead to big discoveries. Just like a sprout breaking through the soil, our youngest learners explore the world with wide-eyed curiosity, building trust, comfort, and early independence through sensory play, music, and nurturing interactions."
          }
          bgColor={"#9B59B6"}
          borderColor={"#000"}
          eligibily={"2 to 3 years"}
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
        />
        <ProgramCard
          programName={"UKG"}
          programIdea={"Preparing for Primary School"}
          programPetName={"Bloomers"}
          content={
            "Fully bloomed and ready to face the world—our Bloomers demonstrate leadership, empathy, and advanced skills across literacy, numeracy, and life learning. This stage focuses on preparing them for the next leap, helping them carry the confidence and joy of learning into primary school and beyond"
          }
          bgColor={"#e91e63"}
          borderColor={"#000"}
          eligibily={"5 to 6 years"}
        />
      </div>

      <p className=" mt-12 text-3xl font-bold text-center tracking-wide">
        A Peek Into Our World
      </p>

      <div className="flex justify-center mx-auto gap-8 mt-10">
        <SubSectionCard
          facilityName={"A Living, Breathing Classroom"}
          bgColor={"#ccc"}
          borderColor={"#007BFF"}
          navigate={"/classroom"}
          image={classroom}
        />
        <SubSectionCard
          facilityName={"In-House Library"}
          bgColor={"#ccc"}
          borderColor={"#FFFF00"}
          navigate={"/library"}
          image={library}
        />
        <SubSectionCard
          facilityName={"Our Gardeners of Growth"}
          bgColor={"#ccc"}
          borderColor={"#00BCD4"}
          navigate={"/growth"}
          image={gardening}
        />
      </div>
      <div className=" flex justify-center mx-auto gap-8 mt-8">
        <SubSectionCard
          facilityName={"Health, hygiene & Safety"}
          bgColor={"#ccc"}
          borderColor={"#2ecc71"}
          navigate={"/health"}
          image={health}
        />
        <SubSectionCard
          facilityName={"Daycare"}
          bgColor={"#ccc"}
          borderColor={"#FF6F61"}
          navigate={"/daycare"}
          image={daycare}
        />
      </div>

      <Activity />

      <Footer />
    </div>
  );
};

export default Academics;
