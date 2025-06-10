import React from "react";
import image from "../assets/school/health/healthHero.jpg";
import hygieneIcon from "../assets/school/health/hygiene.png";
import safetyIcon from "../assets/school/health/safety.png";

const Health = () => {
  return (
    <div className=" pt-32 lg:pt-44 px-4 bg-[#f7eee9]">
      <p className=" text-black font-bold text-center text-xl md:text-2xl lg:text-3xl tracking-wide">
        Caring for Every Little One
      </p>
      <img src={image} className=" mx-auto mt-5" />

      <p className=" lg:w-10/12 mx-auto mt-5 lg:mt-8 text-base lg:text-lg text-slate-700 font-semibold text-center">
        At Tulip Tots, your child’s well-being is our highest priority. While
        minor illnesses are a part of childhood, we take thoughtful steps to
        maintain a safe, healthy environment for all. If your child is feeling
        unwell, we encourage rest at home, observation of symptoms, and a visit
        to the pediatrician when needed—protecting both their health and that of
        their peers.
      </p>

      <div className=" grid grid-cols-2 gap-10 w-10/12 mx-auto py-12">
        <div className=" bg-white rounded-[32px] overflow-hidden">
          <img
            className=" h-24 w-24  translate-y-14 mx-auto "
            src={safetyIcon}
          />
          <div className=" mt-20">
            <svg
              width="100%"
              height="100%"
              id="svg"
              viewBox="0 0 1440 490"
              xmlns="http://www.w3.org/2000/svg"
              class="transition duration-300 ease-in-out delay-150"
            >
              <path
                d="M 0,500 L 0,187 C 139.59999999999997,214.86666666666667 279.19999999999993,242.73333333333332 424,217 C 568.8000000000001,191.26666666666668 718.8000000000002,111.93333333333334 889,98 C 1059.1999999999998,84.06666666666666 1249.6,135.53333333333333 1440,187 L 1440,500 L 0,500 Z"
                stroke="none"
                stroke-width="0"
                fill="#bfea6e"
                fill-opacity="1"
                class="transition-all duration-300 ease-in-out delay-150 path-0"
              ></path>
            </svg>
          </div>
          <div className="bg-linear-to-b h-full from-[#bfea6e] to-[#ddfaa6] px-6 pb-6 ">
            <p className=" text-2xl text-white -translate-y-8 font-semibold tracking-wider text-center">
              Safe Spaces, Always
            </p>

            <div className=" mt-5 h-full text-slate-800 font-semibold text-center">
              {/* <p className=" text-lg ">We nurture healthy routines through:</p> */}
              <div className="">
                <p>
                  CCTV monitoring in key areas for transparency,First aid kit
                  readily available at all times, In case of emergencies, first
                  aid is administered immediately, and our on-call doctor is
                  contacted before informing parents for a prompt and
                  professional response
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-[32px] overflow-hidden">
          <img
            className=" h-32 w-32  translate-y-12 mx-auto "
            src={hygieneIcon}
          />
          <div className="mt-14">
            <svg
              width="100%"
              height="100%"
              id="svg"
              viewBox="0 0 1440 490"
              xmlns="http://www.w3.org/2000/svg"
              class="transition duration-300 ease-in-out delay-150"
            >
              <path
                d="M 0,500 L 0,187 C 118.5,156.92857142857144 237,126.85714285714286 361,152 C 485,177.14285714285714 614.5,257.5 724,280 C 833.5,302.5 923,267.14285714285717 1039,242 C 1155,216.85714285714283 1297.5,201.92857142857142 1440,187 L 1440,500 L 0,500 Z"
                stroke="none"
                stroke-width="0"
                fill="#78c9f3"
                fill-opacity="1"
                class="transition-all duration-300 ease-in-out delay-150 path-0"
              ></path>
            </svg>
          </div>
          <div className="bg-linear-to-b h-full from-[#78c9f3] to-[#b7e3fa] px-6 pb-6 ">
            <p className=" text-2xl text-white -translate-y-8 font-semibold tracking-wider text-center">
              Everyday Hygiene Habits
            </p>

            <div className=" mt-5 h-full text-slate-800 font-semibold text-center">
              {/* <p className=" text-lg ">We nurture healthy routines through:</p> */}
              <div className="">
                <p>
                  Frequent and supervised handwashing, Engaging stories and
                  songs about personal hygiene, Gentle reminders for clean
                  habits like nose-wiping, covering coughs, and post-play
                  cleanup
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div>
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 490"
            xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,500 L 0,187 C 139.59999999999997,214.86666666666667 279.19999999999993,242.73333333333332 424,217 C 568.8000000000001,191.26666666666668 718.8000000000002,111.93333333333334 889,98 C 1059.1999999999998,84.06666666666666 1249.6,135.53333333333333 1440,187 L 1440,500 L 0,500 Z"
              stroke="none"
              stroke-width="0"
              fill="#bfea6e"
              fill-opacity="1"
              class="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default Health;
