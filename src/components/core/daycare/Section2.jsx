import React from "react";
import doddle13 from "../../../assets/daycare/elements/doddle13.png";
import doddle10 from "../../../assets/daycare/elements/doddle10.png";
import flower2 from "../../../assets/daycare/elements/flower2.png";
import hearts from "../../../assets/daycare/elements/hearts.png";

import doddle12 from "../../../assets/daycare/elements/doddle12.png";
import doddle11 from "../../../assets/daycare/elements/doddle11.png";



const Section2 = () => {
  return (
    <div className=" relative min-h-screen overflow-hidden z-20 font-kgPrimaryPenmanship bg-[#fafafa] py-20">
      <div className="relative flex flex-col justify-center items-center z-40">
        <div className=" flex flex-col justify-center items-center">
          <img className=" w-28 h-14" src={doddle13} />
          <p className=" text-6xl font-bold text-[#323a30] text-center tracking-wider">
            Welcome to Tulip <br /> Nest
          </p>
        </div>

        <div className=" mx-auto w-10/12 bg-[#edd7c2] mt-8 max-w-4xl rounded-[50px] p-10 space-y-4">
          <div className=" flex flex-row space-x-3">
            <div className=" h-2 aspect-square mt-3 rounded-full bg-[#323a30]" />
            <p className=" text-[#323a30] text-2xl">
              Whether your little one needs care after school or during the day,
              Tulip Nest is their safe, cozy haven—a place{" "}
              <strong>where warmth, wonder, and well-being</strong> come
              together.
            </p>
          </div>
          <div className=" flex flex-row space-x-3">
            <div className=" h-2 aspect-square mt-3 rounded-full bg-[#323a30]" />
            <p className=" text-[#323a30] text-2xl">
              Much like a nest lovingly built for baby birds, Tulip Nest offers
              structure, softness, and the security children need while away
              from home.
            </p>
          </div>
          <div className=" flex flex-row space-x-3">
            <div className=" h-2 aspect-square mt-3 rounded-full bg-[#323a30]" />
            <p className=" text-[#323a30] text-2xl">
              It’s not just a daycare—it's a nurturing extension of your child’s
              home environment, rooted in love, calm, and play.
            </p>
          </div>
        </div>
      </div>

      <div className=" absolute top-0 -left-14">
        <img className=" h-[300px]" src={doddle10} />
        <img className=" absolute top-20 left-16 h-20" src={flower2} />
        <img className=" absolute h-28 bottom-0 right-10" src={hearts} />
      </div>

      <div className=" absolute bottom-10 right-0">
        <img className=" absolute h-[300px] -top-28 -right-20" src={doddle11} />
        <img className=" h-[400px] translate-x-[30%] z-20" src={doddle12} />
        <img className=" absolute  top-16 h-[80px] right-8" src={flower2} />
        <img className=" absolute -top-32 h-[100px] right-14" src={hearts} />
      </div>

    </div>
  );
};

export default Section2;
