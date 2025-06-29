import React from "react";
import image1 from "../../../assets/about/mission/1.png";
import image2 from "../../../assets/about/mission/2.png";
import image3 from "../../../assets/about/mission/3.png";
import image4 from "../../../assets/about/mission/4.png";
import { Rocket } from "lucide-react";

const Mission = () => {
  return (
    <div className=" bg-[#ccebfa] p-5 md:p-8 lg:p-12 flex   items-center lg:gap-8 rounded-4xl">
      <div className="">
        <div>
          <div className=" flex items-center justify-center gap-2">
            <img className=" w-12 h-12" src="https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/About/mission.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQWJvdXQvbWlzc2lvbi5wbmciLCJpYXQiOjE3NTEyMDkzOTAsImV4cCI6MTc4Mjc0NTM5MH0.PTfnPWcYjhj8tqT_akUDRk9c0cqQTV0EqrX-s1W5DmU" />
            <p className=" text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center">
              MISSION
            </p>
          </div>
          <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 lg:mt-12">
            <div className=" flex flex-col items-center">
              <img className=" h-44 w-44 rounded-full" src={image1} />
              <p className=" mt-3 text-center leading-5 tracking-wide text-lg font-bold text-slate-600">
                Nurturing play <br /> based <br /> environment
              </p>
            </div>
            <div className=" flex flex-col items-center">
              <img className=" h-44 w-44 rounded-full" src={image2} />
              <p className=" mt-3 text-center leading-5 tracking-wide text-lg font-bold text-slate-600">
                Supporting <br /> Natural <br />
                Development
              </p>
            </div>
            <div className=" flex flex-col items-center">
              <img className=" h-44 w-44 rounded-full" src={image4} />
              <p className=" mt-3 text-center leading-5 tracking-wide text-lg font-bold text-slate-600">
                Freedom to explore, <br />
                discover, and <br /> express themselves
              </p>
            </div>
            <div className=" flex flex-col items-center">
              <img className=" h-44 w-44 rounded-full" src={image3} />
              <p className=" mt-3 text-center leading-5 tracking-wide text-lg font-bold text-slate-600">
                Innovation, <br /> researched global <br /> practices
              </p>
            </div>
          </div>
          <div className=" h-full flex justify-center items-center">
            <p className=" mt-16 text-xl font-semibold text-center">
              Our mission is to create a nurturing environment where every child
              feels safe, cherished, and inspired to explore. At Tulip Tots
              International, we foster a joyful learning atmosphere, where
              children are encouraged to follow their natural curiosity and grow
              at their own pace. We focus on meaningful play and strong
              relationships, ensuring that each child blossoms with confidence,
              creativity, and joy, embracing the endless possibilities of their
              early years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
