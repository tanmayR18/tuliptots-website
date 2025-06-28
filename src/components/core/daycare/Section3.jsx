import React from "react";
import image1 from "../../../assets/daycare/daycare2.png";
import doddle13 from "../../../assets/daycare/elements/doddle13.png";
import doddle7 from "../../../assets/daycare/elements/doddle7.png";
import doddle9 from "../../../assets/daycare/elements/doddle9.png";
import cloud from "../../../assets/daycare/elements/cloud.png";
import doddle5 from "../../../assets/daycare/elements/doddle5.png";
import doddle6 from "../../../assets/daycare/elements/doddle6.png";
import spring from "../../../assets/daycare/elements/spring.png";
import flower from "../../../assets/daycare/elements/flower.png";

const Section3 = () => {
  return (
    <div className=" min-h-screen relative overflow-hidden bg-[#afe9e4] z-20 py-20 font-kgPrimaryPenmanship">
      <div className=" relative z-40 pt-16">
        <div className=" flex flex-row gap-2 justify-center">
          <img className=" w-[90px]" src={doddle13} />
          <p className=" text-5xl text-[#323a30] tracking-wider text-center font-semibold">
            We Listen Like you do
          </p>
        </div>
        <p className="text-slate-600 text-2xl text-center mt-6">
          A 3 Step Child Centered Transition Process
        </p>

        <div className=" flex items-center mx-auto gap-6 w-10/12 ">
          <img src={image1} className=" w-1/2" />
          <div className=" flex flex-col justify-start gap-8 w-full">
            <div className=" bg-[#edd7c2] px-14 py-3 rounded-[32px]">
              <p className=" text-2xl font-semibold tracking-widest">
                Getting to know your child
              </p>
            </div>
            <div className=" bg-[#edd7c2] px-14 py-3 rounded-[32px]">
              <p className=" text-2xl font-semibold tracking-widest">
                Personalized transition plan
              </p>
            </div>
            <div className=" bg-[#edd7c2] px-14 py-3 rounded-[32px]">
              <p className=" text-2xl font-semibold tracking-widest">
                Ongoing observation & communication
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" absolute -top-[100px] -left-[200px]  ">
        <img className=" w-[400px]" src={doddle7} />
      </div>

      <div className=" absolute top-0 -right-[100px]  ">
        <img className=" w-[460px]" src={doddle9} />
        <img className=" w-[100px] absolute bottom-0 right-[140px]" src={cloud} />
        <img className=" w-[100px] absolute bottom-0 right-[140px]" src={cloud} />
        <img className=" w-[250px] absolute top-4 -left-[120px]" src={doddle5} />
      </div>

      <div className=" absolute bottom-10 right-0">
        <img className=" w-[200px]" src={spring} />
      </div>

      <div className=" absolute bottom-0 -left-[100px]">
        <img className=" w-[400px]" src={doddle6} />
        <img className=" w-[100px] absolute bottom-20 left-[100px]" src={flower} />
      </div>
    </div>
  );
};

export default Section3;
