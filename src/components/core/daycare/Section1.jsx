import React from "react";
import image1 from "../../../assets/daycare/daycare1.png";

import doddle1 from "../../../assets/daycare/elements/doddle1.png";
import flower3 from "../../../assets/daycare/elements/flower3.png";
import hearts from "../../../assets/daycare/elements/hearts.png";
import smile from "../../../assets/daycare/elements/smile.png";
import cloud from "../../../assets/daycare/elements/cloud.png";
import doddle4 from "../../../assets/daycare/elements/doddle4.png";

const Section1 = () => {
  return (
    <div className=" relative z-20">
      <div className=" relative font-kgPrimaryPenmanship z-20 flex justify-center  items-center gap-32 pb-20 w-10/12 mx-auto">
        <div className=" w-[40%]">
          <img src={image1} />
        </div>

        <div className=" flex flex-col justify-center items-center">
          <div className=" z-20 relative">
            <p className=" text-[#323a30] text-8xl text-center font-extrabold tracking-[10px] font-happy">
              Tulip <br /> Nest
            </p>
            <img src={smile} className=" absolute w-[120px] h-[120px] -top-[100px] -left-[150px] z-10" />
            <img src={hearts} className=" absolute w-[120px] h-[120px] -top-[120px] left-[100px] z-10" />
            <img src={cloud} className=" absolute  h-[100px] top-[40px] -right-[200px] z-10" />
            <img src={doddle4} className=" absolute  h-[140px] -bottom-[120px] -right-[250px] z-10" />

          </div>

          <div className=" bg-[#f69222] px-16 py-2 rounded-3xl mt-4">
            <p className="text-[#323a30] font-semibold text-3xl tracking-wider ">
              A Home Away From Home
            </p>
          </div>

          <p className=" text-3xl mt-5 text-center">
            A Gentle Day Care by <br /> Tulip Tots international
          </p>
        </div>
      </div>

      <img src={doddle1} className=" absolute top-0 z-10" />
      <img
        src={flower3}
        className=" absolute bottom-0 right-0 z-10 h-[240px]"
      />
    </div>
  );
};

export default Section1;
