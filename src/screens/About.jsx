import Footer from "@/components/common/Footer";
import React from "react";

const About = () => {
  return (
    <div className=" pt-44 bg-purple-200">
      {/* Hero section */}
      <div className=" px-12">
        <div className=" grid grid-cols-2 gap-10 mt-8 ">
          <div>
            <p className=" ml-10 text-5xl tracking-wider font-black text-black">
              About Us
            </p>
            <div className="  p-10 rounded-4xl flex flex-col justify-center items-center">
              <p className=" text-slate-800 font-semibold">
                Our tagline “Where Little Minds Bloom” beautifully reflects our
                vision. We are dedicated to creating a free-flowing, nurturing
                environment where young children are encouraged to explore,
                imagine, and grow at their own natural pace.
              </p>

              <p className=" mt-8 text-slate-700 font-semibold">
                By tending to their curiosity and planting deep, strong roots of
                confidence, creativity, and love for learning, we help them
                blossom into lifelong learners
              </p>
            </div>
          </div>

          <div>
            <img
              className=" rounded-4xl w-full h-full"
              src="https://www.eurokidsindia.com/blog/wp-content/uploads/2024/03/observe-children-at-play.jpg"
            />
          </div>
        </div>

        {/* Vision and Mission */}
        <div className=" grid grid-cols-2 gap-10 mt-12">
          <div className=" bg-amber-200 p-12 flex flex-col justify-center items-center gap-8 rounded-4xl">
            <p className=" text-2xl font-bold text-black">Our Vision</p>
            <p className=" text-center text-lg font-semibold">
              At Tulip Tots International, we envision a world where every child
              blossoms with curiosity, confidence, and creativity. Inspired by
              the symbolism of the tulip, we aim to cultivate growth, beauty,
              and resilience in every child. Through a play-based, international
              approach, we prepare children to become global citizens who are
              grounded in strong values and bloom with innovative ideas that
              impact the world.
            </p>
          </div>
          <div className=" bg-slate-200 p-12 flex flex-col justify-center items-center gap-8 rounded-4xl">
            <p className=" text-2xl font-bold text-black">MISSION</p>
            <p className=" text-center text-lg font-semibold">
              Our mission is to create a nurturing environment where every child
              feels safe, cherished, and inspired to explore. At Tulip Tots
              International, we foster a joyful learning atmosphere, where
              children are encouraged to follow their natural curiosity and grow
              at their own pace. We focus on meaningful play and strong
              relationships, ensuring that each child blossoms with confidence,
              creativity, and joy, embracing the endless possibilities of their
              early years
            </p>
          </div>
        </div>
      </div>
      {/* Curriculum & Pedagogy */}
      <div className="px-12 mt-26">
        <div className=" w-[70%] mx-auto">
          <div>
            <p className="text-2xl text-center font-bold text-black">
              How We Nurture young Minds
            </p>
            <p className=" mt-12 font-semibold text-slate-800 text-lg">
              Our curriculum is thoughtfully designed, combining global best
              practices with the nurturing spirit of play-based learning. We
              draw inspiration from renowned educational philosophies and align
              closely with the{" "}
              <strong>National Education Policy (NEP) 2020</strong>, which
              emphasizes the importance of the{" "}
              <strong>Foundational Stage (ages 3–8)</strong>—a period that lays
              the cornerstone for lifelong learning.
            </p>

            <p>
              Our approach follows the developmental and pedagogical guidelines
              set by the Early{" "}
              <strong>Childhood Care and Education (ECCE) framework</strong> and
              the
              <strong>
                {" "}
                National Council of Educational Research and Training (NCERT)
              </strong>
              .
            </p>

            <div className=" mt-8">
              <p className=" text-xl font-bold text-black">
                5×4 Skill-Based Framework
              </p>
              <p className=" mt-1 font-semibold text-slate-800 text-lg">
                The curriculum is built around a 5×4 skill matrix, focusing on
                five core developmental domains, each encompassing four
                sub-skills:
              </p>
              <div className=" ml-4 font-semibold text-slate-800 text-lg">
                <p>1. Language and Communication Skills</p>
                <p>2. Cognitive Skills</p>
                <p>3. Social and Emotional Skills</p>
                <p>4. Environmental Awareness</p>
                <p>5. Physical skills (Gross motor and fine motor skills)</p>
              </div>
              <p className="font-semibold text-slate-800 text-lg">
                This comprehensive approach ensures that children develop a
                balanced set of abilities, preparing them for lifelong learning
                and success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
