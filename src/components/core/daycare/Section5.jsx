import React, { useRef } from "react";
import flower from "../../../assets/elements/flower2.png";
import hearts from "../../../assets/elements/hearts.png";
import doddle3 from "../../../assets/elements/doddle3.png";
import doddle5 from "../../../assets/elements/doddle5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    title: "Physical Development ",
    points: [
      "Gross motor climbing zones and obstacle courses",
      "Fine motor skill-building through hands-on play",
      "Indoor sensory-rich environments",
      "Balance of active indoor play and quiet time",
    ],
  },
  {
    title: "Cognitive development",
    points: [
      "Exploration and problem-solving through discovery-based play",
      "Early math and science through hands-on activities",
      "Open-ended play and thinking routines",
      "Predictable daily rhythms and routines",
    ],
  },
  {
    title: "Social & Emotional development",
    points: [
      "Emotionally responsive caregiving",
      "Peer interaction and collaborative play",
      "Safe, nurturing spaces for self-regulation",
      "Gentle support during transitions and separation",
    ],
  },
  {
    title: "Language development",
    points: [
      "Storytelling, songs, and daily conversations",
      "Rhymes and rhythm activities for language flow",
      "Encouragement of self-expression",
      "Support for multilingual communication",
    ],
  },
];

const Section5 = () => {
  const nextRef = useRef(null);
  const previousRef = useRef(null);

  return (
    <div className=" py-14 font-kgPrimaryPenmanship relative px-4">
      <img
        className=" w-[120px] sm:w-[150px] md:w-[200px] lg:w-[300px] absolute top-0 "
        src={doddle5}
      />
      <img
        className=" w-[60px] sm:w-[80px] md:w-[120px] lg:w-[180px] absolute right-0 top-0"
        src={doddle3}
      />
      <div className=" flex justify-center items-center gap-2 md:gap-5 ">
        <h1 className=" text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800 tracking-wider text-center">
          More Than Care
        </h1>
        <img
          className=" w-[50px] md:w-[80px] lg:w-[100px] -translate-y-2"
          src={hearts}
        />
      </div>

      <div className="  hidden mt-10 md:grid grid-cols-1 gap-4 lg:gap-8 max-w-6xl mx-auto md:grid-cols-2 relative">
        {data?.map((item) => (
          <Card item={item} />
        ))}

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <img
            src={flower}
            className=" w-[110px] h-[100px] xl:w-[150px] xl:h-[130px] translate-y-1 xl:-translate-x-2 lg:translate-y-2 xl:translate-y-5"
          />
        </div>
      </div>

      <div className=" md:hidden mt-5">
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
            <SwiperSlide className="  pb-10" key={index}>
              <div className="flex flex-col h-full justify-between items-center mt-5 gap-8 mx-auto bg-[#EDD7C2] p-4 py-10 sm:p-8 rounded-2xl relative ">
                <div className=" text-black text-xl">
                  <p className=" text-2xl font-semibold text-center tracking-widest mb-2">
                    {item.title}
                  </p>
                  <div className=" pl-4 mt-4">
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

const Card = ({ item }) => {
  return (
    <div className=" bg-[#EDD7C2] p5-4 pl-7 py-8 lg:p-8 rounded-2xl">
      <h3 className=" text-center text-black text-3xl tracking-wider underline">
        {item?.title}
      </h3>

      <div className=" mt-6">
        {item?.points?.map((point) => (
          <li className=" text-2xl tracking-wide">{point}</li>
        ))}
      </div>
    </div>
  );
};

export default Section5;
