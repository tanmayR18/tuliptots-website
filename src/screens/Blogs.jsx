import React from "react";
import { Link } from "react-router";
import image1 from "../assets/blogs/1.avif";
import image2 from "../assets/blogs/2.jpg";
import image3 from "../assets/blogs/3.jpg";
import image4 from "../assets/blogs/4.jpg";
import image5 from "../assets/blogs/5.jpg";
import image6 from "../assets/blogs/6.jpg";
import image7 from "../assets/blogs/7.jpg";
import image8 from "../assets/blogs/8.jpg";
import image9 from "../assets/blogs/9.jpg";
// import image10 from "../assets/blogs/10.jpg";
// import image11 from "../assets/blogs/11.jpg";
// import image12 from "../assets/blogs/12.jpg";

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
      image:
        "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      text: "Why Running, Climbing, and Hanging Are Secret Ingredients for Language Development",
      route: "/blog11",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      text: "How Climbing Builds Early Math Skills: The Secret Link Between Play and Problem-Solving",
      route: "/blog12",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-16 lg:pt-44 px-4 lg:px-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tulip Talks Welcome to Tulip Talks
          </h1>
          <div className="w-24 h-1 bg-pink-400 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            a warm corner of our world where we share stories, reflections,
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
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-3 group-hover:text-pink-600 transition-colors duration-300">
                  {blog.text}
                </h2>
                <div className="mt-4 flex items-center text-sm text-gray-500">
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
