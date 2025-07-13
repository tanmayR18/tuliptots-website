import React from "react";
import { Link } from "react-router";
import { motion, useInView } from "framer-motion";
import classroom from "../assets/school/classroom.jpg";
import daycare from "../assets/school/daycare.jpg";
import gardening from "../assets/school/gardening.jpg";
import health from "../assets/school/health.jpg";
import library from "../assets/school/library.png";
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
      className="bg-white flex flex-col rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-2 py-3" style={{ backgroundColor: bgColor }}>
        <p className="text-white text-2xl font-bold text-center tracking-wider">
          {programName}
        </p>
      </div>
      <div className="grow p-4 flex  flex-col justify-between">
        <div>
          <p className="text-center text-xl tracking-wide text-slate-800 font-semibold">
            {programIdea}
          </p>

          <div className="h-px w-full bg-slate-600 my-3" />
          <p className="text-center text-gray-600 tracking-wider text-xl leading-6">
            {content}
          </p>
        </div>

        <div>
          <div className="w-full border-t border-dashed border-black my-2" />

          <p className="text-center text-black text-xl font-medium tracking-wide">
            Eligibility - {eligibily}
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: bgColor }}>
        <p className="text-white font-semibold text-xl text-center tracking-wider p-2">
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

const Academics = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pt-44 bg-[#fafafa] font-kgPrimaryPenmanship" ref={ref}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className=" text-4xl lg:text-5xl font-bold text-center tracking-wide"
      >
        Our Programs
      </motion.p>

      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-2"></div>

      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 max-w-[80rem] mt-8 lg:mt-20 mx-auto gap-8 pb-24 lg:pb-8">
        <ProgramCard
          programName={"🎠 Playgroup"}
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
          programName={"🧩 Nursery"}
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
          programName={"🧸 LKG"}
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
          programName={"🎓 UKG"}
          programIdea={"Preparing for Primary School"}
          programPetName={"Blooms"}
          content={
            "Fully bloomed and ready to face the world—our Bloomers demonstrate leadership, empathy, and advanced skills across literacy, numeracy, and life learning. This stage focuses on preparing them for the next leap, helping them carry the confidence and joy of learning into primary school and beyond"
          }
          bgColor={"#E91E63"}
          borderColor={"#000"}
          eligibily={"5 to 6 years"}
          index={3}
          isInView={isInView}
        />
        <ProgramCard
          programName={"🌱 Parent-Toddler Program"}
          programIdea={"Nurturing Beginnings"}
          programPetName={"Seedlings"}
          content={
            "This is where the journey begins—side by side with a loving parent or caregiver. Designed to build early bonds and trust, this program focuses on sensory play, music, movement, and joyful routines. It gently introduces toddlers to a social setting and builds emotional security, communication, and curiosity—laying the roots for future independence."
          }
          bgColor={"#FFD54F"}
          borderColor={"#000"}
          eligibily={"6 months to 2 years"}
          index={0}
          isInView={isInView}
        />

        <ProgramCard
          programName={"🔢 Toddler Math Program"}
          programIdea={"Early Math Explorers"}
          programPetName={"Number Buds"}
          content={
            "Rooted in the Glenn Doman and playful learning approach, this program introduces early mathematical thinking through engaging visual aids, quantity cards, rhythm patterns, sorting, and playful problem-solving. It supports children in developing logical reasoning, number sense, and early focus—all in a joyful, pressure-free environment."
          }
          bgColor={"#BA68C8"}
          borderColor={"#000"}
          eligibily={"6 months to 3 years"}
          index={1}
          isInView={isInView}
        />

        <ProgramCard
          programName={"🎨 Tulip Trail Activity Centre"}
          programIdea={"Discover. Create. Thrive."}
          programPetName={"Bloom & Play"}
          content={
            "Our Activity Centre is a vibrant space where children unleash creativity and curiosity beyond the classroom. With thoughtfully designed sessions in art, music, sensory play, baking, pretend play, and hands-on science, children explore their interests while building confidence and fine motor skills. This is where imaginations soar and little hands learn big things."
          }
          bgColor={"#42A5F5"}
          borderColor={"#000"}
          eligibily={"2 to 14 years"}
          index={2}
          isInView={isInView}
        />

        <ProgramCard
          programName={"🌼 Tulip Nest Day Care"}
          programIdea={"More than Care—A Place to Grow"}
          programPetName={"Nestlings"}
          content={
            "Tulip Nest Day Care blends warmth and wonder, offering a safe, nurturing space where each child feels at home. Our day is thoughtfully structured with active play, creative zones, restful routines, and responsive caregiving. More than just supervision, we support every child’s social, emotional, and developmental milestones—helping them grow in confidence, empathy, and joy."
          }
          bgColor={"#4CAF50"}
          borderColor={"#000"}
          eligibily={"9 months to 12 years"}
          index={3}
          isInView={isInView}
        />

        <ProgramCard
          programName={"📖 Storytelling Sessions"}
          programIdea={"Where Words Weave Wonder"}
          programPetName={"Story Sprouts"}
          content={
            "Step into a world where imagination soars and language comes alive. Our storytelling sessions are more than just tales—they’re immersive experiences that spark creativity, build vocabulary, and strengthen listening and comprehension. Through puppetry, picture books, rhythm and rhyme, and dramatic expression, children develop a lifelong love for stories and the confidence to tell their own."
          }
          bgColor={"#FF8A65"}
          borderColor={"#000"}
          eligibily={"all ages"}
          index={3}
          isInView={isInView}
        />

        <ProgramCard
          programName={"📚 The  Tulip Tots Children’s Library"}
          programIdea={"Beyond Stories. Into a World of Wonder."}
          programPetName={"Story Sprouts"}
          content={
            "Our library is more than shelves and stories — it’s a vibrant, multi-sensory space designed to spark a love for reading in every child. With a thoughtfully curated collection of books on values, general knowledge, emotions, nature, science, and more, children are invited to explore big ideas in ways that feel joyful and personal."
          }
          bgColor={"#F06292"}
          borderColor={"#000"}
          eligibily={"0 months to 14 years"}
          index={3}
          isInView={isInView}
        />

        <ProgramCard
          programName={"⚽ Tulip Tots Play Zone"}
          programIdea={"Where Play is the Plan"}
          programPetName={"Play Patch"}
          content={
            "Our Play Zone is a joyful, open-ended space created for children to move freely, explore deeply, and play wholeheartedly. Designed with developmentally rich equipment and sensory elements, it offers opportunities for climbing, balancing, building, and pretending—fueling both body and imagination."
          }
          bgColor={"#faa443"}
          borderColor={"#000"}
          eligibily={"1 year & above"}
          index={3}
          isInView={isInView}
        />
      </div>

 

      {/* <div className="hidden md:flex flex-col">
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
      </div> */}

      <div className=" py-20 bg-[#CDE8EA]">
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
        </div>
      </div>

      <Activity />
    </div>
  );
};

export default Academics;
