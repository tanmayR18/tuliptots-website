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
      image:
        "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Common/blog1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ29tbW9uL2Jsb2cxLnBuZyIsImlhdCI6MTc1MDU5MTM2NSwiZXhwIjoyMDY1OTUxMzY1fQ.csVZoGS6ipdwzpo0RswhAITU-EJGRAS5KX6uYoTKs2U",
    },
    {
      text: "Building Confidence in Toddlers Before They Start Nursery",
      route: "/blog2",
      image:
        "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Common/blog2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ29tbW9uL2Jsb2cyLnBuZyIsImlhdCI6MTc1MDU5MTQ5MywiZXhwIjoyMDY1OTUxNDkzfQ.-gfT2gay1iCB7cDRwW78vQgvKm4E_yPDSLAdfGTt3QM",
    },
    {
      text: "The Magic of Open-Ended Toys: Why Less Is More in Early Childhood Play",
      route: "/blog3",
      image:
        "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Common/blog3.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ29tbW9uL2Jsb2czLnBuZyIsImlhdCI6MTc1MDU5MTUyNiwiZXhwIjoyMDY1OTUxNTI2fQ.qJMS1b3BeJnISBYoA_5jF14dniUl3_ZhCF2qzLej1wc",
    },
    {
      text: "From Sandbox to Boardroom: How Early Play Builds Leadership Skills",
      route: "/blog4",
      image:
        "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Common/blog4.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ29tbW9uL2Jsb2c0LnBuZyIsImlhdCI6MTc1MDU5MTU0NiwiZXhwIjoyMDY1OTUxNTQ2fQ.ydd4ii9WLwoKBSB1p-rPmA2hiz0S7T3DbQcoxteAcnM",
    },
    {
      text: "Roots Before Branches: Why Emotional Safety Comes Before Academic Success",
      route: "/blog5",
      image:
        "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Common/blog5.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ29tbW9uL2Jsb2c1LnBuZyIsImlhdCI6MTc1MDU5MTU4MCwiZXhwIjoyMDY1OTUxNTgwfQ.phs_b8SrTcJYLwENVrwIO5avmjHCE1xuqPKyaiTSoE4",
    },
    {
      text: "Tiny Scientists: How Messy Play Lays the Foundation for Scientific Thinking",
      route: "/blog6",
      image:
        "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Common/blog6.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ29tbW9uL2Jsb2c2LnBuZyIsImlhdCI6MTc1MDU5MTYwMCwiZXhwIjoyMDY1OTUxNjAwfQ.UU_P-dRbu1t0Nz7NEbgS_TC-VZcMVfyh6TXhK5-DFrU",
    },
    {
      text: "Building Bravery: How Pretend Play Grows Real-World Courage",
      route: "/blog7",
      image:
        "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Common/blog7.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ29tbW9uL2Jsb2c3LnBuZyIsImlhdCI6MTc1MDU5MTYxNiwiZXhwIjoyMDY1OTUxNjE2fQ.iAeBx2Hol3qgDbuvZggN_4clUlnE8C9f3ZWMomJmaQg",
    },
    {
      text: "How Risky Play Builds Safe Decision-Makers: The Surprising Link Between Adventure and Caution",
      route: "/blog8",
      image:
        "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Common/blog8.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ29tbW9uL2Jsb2c4LnBuZyIsImlhdCI6MTc1MDU5MTYzMSwiZXhwIjoyMDY1OTUxNjMxfQ.Su1NGYFpq0OJLbJXmNSn2f5WY4rzztpTw0sgvapMGT8",
    },
    {
      text: "How Free Play Builds Resilience for Life: The Power of Letting Children Lead",
      route: "/blog9",
      image:
        "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Common/blog9.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ29tbW9uL2Jsb2c5LnBuZyIsImlhdCI6MTc1MDU5MTY1MCwiZXhwIjoyMDY1OTUxNjUwfQ.P2skQTs6NvW5VbHu3oUOXNhJIpQ2d-i_JRRmfW0jeIk",
    },
    {
      text: "How Sensory Play Builds Strong Thinkers: Why Messy Hands Lead to Sharp Minds",
      route: "/blog10",
      image:
        "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Common/blog10.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ29tbW9uL2Jsb2cxMC5wbmciLCJpYXQiOjE3NTA1OTE2NjgsImV4cCI6MjA2NTk1MTY2OH0.pm7fQUHc9131_qLAiqmtmZl7W20PqAK0q0E6Pgee2MA",
    },
    {
      text: "Why Running, Climbing, and Hanging Are Secret Ingredients for Language Development",
      route: "/blog11",
      image:
        "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Common/blog11.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ29tbW9uL2Jsb2cxMS5wbmciLCJpYXQiOjE3NTA1OTE3MDMsImV4cCI6MjA2NTk1MTcwM30.aq0St_pL353xGP4_AxZuzbLvYPDUJiT9NoK54RUd51Y",
    },
    {
      text: "How Climbing Builds Early Math Skills: The Secret Link Between Play and Problem-Solving",
      route: "/blog12",
      image:
        "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Common/blog12.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ29tbW9uL2Jsb2cxMi5wbmciLCJpYXQiOjE3NTA1OTE3MjMsImV4cCI6MjA2NTk1MTcyM30.4BXssnzMxIB94ckgFCbO7bJzxNp-ZRK7o1ziMSokMMo",
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
