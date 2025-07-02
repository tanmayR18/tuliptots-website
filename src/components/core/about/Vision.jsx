import React from "react";

const Vision = () => {
  return (
    <div className=" bg-amber-200 p-5 sm:p-8 md:p-12 flex flex-col  items-center md:gap-8 rounded-4xl">
      <div className=" flex items-center justify-center gap-2">
        <img
          className=" w-12 h-12"
          src="https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/About/vission.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQWJvdXQvdmlzc2lvbi5wbmciLCJpYXQiOjE3NTEyMDk2NDQsImV4cCI6MTc4Mjc0NTY0NH0.K5SRc72P-ctFI_bV_sjFXrLEtLaVJa9ARqcJj81iUdQ"
        />
        <p className=" text-3xl lg:text-4xl font-bold text-black text-center">
          OUR VISION
        </p>
      </div>
      <p className="  leading-6 tracking-wide text-xl xl:text-2xl text-slate-800  font-semibold text-center">
        At Tulip Tots International, we envision a world where every child
        blossoms with curiosity, confidence, and creativity. Inspired by the
        symbolism of the tulip, we aim to cultivate growth, beauty, and
        resilience in every child. Through a play-based, international approach,
        we prepare children to become global citizens who are grounded in strong
        values and bloom with innovative ideas that impact the world.
      </p>
    </div>
  );
};

export default Vision;
