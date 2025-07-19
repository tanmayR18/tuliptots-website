import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import video1 from "../assets/health/safe.mp4";
import video2 from "../assets/health/health2.mp4";
import video3 from "../assets/health/safety.mp4";

const data = [
  {
    title: "1. Safe & Spotless Spaces",
    subTitle:
      "We take immense care in maintaining a clean, hygienic environment where children can explore freely and safely.",
    points: [
      "Daily cleaning of all classrooms, restrooms, and play areas",
      "Regular deep-cleaning and sanitization protocols",
      "Non-toxic, child-safe cleaning materials",
      "Organized, clutter-free spaces that support calm and focused play",
    ],
    conclusion:
      "Our classrooms and common areas are cared for with as much love as the children inside them.",
    image: video1,
    bgColor: "rgb(233, 116, 81)",
  },
  {
    title: "2.  Tulip Tots International",
    subTitle:
      "At Tulip Tots, health and hygiene are not just maintained—they’re modeled and taught with joy and gentleness.",
    points: [
      "To wash hands after play, before meals, and after using the restroom",
      "To keep their surroundings clean and organized",
      "The importance of personal hygiene in daily routines",
      "Body awareness, nutrition, and rest through guided conversations and play",
    ],
    conclusion:
      "We believe children thrive when they understand how to care for themselves and their environment.",
    image: video2,
    bgColor: "rgb(59, 169, 156)",
  },
  {
    title: "3. Health & Safety First",
    subTitle: "Your child’s safety is our top priority.",
    points: [
      "We have an on-call pediatric doctor to assess any child who may feel unwell",
      "In case of emergencies, first aid is administered immediately",
      "Parents are informed promptly and guided with care",
      "We follow clear health policies to protect all children and staff",
      "Fire extinguishers are installed and kept up to date to stay ready for any fire emergency",
    ],
    conclusion:
      "Our indoor and outdoor spaces are monitored through CCTV to help ensure a secure, transparent environment",
    image: video3,
    bgColor: "rgb(128, 115, 163)",
  },
];

const Health = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextRef = useRef(null);
  const previousRef = useRef(null);

  return (
    <div
      ref={ref}
      className="pt-32 lg:pt-44 px-4 bg-[#fafafa] font-kgPrimaryPenmanship"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className=" text-3xl lg:text-5xl font-semibold text-[#333] text-center tracking-[3px]"
      >
        Caring for Every Little One
      </motion.p>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-2"></div>

      <div className=" mt-20 hidden lg:flex flex-col w-10/12 mx-auto max-w-7xl text-xl tracking-wider ">
        <div
          style={{ backgroundColor: "rgb(233, 116, 81)" }}
          className="flex justify-between items-center gap-10 mx-auto p-8 rounded-2xl "
        >
          <video
            //   ref={(el) => (videoRefs.current[index] = el)}
            className=" w-[45%] xl:w-[40%] max-h-full object-contain rounded-2xl"
            // controls
            autoPlay={true}
            loop={true}
            muted={true}
            controlsList="nodownload"
            disablePictureInPicture
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className=" text-black text-xl w-1/2">
            <p className=" text-2xl font-semibold tracking-widest mb-5">
              1. Safe & Spotless Spaces
            </p>
            <p>
              We take immense care in maintaining a clean, hygienic environment
              where children can explore freely and safely.
            </p>
            <div>
              <li>
                Daily cleaning of all classrooms, restrooms, and play areas
              </li>
              <li>Regular deep-cleaning and sanitization protocols</li>
              <li>Non-toxic, child-safe cleaning materials</li>
              <li>
                Organized, clutter-free spaces that support calm and focused
                play
              </li>
            </div>
            <p>
              Our classrooms and common areas are cared for with as much love as
              the children inside them.
            </p>
          </div>
        </div>
        <div
          style={{ backgroundColor: "rgb(59, 169, 156)" }}
          className="flex flex-row-reverse mt-12 justify-between items-center gap-10 p-8 rounded-2xl"
        >
          <video
            //   ref={(el) => (videoRefs.current[index] = el)}
            className="  w-[45%] xl:w-[40%] max-h-full object-contain rounded-2xl"
            // controls
            autoPlay={true}
            loop={true}
            muted={true}
            controlsList="nodownload"
            disablePictureInPicture
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className=" w-1/2">
            <p className=" text-2xl font-semibold tracking-widest mb-5 ">
              2. Tulip Tots International
            </p>
            <p>
              At Tulip Tots, health and hygiene are not just maintained—they’re
              modeled and taught with joy and gentleness.
            </p>
            <div>
              <li>
                To wash hands after play, before meals, and after using the
                restroom
              </li>
              <li>To keep their surroundings clean and organized</li>
              <li>The importance of personal hygiene in daily routines</li>
              <li>
                Body awareness, nutrition, and rest through guided conversations
                and play
              </li>
            </div>
            <p>
              We believe children thrive when they understand how to care for
              themselves and their environment.
            </p>
          </div>
        </div>
        <div
          style={{ backgroundColor: "rgb(128, 115, 163)" }}
          className="flex mt-12 justify-between items-center gap-10  p-8 rounded-2xl"
        >
          <video
            //   ref={(el) => (videoRefs.current[index] = el)}
            className=" w-[45%] xl:w-[40%] max-h-full object-contain rounded-2xl"
            // controls
            autoPlay={true}
            loop={true}
            muted={true}
            controlsList="nodownload"
            disablePictureInPicture
          >
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="w-1/2">
            <p className=" text-2xl font-semibold tracking-widest mb-5">
              3. Health & Safety First
            </p>
            <p>Your child’s safety is our top priority.</p>
            <div>
              <li>
                We have an on-call pediatric doctor to assess any child who may
                feel unwell
              </li>
              <li>
                In case of emergencies, first aid is administered immediately
              </li>
              <li>Parents are informed promptly and guided with care</li>
              <li>
                We follow clear health policies to protect all children and
                staff
              </li>
              <li>
                Fire extinguishers are installed and kept up to date to stay
                ready for any fire emergency
              </li>
            </div>
            <p>
              Our indoor and outdoor spaces are monitored through CCTV to help
              ensure a secure, transparent environment
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto lg:hidden mt-16 max-w-lg">
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
          className="video-swiper pb-5"
          style={{
            "--swiper-navigation-color": "#8b5cf6",
            "--swiper-pagination-color": "#8b5cf6",
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide className=" pb-10" key={index}>
              <div
                style={{ backgroundColor: item.bgColor }}
                className="flex flex-col justify-between items-center gap-8 mx-auto p-4 rounded-2xl relative "
              >
                <video
                  //   ref={(el) => (videoRefs.current[index] = el)}
                  style={{ backgroundColor: item.bgColor }}
                  className=" w-full rounded-2xl"
                  // controls
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  controlsList="nodownload"
                  disablePictureInPicture
                >
                  <source src={item.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className=" text-black text-xl">
                  <p className=" text-2xl font-semibold tracking-widest mb-2">
                    {item.title}
                  </p>
                  <p>{item.subTitle}</p>
                  <div className=" pl-4">
                    {item.points.map((point, index) => (
                      <div key={index} className=" flex flex-row">
                        <div className=" h-2 w-2 mt-2 mr-2 bg-black rounded-full" />
                        <li className=" flex-1">{point}</li>
                      </div>
                    ))}
                  </div>
                  <p>{item.conclusion}</p>
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

      <motion.p
        initial={{ opacity: 0, x: 0, y: 15 }}
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
        className="lg:w-10/12 mx-auto mt-8 mb-16 lg:mt-12 text-xl lg:text-2xl tracking-wider  text-slate-700 font-semibold text-center"
      >
        At Tulip Tots, your child's well-being is our highest priority. While
        minor illnesses are a part of childhood, we take thoughtful steps to
        maintain a safe, healthy environment for all. If your child is feeling
        unwell, we encourage rest at home, observation of symptoms, and a visit
        to the pediatrician when needed—protecting both their health and that of
        their peers.
      </motion.p>
    </div>
  );
};

export default Health;
