import React from "react";
import { Link } from "react-router";

import image1 from "../assets/blog/blog1.png";
import image2 from "../assets/blog/blog2.png";
import image3 from "../assets/blog/blog3.png";
import image4 from "../assets/blog/blog4.png";
import image5 from "../assets/blog/blog5.png";
import image6 from "../assets/blog/blog6.png";
import image7 from "../assets/blog/blog7.png";
import image8 from "../assets/blog/blog8.png";
import image9 from "../assets/blog/blog9.png";
import image10 from "../assets/blog/blog10.png";
import image11 from "../assets/blog/blog11.png";
import image12 from "../assets/blog/blog12.png";

const Blogs = () => {
  const blogs = [
    {
      text: "Transitioning from Home to Playgroup: How to Make It Smooth and Happy",
      route: "/blog1",
      image: image1,
    },
    {
      text: "Building Confidence in Toddlers Before They Start Nursery",
      route: "/blog2",
      image: image2,
    },
    {
      text: "The Magic of Open-Ended Toys: Why Less Is More in Early Childhood Play",
      route: "/blog3",
      image: image3,
    },
    {
      text: "From Sandbox to Boardroom: How Early Play Builds Leadership Skills",
      route: "/blog4",
      image: image4,
    },
    {
      text: "Roots Before Branches: Why Emotional Safety Comes Before Academic Success",
      route: "/blog5",
      image: image5,
    },
    {
      text: "Tiny Scientists: How Messy Play Lays the Foundation for Scientific Thinking",
      route: "/blog6",
      image: image6,
    },
    {
      text: "Building Bravery: How Pretend Play Grows Real-World Courage",
      route: "/blog7",
      image: image7,
    },
    {
      text: "How Risky Play Builds Safe Decision-Makers: The Surprising Link Between Adventure and Caution",
      route: "/blog8",
      image: image8,
    },
    {
      text: "How Free Play Builds Resilience for Life: The Power of Letting Children Lead",
      route: "/blog9",
      image: image9,
    },
    {
      text: "How Sensory Play Builds Strong Thinkers: Why Messy Hands Lead to Sharp Minds",
      route: "/blog10",
      image: image10,
    },
    {
      text: "Why Running, Climbing, and Hanging Are Secret Ingredients for Language Development",
      route: "/blog11",
      image: image11,
    },
    {
      text: "How Climbing Builds Early Math Skills: The Secret Link Between Play and Problem-Solving",
      route: "/blog12",
      image: image12,
    },
  ];

  return (
    <div className="min-h-screen font-kgPrimaryPenmanship bg-[#fafafa] py-16 pt-32 lg:pt-44 px-4 lg:px-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl tracking-[3px] md:text-6xl font-semibold  text-[#333] mb-4">
            Welcome to Tulip Talks
          </h1>
          <div className="w-24 h-1 bg-pink-400 rounded-full mx-auto mb-6"></div>
          <p className="text-2xl  text-gray-600 max-w-2xl mx-auto ">
            A warm corner of our world where we share stories, reflections,
            ideas, and gentle guidance for parents walking alongside their
            little ones. From classroom moments to parenting insights, this
            space is a celebration of the beautiful journey we’re all
            on—together
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link
              to={blog.route}
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  src={blog.image}
                  alt={blog.text}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl md:text-2xl tracking-widest md:tracking-wide  font-semibold text-gray-800 line-clamp-3 group-hover:text-pink-600 transition-colors duration-300">
                  {blog.text}
                </h2>
                <div className="mt-4 flex items-center text-base text-gray-500">
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
