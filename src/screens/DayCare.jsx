import Section1 from "@/components/core/daycare/Section1";
import Section2 from "@/components/core/daycare/Section2";
import Section3 from "@/components/core/daycare/Section3";
import Section4 from "@/components/core/daycare/Section4";
import Section5 from "@/components/core/daycare/Section5";
import React from "react";

const DayCare = () => {
  return (
    <div className="pt-44 md:pt-26 bg-[#afe9e4]">
      <Section1 />
      <Section2 />
      <Section5 />
      <Section4 />
      <Section3 />
    </div>
  );
};

export default DayCare;
