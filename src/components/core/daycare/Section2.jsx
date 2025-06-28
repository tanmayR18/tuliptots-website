import React from "react";

const Section2 = () => {
  return (
    <div className=" min-h-screen font-kgPrimaryPenmanship bg-[#fafafa] py-20">
      <div className=" flex flex-col justify-center items-center">
        <p className=" text-5xl font-bold text-[#323a30] text-center tracking-wider">
          Welcomee to Tulip <br /> Nest
        </p>

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
    </div>
  );
};

export default Section2;
