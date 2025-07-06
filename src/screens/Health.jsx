import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import image from "../assets/school/health/healthHero.jpg";
import hygieneIcon from "../assets/school/health/hygiene.png";
import safetyIcon from "../assets/school/health/safety.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    image:
      "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Health/safe.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvSGVhbHRoL3NhZmUubXA0IiwiaWF0IjoxNzUxMjAxNzgyLCJleHAiOjE3ODI3Mzc3ODJ9.D6F17FeusFSzoEhPRk7yhRpObZqN_Z4RnKBrsOpT5nM",
    bgColor: "rgb(233, 116, 81)",
  },
  {
    title: "2. Healthy Habits Begin Early",
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
    image:
    //   "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Health/health.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvSGVhbHRoL2hlYWx0aC5tcDQiLCJpYXQiOjE3NTEyMDE4NzksImV4cCI6MTc4MjczNzg3OX0.dSsYLlvoa3JjvY0jHvNmdRoFBGAPE8v75z9TcLfLWvA",
    'https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Health/health2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvSGVhbHRoL2hlYWx0aDIubXA0IiwiaWF0IjoxNzUxNzg3NzI3LCJleHAiOjE3ODMzMjM3Mjd9.6LA30KgbdtGKR6gOzeR0MwYK9KXAhPyAp83-tnpI2Vg',
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
    ],
    conclusion:
      "Our indoor and outdoor spaces are monitored through CCTV to help ensure a secure, transparent environment",
    image:
      "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Health/safety.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvSGVhbHRoL3NhZmV0eS5tcDQiLCJpYXQiOjE3NTEyMDE5NzEsImV4cCI6MTc4MjczNzk3MX0.DEOeSOAM-NGywS7FMO353HYTnPjcoefj6yRw2Ueeab4",
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

      {/* <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 0.8, delay: 0.2 }}
        src={image}
        className="mx-auto mt-5"
      /> */}

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
            <source
              src={
                "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Health/safe.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvSGVhbHRoL3NhZmUubXA0IiwiaWF0IjoxNzUxMTk5NDMxLCJleHAiOjE3ODI3MzU0MzF9.m3Ghfsz5ixSvtmn_G3Uqu31RoWd9AfvitgtRjWS2lIU"
              }
              type="video/mp4"
            />
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
            <source
              src={
                "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Health/health2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvSGVhbHRoL2hlYWx0aDIubXA0IiwiaWF0IjoxNzUxMjA4OTE0LCJleHAiOjE3ODI3NDQ5MTR9.PPKMExAMT76S9W6pFa_TWwYULbXbqO-Gblpd23p69n0"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className=" w-1/2">
            <p className=" text-2xl font-semibold tracking-widest mb-5 ">
              2. Healthy Habits Begin Early
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
            <source
              src={
                "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Health/safety.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvSGVhbHRoL3NhZmV0eS5tcDQiLCJpYXQiOjE3NTExOTk0OTQsImV4cCI6MTc4MjczNTQ5NH0.-gr5LjWOON6s--fPcEaeZe13LPXdQnzUP8xmKj84ofk"
              }
              type="video/mp4"
            />
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
                  style={{backgroundColor: item.bgColor}}
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
        className="lg:w-10/12 mx-auto mt-8 lg:mt-12 text-xl lg:text-2xl tracking-wider  text-slate-700 font-semibold text-center"
      >
        At Tulip Tots, your child's well-being is our highest priority. While
        minor illnesses are a part of childhood, we take thoughtful steps to
        maintain a safe, healthy environment for all. If your child is feeling
        unwell, we encourage rest at home, observation of symptoms, and a visit
        to the pediatrician when needed—protecting both their health and that of
        their peers.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:w-10/12 mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, x: -20, y: 25 }}
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
          className="bg-white rounded-[32px] overflow-hidden shadow-2xl"
        >
          <motion.img
            initial={{ opacity: 0, x: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              transition: { duration: 0.8, delay: 0.8 },
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            className="h-24 w-24 translate-y-14 mx-auto"
            src={safetyIcon}
          />
          <div className="mt-20">
            <svg
              width="100%"
              height="100%"
              id="svg"
              viewBox="0 0 1440 490"
              xmlns="http://www.w3.org/2000/svg"
              className="transition duration-300 ease-in-out delay-150"
            >
              <path
                d="M 0,500 L 0,187 C 139.59999999999997,214.86666666666667 279.19999999999993,242.73333333333332 424,217 C 568.8000000000001,191.26666666666668 718.8000000000002,111.93333333333334 889,98 C 1059.1999999999998,84.06666666666666 1249.6,135.53333333333333 1440,187 L 1440,500 L 0,500 Z"
                stroke="none"
                strokeWidth="0"
                fill="#bfea6e"
                fillOpacity="1"
                className="transition-all duration-300 ease-in-out delay-150 path-0"
              ></path>
            </svg>
          </div>
          <motion.div className="bg-linear-to-b h-full from-[#bfea6e] to-[#ddfaa6] px-6 pb-6">
            <motion.p
              initial={{ opacity: 0, x: 0, y: 20 }}
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
              className="text-2xl text-white -translate-y-8 font-semibold tracking-wider text-center"
            >
              Safe Spaces, Always
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 0, y: 20 }}
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
              className="mt-5 h-full text-slate-800 font-semibold text-center"
            >
              <div>
                <p className=" text-xl">
                  CCTV monitoring in key areas for transparency,First aid kit
                  readily available at all times, In case of emergencies, first
                  aid is administered immediately, and our on-call doctor is
                  contacted before informing parents for a prompt and
                  professional response
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20, y: 20 }}
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
          className="bg-white rounded-[32px] overflow-hidden shadow-2xl"
        >
          <motion.img
            initial={{ opacity: 0, x: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              transition: { duration: 0.8, delay: 0.8 },
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            className="h-32 w-32 translate-y-12 mx-auto"
            src={hygieneIcon}
          />
          <div className="mt-14">
            <svg
              width="100%"
              height="100%"
              id="svg"
              viewBox="0 0 1440 490"
              xmlns="http://www.w3.org/2000/svg"
              className="transition duration-300 ease-in-out delay-150"
            >
              <path
                d="M 0,500 L 0,187 C 118.5,156.92857142857144 237,126.85714285714286 361,152 C 485,177.14285714285714 614.5,257.5 724,280 C 833.5,302.5 923,267.14285714285717 1039,242 C 1155,216.85714285714283 1297.5,201.92857142857142 1440,187 L 1440,500 L 0,500 Z"
                stroke="none"
                strokeWidth="0"
                fill="#78c9f3"
                fillOpacity="1"
                className="transition-all duration-300 ease-in-out delay-150 path-0"
              ></path>
            </svg>
          </div>
          <motion.div className="bg-linear-to-b h-full from-[#78c9f3] to-[#b7e3fa] px-6 pb-6">
            <motion.p
              initial={{ opacity: 0, x: 0, y: 20 }}
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
              className="text-2xl text-white -translate-y-8 font-semibold tracking-wider text-center"
            >
              Everyday Hygiene Habits
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 0, y: 20 }}
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
              className="mt-5 h-full text-slate-800 font-semibold text-center"
            >
              <div>
                <p className=" text-xl">
                  Frequent and supervised handwashing, Engaging stories and
                  songs about personal hygiene, Gentle reminders for clean
                  habits like nose-wiping, covering coughs, and post-play
                  cleanup
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Health;
