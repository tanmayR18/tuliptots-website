import React from "react";

const data = [
  {
    title: "Initial Skill Assessment",
    text: "Helps us understand your child’s starting point so we can design learning experiences that meet their needs",
    bgColor: "#E97451",
  },
  {
    title: "Monthly Evaluations",
    text: "Quiet, ongoing observations that help us notice areas of strength and spaces that may need more encouragement",
    bgColor: "#3BA99C",
  },
  {
    title: "Annual Reports",
    text: "A warm reflection on your child’s growth, highlighting progress across the year in multiple domains.",
    bgColor: "#8073A3",
  },
];

const Assessment = () => {
  return (
    <div className=" mt-16">
      <p className=" text-3xl font-bold text-slate-700 text-center">
        Continuous Assessment: Nurturing Individual Growth
      </p>

      <div className=" grid grid-cols-3 mt-12 gap-8 max-w-5xl mx-auto">
        {data.map((item) => (
          <div
            style={{ backgroundColor: item.bgColor }}
            className=" flex justify-center items-center aspect-square cursor-pointer rounded-2xl relative group overflow-hidden"
            key={item.title}
          >
            <p className=" text-white text-2xl font-semibold text-center ">
              {item.title}
            </p>
            <div className=" flex justify-center items-center p-5 absolute top-0 right-0 left-0 bottom-0 group-hover:translate-y-5 translate-y-full transition-all duration-500 bg-slate-700 rounded-t-2xl">
              <p className=" text-white text-lg font-semibold text-center -translate-y-5">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="max-w-5xl mx-auto mt-6 font-semibold text-lg text-gray-700 ">
        Our assessments are{" "}
        <strong>child-friendly, observational, and play-based,</strong>
        ensuring your child never feels tested—only seen, supported, and
        celebrated.We use these insights to nurture, not to judge. Development
        in the early years is not a race, and children grow beautifully in their
        own time. These assessments help us gently guide them, with love and
        intention, wherever they are on their path
      </p>
    </div>
  );
};

export default Assessment;
