import React from "react";
import doddle2 from "../../../assets/elements/doddle2.png";
import doddle3 from "../../../assets/elements/doddle3.png";
import doddle11 from "../../../assets/elements/doddle11.png";
import doddle8 from "../../../assets/elements/doddle8.png";
import hearts from "../../../assets/elements/hearts.png";
import cloud from "../../../assets/elements/cloud.png";
import leaves from "../../../assets/elements/leaves.png";
import flower5 from "../../../assets/elements/flower5.png";
import { Link } from "react-router";

const NewHero = () => {
  return (
    <div className="pb-12 overflow-hidden min-h-screen relative flex justify-center items-center bg-linear-to-br from-[#afe9e4] to-[#daf0ee]  overflow-x-hidden pt-32 lg:pt-44">
      <img
        src={doddle2}
        className=" absolute -bottom-16 lg:-bottom-[100px] -left-10 lg:-left-[100px] w-[200px] lg:w-[400px]"
      />
      <div className=" absolute -bottom-5 right-0">
        {/* <img className=" w-[200px]" src={doddle3} /> */}
        <img
          src={leaves}
          className=" w-[100px] sm:w-[200px] lg:w-[150px] xl:w-[250px]"
        />
      </div>
      <img
        src={cloud}
        className=" w-[130px] hidden sm:flex absolute top-1/2 -translate-y-1/2 right-10 "
      />

      <div className=" absolute -top-10 -right-24 ">
        <img
          className=" w-[200px] sm:w-[230px] lg:w-[250px] rotate-90"
          src={doddle11}
        />
        <img
          src={hearts}
          className=" absolute bottom-12 sm:bottom-8 lg:bottom-6 left-6 sm:left-0 lg:left-0 w-[60px] sm:w-[80px] lg:w-[100px]"
        />
      </div>

      <div className=" absolute top-0 lg:-top-16 -left-12 lg:-left-24">
        <img
          className=" w-[200px] sm:w-[250px] lg:w-[350px]   rotate-[120deg]"
          src={doddle8}
        />
      </div>
      <div className="w-10/12 mx-auto ">
        <div className="  flex justify-center lg:justify-end">
          <div className=" relative flex flex-col  items-center xl:-translate-x-1/4 2xl:-translate-x-[20%] ">
            <img
              src={flower5}
              className=" absolute -top-5 -left-8 sm:-left-20 w-[60px] sm:w-[100px]"
            />
            <p className=" font-happy font-semibold text-[#323a30] text-center text-6xl xl:text-7xl 2xl:text-8xl tracking-[3px]">
              Tulip Tots <br /> International
            </p>

            <div className=" bg-[#f69222] py-3 px-8 sm:px-10 md:px-14 rounded-[32px] mt-3">
              <p className=" text-[#323a30] text-center font-semibold text-2xl xl:text-3xl 2xl:text-4xl ">
                Where little minds BLOOM
              </p>
            </div>

            <Link
              to={"/story"}
              className=" border-2 hover:scale-105 border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer px-5 py-2 rounded-md  mt-5"
            >
              <p className=" text-2xl tracking-wider">Our Story</p>
            </Link>

            <p className=" text-[#bb4207] text-center font-semibold tracking-wider text-xl xl:text-2xl 2xl:text-3xl mt-5">
              Preschool - Daycare - Children’s Library - Activity Centre
            </p>

            <p className="text-[#323a30] max-w-md text-center text-xl xl:text-2xl 2xl:text-3xl tracking-wide leading-6 font-semibold mt-5">
              Rooted in love and led by research, Tulip Tots International is a
              thoughtfully designed early learning space where every child’s
              wonder is honored, voices are heard, and play leads the way—gently
              shaping confident global citizens for the 21st century.
            </p>
            <img
              className=" hidden xl:flex   absolute -top-10 left-10 2xl:left-10 -translate-x-full"
              src="https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Home/homepage1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvSG9tZS9ob21lcGFnZTEucG5nIiwiaWF0IjoxNzUxMjIwNzYwLCJleHAiOjE3ODI3NTY3NjB9.ZHkSQvoeRw_nDU0v6_zcgD0lHRAfO1C7w-WPxRh8RDI"
            />
          </div>
        </div>
        <img
          className=" hidden lg:flex xl:hidden w-[42%] max-w-[600px] absolute bottom-[50px] -translate-x-5 xl:translate-x-0"
          src="https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Home/homepage1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvSG9tZS9ob21lcGFnZTEucG5nIiwiaWF0IjoxNzUxMjIwNzYwLCJleHAiOjE3ODI3NTY3NjB9.ZHkSQvoeRw_nDU0v6_zcgD0lHRAfO1C7w-WPxRh8RDI"
        />
      </div>
    </div>
  );
};

export default NewHero;
