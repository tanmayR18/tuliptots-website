import React from "react";
import { Link } from "react-router";

const Blogs = () => {
  const blogs = [
    {
      text: "Transitioning from Home to Playgroup: How to Make It Smooth and Happy",
      route: "/blog1",
    },
    {
      text: "Building Confidence in Toddlers Before They Start Nursery",
      route: "/blog2",
    },
    {
      text: "The Magic of Open-Ended Toys: Why Less Is More in Early Childhood Play",
      route: "/blog3",
    },
    {
      text: "From Sandbox to Boardroom: How Early Play Builds Leadership Skills",
      route: "/blog4",
    },
    {
      text: "Roots Before Branches: Why Emotional Safety Comes Before Academic Success",
      route: "/blog5",
    },
    {
      text: "Tiny Scientists: How Messy Play Lays the Foundation for Scientific Thinking",
      route: "/blog6",
    },
    {
      text: "Building Bravery: How Pretend Play Grows Real-World Courage",
      route: "/blog7",
    },
    {
      text: "How Risky Play Builds Safe Decision-Makers: The Surprising Link Between Adventure and Caution",
      route: "/blog8",
    },
    {
      text: "How Free Play Builds Resilience for Life: The Power of Letting Children Lead",
      route: "/blog9",
    },

    {
      text: "How Sensory Play Builds Strong Thinkers: Why Messy Hands Lead to Sharp Minds",
      route: "/blog10",
    },
    {
      text: "Why Running, Climbing, and Hanging Are Secret Ingredients for Language Development",
      route: "/blog11",
    },
    {
      text: "How Climbing Builds Early Math Skills: The Secret Link Between Play and Problem-Solving",
      route: "/blog12",
    },
  ];

  return (
    <div className=" bg-blue-50 min-h-screen py-12 lg:px-12 px-4">
      <h1 className=" text-3xl font-bold text-black text-center">Blogs</h1>
      <p className=" font-semibold text-center mt-8">
        Welcome to the Blogs section. Here you will find various articles and
        updates.
      </p>
      {/* Blogs */}
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
        {blogs.map((blog, index) => (
          <Link
            to={blog.route}
            key={index}
            className=" bg-purple-900 p-3 rounded-2xl "
          >
            <img
              className=" w-full h-80 rounded-xl"
              src="https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            />
            <h2 className=" text-white text-md font-bold p-4">
              {blog.text.length > 85
                ? blog.text.slice(0, 83) + "..."
                : blog.text}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
