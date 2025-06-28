import React from "react";
import image1 from "../../../assets/daycare/daycare2.png";

const Section3 = () => {
  return (
    <div className=" min-h-screen bg-[#afe9e4] py-20 font-kgPrimaryPenmanship">
      <p className=" text-5xl text-[#323a30] tracking-wider text-center font-semibold">
        We Listen Like you do
      </p>
      <p className="text-slate-600 text-2xl text-center mt-6">
        A 3 Step Child Centered Transition Process
      </p>

      <div className=" flex items-center mx-auto gap-6 w-10/12 mt-20">
        <img src={image1} className=" w-1/2" />
        <div className=" flex flex-col justify-start gap-8 w-full">
          <div className=" bg-[#edd7c2] px-14 py-3 rounded-[32px]">
            <p className=" text-2xl font-medium tracking-wider">
              Getting to know your child
            </p>
          </div>
          <div className=" bg-[#edd7c2] px-14 py-3 rounded-[32px]">
            <p className=" text-2xl font-medium tracking-wider">
              Personalized transition plan
            </p>
          </div>
          <div className=" bg-[#edd7c2] px-14 py-3 rounded-[32px]">
            <p className=" text-2xl font-medium tracking-wider">
              Ongoing observation & communication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
