import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import image from "../assets/school/classroom/classroomHero.jpg";
import image1 from "../assets/school/classroom/1.jpg";
import image2 from "../assets/school/classroom/2.png";
import image3 from "../assets/school/classroom/3.png";
import image4 from "../assets/school/classroom/4.png";
import image5 from "../assets/school/classroom/5.jpg";
import image6 from "../assets/school/classroom/6.jpg";
import image7 from "../assets/school/classroom/7.jpg";

import grow from "../assets/school/classroom/grow.png";
import move from "../assets/school/classroom/move.png";
import play from "../assets/school/classroom/play.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    title: "Furniture-Free, Open Layout",
    points: [
      "We embrace a wide-open layout that encourages free movement, creativity, and natural exploration",
      "Floor-based learning promotes healthy posture, sensory integration, and body awareness, allowing children to feel connected to the space around them.",
    ],
    bgColor: "#AEDCFF",
    image: image1,
  },
  {
    title: "Climb, Slide, Swing, Explore",
    points: [
      "Our climbing frames, swings, and balance boards are designed to build strength, courage, and coordination.",
      "These versatile setups transform into bridges, ramps, tunnels—whatever a child imagines in the moment.",
    ],
    bgColor: "#FFAB91",
    image: image2,
  },
  {
    title: "Build Big, Dream Bigger",
    points: [
      "With life-size building tools, children become the architects of their imagination—constructing walk-in forts, towers, and creative structures they can play inside, rebuild, and reimagine.",
      "This kind of large-scale construction play enhances gross motor development, spatial awareness, collaboration, and confidence—proving that big ideas deserve big spaces",
    ],
    bgColor: "#A1E8DC",
    image: image3,
  },
  {
    title: "Endless Play Possibilities",
    points: [
      "Our flexible play tools and modular furniture can be reimagined daily into obstacle courses, story stages, hideouts, or quiet corners—shaped entirely by the evolving interests of curious young minds.",
      "These dynamic spaces support both active movement and deep focus, blending gross motor development with imaginative storytelling and teamwork.",
    ],
    bgColor: "#F5A5A0",
    image: image4,
  },
  {
    title: "Vertical and Hands-On Learning Walls",
    points: [
      "With our interactive wall zones, children explore a world of movement, magnets, puzzles, gears, and visual challenges—designed to develop fine motor skills, spatial logic, and creative confidence.",
      "Magnetic walls, vertical drawing boards, and logic-based puzzles engage both body and brain—making learning truly multi-sensory and fun.",
    ],
    bgColor: "#C3B4F8",
    image: image5,
  },
  {
    title: "Calm Corners and Cozy Nooks",
    points: [
      "Soft spaces like the Nugget couch and cozy reading nooks encourage mindfulness, bonding, and emotional regulation, creating a calming balance to active play",
      "Thoughtfully designed calm corners offer emotional safety, sensory support, and space for quiet reflection or reset—because feeling secure is the foundation of learning.",
    ],
    bgColor: "#F8BBD0",
    image: image6,
  },
  {
    title: "Montessori-Inspired Self-Access Areas",
    points: [
      "Open shelves filled with rotating toys, games, and hands-on materials invite children to make independent choices and engage in purposeful play",
      "Every material is child-chosen, child-used, and child-loved, empowering children to lead their learning journey with joy and confidence.",
    ],
    bgColor: "#A5EAF2",
    image: image7,
  },
];

const Card = ({ title, points, bgColor, index, isInView, image }) => {
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
      style={{ backgroundColor: bgColor }}
      className={` lg:p-8 xl:p-10 rounded-3xl gap-4 flex items-center justify-between ${
        index % 2 === 0 ? "flex-row" : " flex-row-reverse"
      }`}
    >
      <div className=" w-1/2">
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="text-3xl tracking-wider font-bold text-center text-black"
        >
          {title}
        </motion.p>

        <div className="border-t border-dashed my-5" />

        <div>
          {points.map((item, pointIndex) => (
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1 + 0.3 + pointIndex * 0.1,
              }}
              className="mt-1 text-2xl  tracking-widest text-slate-800 font-semibold"
              key={pointIndex}
            >
              {item}
            </motion.li>
          ))}
        </div>
      </div>
      <div className=" h-[300px] overflow-hidden aspect-square">
        <img className=" w-full h-full object-cover rounded-2xl" src={image} />
      </div>
    </motion.div>
  );
};

const Classroom = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextRef = useRef(null);
  const previousRef = useRef(null);

  return (
    <div
      ref={ref}
      className="pt-32 lg:pt-44 px-5 bg-[#fafafa] font-kgPrimaryPenmanship"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-black font-bold text-center text-3xl md:text-4xl lg:text-5xl tracking-wide"
      >
        A Living Breathing Classroom
      </motion.p>

      <div className="w-24 mt-2 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 0.8, delay: 0.2 }}
        className=" flex mx-auto justify-center max-w-3xl items-center mt-10"
      >
        <img
          className=" w-[33%] rounded-bl-xl rounded-tl-xl lg:rounded-bl-3xl lg:rounded-tl-3xl "
          src={move}
        />
        <img className=" w-[33%]" src={grow} />
        <img
          className=" w-[33%] rounded-br-xl rounded-tr-xl lg:rounded-br-3xl lg:rounded-tr-3xl"
          src={play}
        />
      </motion.div>

      {/* <motion.img src={image} className="mx-auto scale-105 mt-4" /> */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="md:w-10/12 mx-auto mt-8 text-xl lg:text-2xl tracking-wider text-slate-700 font-semibold md:text-center"
      >
        At Tulip Tots International, we believe the environment is the third
        teacher—a space designed not just to house, but to{" "}
        <strong className="tracking-wider"> move, grow, and play </strong>
        alongside your child. Every element of our classroom invites
        imagination, independence, and holistic development, fostering a dynamic
        and flexible learning environment.
      </motion.p>

      <div className="mt-16 pb-16 hidden lg:grid grid-cols-1 gap-6 lg:w-[90%] xl:w-10/12 mx-auto">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            points={item.points}
            bgColor={item.bgColor}
            index={index}
            isInView={isInView}
            image={item?.image}
          />
        ))}
      </div>

      <div className="relative mx-auto lg:hidden mt-16 pb-20 max-w-xl ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          allowTouchMove={true}
          autoplay={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          //   onSlideChange={handleSlideChange}
          className="classroom-swiper pb-5"
          style={{
            "--swiper-navigation-color": "#8b5cf6",
            "--swiper-pagination-color": "#8b5cf6",
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide className=" pb-10" key={index}>
              <div
                style={{ backgroundColor: item.bgColor }}
                className="flex flex-col h-full justify-between items-center gap-8 mx-auto p-4 sm:p-8 rounded-2xl relative "
              >
                <img
                  src={item.image}
                  className=" rounded-2xl w-full aspect-square"
                />

                <div className=" text-black text-xl">
                  <p className=" text-2xl font-semibold tracking-widest mb-2">
                    {item.title}
                  </p>
                  <div className=" pl-4">
                    {item.points.map((point, index) => (
                      <div key={index} className=" flex flex-row">
                        <div className=" h-2 w-2 mt-2 mr-2 bg-black rounded-full" />
                        <li className=" flex-1">{point}</li>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  onClick={() => nextRef.current.click()}
                  className=" absolute top-0 right-0 bottom-0  h-full w-32"
                />
                <div
                  onClick={() => previousRef.current.click()}
                  className=" absolute top-0 left-0 bottom-0  h-full w-32"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Buttons */}
        <div ref={previousRef} className="swiper-button-prev !hidden" />
        {/* <div className="swiper-button-next  !w-32 !h-full !top-0 !bg-white/80 !rounded-full !shadow-lg hover:!bg-white transition-all duration-300 after:!text-lg after:!text-purple-600" /> */}
        <div ref={nextRef} className="swiper-button-next !hidden" />
      </div>
    </div>
  );
};

export default Classroom;
