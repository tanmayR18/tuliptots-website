import Footer from "@/components/common/Footer";
import React from "react";

const data = [
  {
    title: "Furniture-Free, Open Layout",
    points: [
      "We embrace a wide-open layout that encourages free movement, creativity, and natural exploration",
      "Floor-based learning promotes healthy posture, sensory integration, and body awareness, allowing children to feel connected to the space around them.",
    ],
    bgColor: "#007BFF",
  },
  {
    title: "Climb, Slide, Swing, Explore",
    points: [
      "Our climbing frames, swings, and balance boards are designed to build strength, courage, and coordination.",
      "These versatile setups transform into bridges, ramps, tunnels—whatever a child imagines in the moment.",
    ],
    bgColor: "#FF5722",
  },
  {
    title: "Build Big, Dream Bigger",
    points: [
      "With life-size building tools, children become the architects of their imagination—constructing walk-in forts, towers, and creative structures they can play inside, rebuild, and reimagine.",
      "This kind of large-scale construction play enhances gross motor development, spatial awareness, collaboration, and confidence—proving that big ideas deserve big spaces",
    ],
    bgColor: "#1ABC9C",
  },
  {
    title: "Endless Play Possibilities",
    points: [
      "Our flexible play tools and modular furniture can be reimagined daily into obstacle courses, story stages, hideouts, or quiet corners—shaped entirely by the evolving interests of curious young minds.",
      "These dynamic spaces support both active movement and deep focus, blending gross motor development with imaginative storytelling and teamwork.",
    ],
    bgColor: "#E74C3C",
  },
  {
    title: "Vertical and Hands-On Learning Walls",
    points: [
      "With over 12+ interactive wall zones, children explore a world of movement, magnets, puzzles, gears, and visual challenges—designed to develop fine motor skills, spatial logic, and creative confidence.",
      "Magnetic walls, vertical drawing boards, and logic-based puzzles engage both body and brain—making learning truly multi-sensory and fun.",
    ],
    bgColor: "#6610f2",
  },
  {
    title: "Calm Corners and Cozy Nooks",
    points: [
      "Soft spaces like the Nugget couch and cozy reading nooks encourage mindfulness, bonding, and emotional regulation, creating a calming balance to active play",
      "Thoughtfully designed calm corners offer emotional safety, sensory support, and space for quiet reflection or reset—because feeling secure is the foundation of learning.",
    ],
    bgColor: "#e91e63",
  },
  {
    title: "Montessori-Inspired Self-Access Areas",
    points: [
      "Open shelves filled with rotating toys, games, and hands-on materials invite children to make independent choices and engage in purposeful play",
      "Every material is child-chosen, child-used, and child-loved, empowering children to lead their learning journey with joy and confidence.",
    ],
    bgColor: "#00BCD4",
  },
];

const Card = ({ title, points, bgColor }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className=" p-5 rounded-3xl">
      <p className=" text-2xl font-bold text-center text-white">{title}</p>

      <div className=" border-t border-dashed my-5" />

      <div className="">
        {points.map((item, index) => (
          <li className=" mt-1 text-base text-white font-semibold" key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
};

const Classroom = () => {
  return (
    <div className=" pt-32 lg:pt-44 px-5 bg-[#f7eee9]">
      <p className=" text-black font-bold md:text-center text-3xl tracking-wide">
        A Living, Breathing Classroom
      </p>

      <p className=" md:w-10/12 mx-auto mt-8 text-lg text-slate-700 font-semibold md:text-center">
        At Tulip Tots International, we believe the environment is the third
        teacher—a space designed not just to house, but to move, grow, and play
        alongside your child. Every element of our classroom invites
        imagination, independence, and holistic development, fostering a dynamic
        and flexible learning environment.
      </p>

      <div className=" my-16  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            points={item.points}
            bgColor={item.bgColor}
          />
        ))}
      </div>

      <Footer/>
    </div>
  );
};

export default Classroom;
