import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const ContactUs = () => {
  return (
    <>
      <div className=" pt-44 pb-12 lg:px-12 bg-[#f7eee9]">
        <h1 className=" text-2xl mx-3 lg:text-3xl tracking-wide font-bold text-center">
          Need some more discussions ?
        </h1>
        <div className=" mt-16">
          {/* Map and Contact */}
          <div className=" grid lg:grid-cols-2  gap-12">
            <Link
              className=" lg:rounded-[40px] overflow-hidden relative order-2 lg:order-1 "
              to={
                "https://www.google.com/maps/search/?api=1&query=Punewala,+Pune"
              }
              target="_blank"
            >
              <div className=" w-full h-full border-2 ">
                <img
                  className=" w-full h-full aspect-square border-2"
                  src="https://miro.medium.com/v2/resize:fit:1400/1*qYUvh-EtES8dtgKiBRiLsA.png"
                />
              </div>
              <div className=" pb-12 flex items-end justify-center absolute  bottom-0 w-full z-20 bg-linear-to-t h-[30%]  from-[rgba(0,0,0,0.5)] to-transparent">
                <p className=" text-center text-white font-bold text-lg lg:text-2xl">
                  Click to see live on Google Map
                </p>
              </div>
            </Link>
            <div className=" bg-white  p-6 order-1 lg:order-2 lg:p-12 rounded-t-[32px] lg:rounded-[40px] ">
              <p className=" font-semibold text-xl xl:text-2xl tracking-wide">
                Contact
              </p>
              <p className="  mt-2 xl:mt-8 text-slate-600">
                At Tulip Tots Preschool, we embrace an open-door philosophy and
                value every question. If you’d like to know more about our
                programs, philosophy, or admissions, we’re always happy to
                connect—feel free to reach out anytime!
              </p>
              <div className=" flex flex-col sm:flex-row gap-8 mt-6 xl:mt-12 justify-evenly items-center">
                <div className=" flex flex-col justify-center items-center w-1/2">
                  <div className=" hidden  bg-blue-100 w-24 h-24 lg:flex justify-center items-center rounded-full">
                    <AiTwotoneMail size={36} />
                  </div>
                  <div className=" flex  bg-blue-100 w-20 h-20 lg:hidden justify-center items-center rounded-full">
                    <AiTwotoneMail size={30} />
                  </div>
                  <p className=" text-lg font-semibold mt-5">Email Us</p>
                  <p className=" text-slate-700">
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
                  <p className=" text-lg font-semibold mt-5">Call Us</p>
                  <p className=" text-slate-700">+91 93264 46240</p>
                </div>
              </div>

              <div>
                <div className=" flex items-center gap-3 mt-12 lg:mt-7 xl:mt-14">
                  <IoLocationSharp size={20} />
                  <p className=" text-xl font-semibold">Address</p>
                </div>
                <p className=" mt-3 text-gray-500 font-semibold tracking-wide">
                  Punawala, Pune
                </p>
              </div>
            </div>
          </div>

          {/* FOllow and Join */}
          <div className=" grid lg:grid-cols-2 gap-12 mt-12 px-4">
            <div className=" p-10 lg:p-12 rounded-[40px] bg-[#FED7AA]">
              <p className=" text-black text-lg lg:text-3xl tracking-wide font-bold">
                Follow us on
              </p>
              <div className=" mt-5 space-y-4">
                <Link
                  to={"https://www.instagram.com/tuliptotsinternational/"}
                  className=" flex items-center gap-4"
                >
                  <div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.instagram.com/tuliptotsinternational/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" h-12 w-12 text-white flex justify-center items-center hover:text-black border border-white hover:bg-white  rounded-full  "
                  >
                    <FaInstagram size={26} />
                  </div>
                  <p className=" lg:text-lg text-white font-semibold">
                    tuliptotsinternational
                  </p>
                </Link>
                <Link
                  to={
                    "https://www.facebook.com/profile.php?id=61577004178106&rdid=ldZ4ru8rKpLpv0zY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1P6xWooKrH%2F#"
                  }
                  className=" flex items-center gap-4"
                >
                  <div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.facebook.com/profile.php?id=61577004178106&rdid=ldZ4ru8rKpLpv0zY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1P6xWooKrH%2F#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" h-12 w-12 text-white flex justify-center items-center hover:text-black border border-white hover:bg-white  rounded-full  "
                  >
                    <FaFacebookSquare size={24} />
                  </div>
                  <p className=" lg:text-lg text-white font-semibold">
                    tuliptotsinternational
                  </p>
                </Link>
                <Link
                  to={"https://www.youtube.com/@tuliptotsinternational"}
                  className=" flex items-center gap-4"
                >
                  <div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.youtube.com/@tuliptotsinternational"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" h-12 w-12 text-white flex justify-center items-center hover:text-black border border-white hover:bg-white  rounded-full  "
                  >
                    <FiYoutube size={24} />
                  </div>
                  <p className=" lg:text-lg text-white font-semibold">
                    tuliptotsinternational
                  </p>
                </Link>
              </div>
            </div>
            <div className=" p-10 lg:p-12 rounded-[40px] bg-green-300">
              <p className=" text-black text-lg lg:text-3xl tracking-wide font-bold">
                Join Our Team
              </p>

              <p className=" mt-5">
                At Tulip Tots Preschool, we’re more than a school — we’re a
                family of passionate educators. If you’re ready to inspire young
                minds and grow your career, we’d love to hear from you!
              </p>

              {/* <p className=" mt-3">tuliptotsinternational@gmail.com</p> */}

              <Link to={"/careers"}>
                <button className=" bg-red-400 px-4 cursor-pointer py-3 rounded-xl mt-5">
                  <p className=" text-white font-semibold">Apply Now</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
