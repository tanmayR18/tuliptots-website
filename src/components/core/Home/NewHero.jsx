import React from "react";
import doddle2 from "../../../assets/elements/doddle2.png";
import doddle3 from "../../../assets/elements/doddle3.png";
import doddle11 from "../../../assets/elements/doddle11.png";
import doddle8 from "../../../assets/elements/doddle8.png";
import hearts from "../../../assets/elements/hearts.png";
import cloud from "../../../assets/elements/cloud.png";
import leaves from "../../../assets/elements/leaves.png";
import flower5 from "../../../assets/elements/flower5.png";

const NewHero = () => {
  return (
    <div className="pb-12 overflow-hidden min-h-screen relative bg-linear-to-br from-blue-300 to-blue-100  overflow-x-hidden pt-32 lg:pt-44">
      <img
        src={doddle2}
        className=" absolute -bottom-[100px] -left-[100px] w-[400px]"
      />
      <div className=" absolute -bottom-5 right-0">
        {/* <img className=" w-[200px]" src={doddle3} /> */}
        <img src={leaves} className=" w-[250px]" />
      </div>
      <img src={cloud} className=" w-[130px] absolute top-1/2 -translate-y-1/2 right-10 " />



      <div className=" absolute -top-10 -right-24 ">
        <img className=" w-[250px] rotate-90" src={doddle11} />
        <img src={hearts} className=" absolute bottom-6 left-0 w-[100px]" />
      </div>

      <div className=" absolute -top-16 -left-24">
        <img className=" w-[350px] rotate-[120deg]" src={doddle8} />
      </div>
      <div className="w-10/12 mx-auto ">
        <div className="  flex justify-end">
          <div className=" relative flex flex-col  items-center -translate-x-1/4">
            <img src={flower5} className=" absolute -top-5 -left-20 w-[100px]" />
            <p className=" font-happy font-semibold text-[#323a30] text-center text-6xl tracking-[3px]">
              Tulip tots <br /> International
            </p>

            <div className=" bg-[#f69222] py-3 px-14 rounded-[32px] mt-3">
              <p className=" text-[#323a30] font-semibold text-xl ">
                Where little minds BLOOM
              </p>
            </div>

            <p className=" text-[#bb4207] text-center font-semibold text-lg mt-5">
              Preschool - Daycare - Children’s Library - Activity Centre
            </p>

            <p className="text-[#323a30] max-w-md text-center text-lg font-semibold mt-5">
              Rooted in love and led by research, Tulip Tots International is a
              thoughtfully designed early learning space where every child’s
              wonder is honored, voices are heard, and play leads the way—gently
              shaping confident global citizens for the 21st century.
            </p>
          </div>
        </div>
        <img
          className=" h-[calc(100vh-140px)]  absolute bottom-0"
          src="https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Home/homepage1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvSG9tZS9ob21lcGFnZTEucG5nIiwiaWF0IjoxNzUxMjIwNzYwLCJleHAiOjE3ODI3NTY3NjB9.ZHkSQvoeRw_nDU0v6_zcgD0lHRAfO1C7w-WPxRh8RDI"
        />
      </div>
    </div>
  );
};

export default NewHero;
