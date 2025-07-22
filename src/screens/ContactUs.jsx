import React, { useEffect, useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

import map from "../assets/common/draftMap3.png";

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "+917558300669"; // Replace with your number
  const message =
    "Hello, I would like more information about Tulip Tots Internationl";
  const encodedMessage = encodeURIComponent(message);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400); // Show after 300px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className=" relative pt-32 lg:pt-44 pb-12 px-4 lg:px-12 bg-[#FAFAFA] font-kgPrimaryPenmanship">
        <h1 className=" text-3xl mx-3  md:text-5xl font-semibold text-[#333] tracking-wider  text-center">
          Need some more discussions?
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-2"></div>

        <p className="  mt-6 xl:mt-8 text-slate-600 tracking-wider text-xl md:text-2xl leading-6 mx-auto text-center max-w-2xl">
          At Tulip Tots International, we embrace an open-door philosophy and
          value every question. If you’d like to know more about our programs,
          philosophy, or admissions, we’re always happy to connect—feel free to
          reach out anytime!
        </p>

        <div className=" mt-16">
          {/* Map and Contact */}
          <div className=" grid lg:grid-cols-2  lg:gap-12">
            <Link
              className=" lg:rounded-[40px] rounded-b-[32px] border-t-white lg:border-t-slate-300 border border-slate-300 overflow-hidden relative order-2 lg:order-1 "
              to={
                "https://www.google.com/maps/search/?api=1&query=18%C2%B037'14.1%22N+73%C2%B044'15.4%22E"
              }
              target="_blank"
            >
              <div className=" w-full h-full ">
                <img className=" w-full h-full aspect-square" src={map} />
              </div>
              <div className=" pb-12 flex items-end justify-center absolute  bottom-0 w-full z-20 bg-linear-to-t h-[30%]  from-[rgba(0,0,0,0.5)] to-transparent">
                <p className=" text-center text-white font-semibold tracking-wider text-lg lg:text-3xl ">
                  Click to see live on Google Map
                </p>
              </div>
            </Link>
            <div className=" bg-white border border-b-white lg:border-b-slate-300 border-slate-300  p-6 order-1 lg:order-2 lg:p-12 rounded-t-[32px] lg:rounded-[40px] ">
              <p className=" font-semibold text-center lg:text-start   text-4xl tracking-wider">
                Contact
              </p>

              <div className=" flex flex-col sm:flex-row gap-8 mt-6 xl:mt-12 justify-evenly items-center sm:items-start">
                <div className=" flex flex-col justify-center items-center w-1/2">
                  <div className=" hidden  bg-blue-100 w-24 h-24 lg:flex justify-center items-center rounded-full">
                    <AiTwotoneMail size={36} />
                  </div>
                  <div className=" flex  bg-blue-100 w-20 h-20 lg:hidden justify-center items-center rounded-full">
                    <AiTwotoneMail size={30} />
                  </div>
                  <p className=" text-xl font-semibold mt-5 tracking-wider">
                    Email Us
                  </p>
                  <p className=" text-slate-700 tracking-wide text-xl">
                    tuliptotsinternational@gmail.com
                  </p>
                </div>

                <div className=" flex flex-col justify-center items-center w-1/2">
                  <div className="  bg-pink-100 w-24 h-24 hidden lg:flex justify-center items-center rounded-full">
                    <IoCallOutline size={36} />
                  </div>
                  <div className="  bg-pink-100 w-20 h-20 flex lg:hidden justify-center items-center rounded-full">
                    <IoCallOutline size={30} />
                  </div>
                  <p className=" text-xl tracking-wider font-semibold mt-5">
                    Call Us
                  </p>

                  <p className=" text-slate-700 tracking-wide text-xl">
                    +91 7558300669
                  </p>
                  <p className=" text-slate-700 tracking-wide text-xl">
                    +91 7558611669
                  </p>
                </div>
              </div>

              <div>
                <div className=" flex items-center gap-3 mt-12 lg:mt-7 xl:mt-14">
                  <IoLocationSharp size={20} />
                  <p className=" text-2xl tracking-wider font-semibold">
                    Address
                  </p>
                </div>
                <p className=" lg:mt-3 text-gray-500 font-semibold text-xl tracking-wide">
                  Shop No 1 & 2, Yash one infinitee, Kate wasti, Punawale, Pune
                  411033
                </p>
              </div>
            </div>
          </div>

          {/* FOllow and Join */}
          <div className=" grid lg:grid-cols-2 gap-12 mt-12">
            <div className=" p-8 lg:p-12 rounded-[40px] bg-[#85e9e5]">
              <p className=" text-black text-2xl md:text-3xl lg:text-4xl tracking-wider font-bold">
                Follow us on
              </p>
              <div className=" mt-5 space-y-4 text-lg md:text-xl lg:text-xl tracking-wider text-[#333333]">
                <Link
                  to={"https://www.instagram.com/tuliptotsinternational/"}
                  className=" flex items-center gap-4 group"
                  target="_blank"
                >
                  <div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.instagram.com/tuliptotsinternational/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" h-11 w-11 text-black flex justify-center items-center group-hover:text-white border border-black group-hover:border-pink-600 group-hover:bg-pink-600  rounded-full transition-all duration-300 "
                  >
                    <FaInstagram size={24} />
                  </div>
                  <p className="  group-hover:text-pink-600 transition-all duration-300">
                    tuliptotsinternational
                  </p>
                </Link>
                <Link
                  to={
                    "https://www.facebook.com/profile.php?id=61577004178106&rdid=ldZ4ru8rKpLpv0zY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1P6xWooKrH%2F#"
                  }
                  className=" flex items-center gap-4 group"
                  target="_blank"
                >
                  <div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.facebook.com/profile.php?id=61577004178106&rdid=ldZ4ru8rKpLpv0zY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1P6xWooKrH%2F#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" h-11 w-11 text-black flex justify-center items-center group-hover:text-white border border-black group-hover:border-blue-600 group-hover:bg-blue-600  rounded-full transition-all duration-300 "
                  >
                    <FaFacebookSquare size={22} />
                  </div>
                  <p className="  group-hover:text-blue-600 transition-all duration-300">
                    Tulip Tots
                  </p>
                </Link>
                <Link
                  to={"https://www.youtube.com/@tuliptotsinternational"}
                  className=" flex items-center gap-4 group"
                  target="_blank"
                >
                  <div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.youtube.com/@tuliptotsinternational"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" h-11 w-11 text-black flex justify-center items-center group-hover:text-white transition-all duration-300 border border-black group-hover:border-red-600 group-hover:bg-red-600  rounded-full  "
                  >
                    <FiYoutube size={22} />
                  </div>
                  <p className=" group-hover:text-red-600 transition-all duration-300">
                    Tulip Tots International
                  </p>
                </Link>
              </div>
            </div>
            <div className=" p-10 lg:p-12 rounded-[40px] bg-green-300">
              <p className=" text-black text-2xl md:text-3xl lg:text-4xl tracking-wider font-bold">
                Join Our Team
              </p>

              <p className=" mt-5 text-lg md:text-xl lg:text-xl tracking-wider">
                At Tulip Tots International, we’re more than a school — we’re a
                family of passionate educators. If you’re ready to inspire young
                minds and grow your career, we’d love to hear from you!
              </p>

              {/* <p className=" mt-3">tuliptotsinternational@gmail.com</p> */}

              <Link to={"/careers"}>
                <button className=" bg-red-400 px-4 cursor-pointer py-3 rounded-xl mt-5">
                  <p className=" text-white  tracking-wider">Apply Now</p>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <a
          href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`fixed bottom-5 right-5 animate-pulse cursor-pointer transition-all ${
            isVisible && "-translate-y-20"
          }`}
        >
          <div className="group z-20">
            <div className=" z-30 bg-green-600 relative text-white w-14 h-14 flex justify-center items-center rounded-full ">
              <FaWhatsapp size={27} />
            </div>
            <div className=" z-20 absolute tracking-wider top-1/2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-800 -translate-y-1/2 right-20 py-2 rounded-2xl bg-white text-[#333] font-semibold w-32 text-center">
              <p>What's app</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default ContactUs;
