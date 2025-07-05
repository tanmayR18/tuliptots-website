import React, { useRef } from "react";
import { NavLink } from "react-router";
import image1 from "../../../assets/home/unique/leap.jpg";
import image2 from "../../../assets/home/unique/globalMethodology.jpg";
import image3 from "../../../assets/home/unique/yoga.jpg";
import image4 from "../../../assets/home/unique/natureBasedLearning.jpg";
import image5 from "../../../assets/home/unique/trainedEducator.jpg";
import image6 from "../../../assets/home/unique/creative.jpg";
import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const points = [
  {
    text: "LEAP curriculum (Learn, explore, act, play)",
    image: image1,
    color: "#f34f6a",
  },
  {
    text: "Global methodologies",
    image: image2,
    color: "#008000",
  },
  {
    text: "holistic child-led growth",
    image: image3,
    color: "#f34f6a",
  },
  {
    text: "Nature-based  learning",
    image: image4,
    color: "#008000",
  },
  {
    text: "In-house library",
    image: image5,
    color: "#f34f6a",
  },
  {
    text: "Emotional & creative spaces",
    image: image6,
    color: "#008000",
  },
];

const Highlights = () => {
  const nextRef = useRef(null);
  const previousRef = useRef(null);

  return (
    <div className=" bg-blue-200 py-12 px-4 lg:px-20">
      <motion.p
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{
          opacity: 1,
          translateY: 0,
          transition: { duration: 0.8 },
        }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        className=" text-center text-2xl sm:text-3xl md:text-4xl tracking-wider text-gray-800 font-bold"
      >
        What Makes Us Unique
      </motion.p>
      <div className=" md:grid  hidden md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 md:w-[90%] xl:w-[80%] mx-auto">
        {points.map((point, index) => (
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            className={` h-[250px]  flex justify-center items-center mt-12`}
            key={index}
          >
            <div className=" flex flex-col justify-center items-center relative">
              <img
                className=" h-44 w-44 rounded-full md:-translate-y-2"
                src={point?.image}
              />
              <p
                style={{ color: point.color }}
                className=" md:absolute font-semibold tracking-wide text-2xl leading-6 mt-6 text-center md:bottom-0 md:translate-y-full"
              >
                {point.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto md:hidden pb-10 max-w-xl ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          allowTouchMove={true}
          autoplay={true}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          //   onSlideChange={handleSlideChange}
          className="classroom-swiper "
          style={{
            "--swiper-navigation-color": "#8b5cf6",
            "--swiper-pagination-color": "#8b5cf6",
          }}
        >
          {points.map((point, index) => (
            <SwiperSlide  className=" pb-6" key={index}>
              <motion.div
                initial={{ opacity: 0, translateY: 30 }}
                whileInView={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 0.8 },
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                className={` h-[250px]  flex justify-center items-center mt-12`}
                key={index}
              >
                <div className=" flex flex-col justify-center items-center relative">
                  <img
                    className=" h-44 w-44 rounded-full md:-translate-y-2"
                    src={point?.image}
                  />
                  <p
                    style={{ color: point.color }}
                    className=" md:absolute font-semibold tracking-wide text-2xl leading-6 mt-6 text-center md:bottom-0 md:translate-y-full"
                  >
                    {point.text}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Buttons */}
        <div ref={previousRef} className="swiper-button-prev !hidden" />
        {/* <div className="swiper-button-next  !w-32 !h-full !top-0 !bg-white/80 !rounded-full !shadow-lg hover:!bg-white transition-all duration-300 after:!text-lg after:!text-purple-600" /> */}
        <div ref={nextRef} className="swiper-button-next !hidden" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.8 },
        }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        className=" flex mt-16 justify-center gap-10"
      >
        <div className=" border-2 border-green-500 hover:scale-105 group hover:bg-green-500 cursor-pointer transition-all duration-300   rounded-md py-1 w-32 flex justify-center items-center">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline font-bold" : ""} text-black text-lg`
            }
            to={"/aboutUs"}
          >
            <p className="text-green-500 text-xl md:text-2xl tracking-wide group-hover:text-white transition-all duration-300">
              About
            </p>
          </NavLink>
        </div>
        <div className=" border-2 border-amber-700 group hover:scale-105 hover:bg-amber-700 cursor-pointer transition-all duration-300   rounded-md py-1  w-32 flex justify-center items-center">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline font-bold" : ""} text-black text-lg`
            }
            to={"/blogs"}
          >
            <p className="text-amber-700 group-hover:text-white text-xl md:text-2xl tracking-wide transition-all duration-300 text-center">
              Blogs
            </p>
          </NavLink>
        </div>
        <div className=" border-2 border-blue-400 group hover:scale-105 hover:bg-blue-400 cursor-pointer transition-all duration-300  rounded-md py-1  w-32 flex justify-center items-center">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline font-bold" : ""} text-black text-lg`
            }
            to={"/gallery"}
          >
            <p className="text-blue-400 group-hover:text-white text-xl md:text-2xl tracking-wide transition-all duration-300 text-center">
              Gallery
            </p>
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};

export default Highlights;
