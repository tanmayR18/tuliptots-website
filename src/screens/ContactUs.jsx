import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Footer from "@/components/common/Footer";

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
              className=" lg:rounded-[64px] overflow-hidden relative order-2 lg:order-1 "
              to={"https://www.google.com/maps?q=37.7749,-122.4194"}
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
            <div className=" bg-white  p-6 order-1 lg:order-2 lg:p-12 rounded-t-[32px] lg:rounded-[64px] ">
              <p className=" font-semibold text-xl tracking-wide">Contact</p>
              <p className="  mt-2 text-slate-600">
                We at IGPS believe in an open-door policy and are happy to
                respond to any queries. Should you have any questions, feel free
                to get in touch and we will be happy to respond!
              </p>
              <div className=" flex gap-8 mt-6 justify-evenly items-center">
                <div className=" flex flex-col justify-center items-center">
                  <div className="  bg-blue-100 w-24 h-24 flex justify-center items-center rounded-full">
                    <AiTwotoneMail size={36} />
                  </div>
                  <p className=" text-lg font-semibold mt-5">Email Us</p>
                  <p className=" text-slate-700">info@ikigaiglobal.in</p>
                </div>

                <div className=" flex flex-col justify-center items-center">
                  <div className="  bg-pink-100 w-24 h-24 flex justify-center items-center rounded-full">
                    <IoCallOutline size={36} />
                  </div>
                  <p className=" text-lg font-semibold mt-5">Call Us</p>
                  <p className=" text-slate-700">+91 93264 46240</p>
                </div>
              </div>

              <div>
                <div className=" flex items-center gap-3 mt-7">
                  <IoLocationSharp size={20} />
                  <p className=" text-xl font-semibold">Address</p>
                </div>
                <p className=" mt-3 text-gray-500 font-semibold tracking-wide">
                  Ikigai Global Prep School, 101- 71, Raintree 71, Rd Number 2,
                  Dadar East, Dadar, Mumbai, Maharashtra 400014
                </p>
              </div>
            </div>
          </div>

          {/* FOllow and Join */}
          <div className=" grid lg:grid-cols-2 gap-12 mt-12 px-4">
            <div className=" p-10 lg:p-12 rounded-[64px] bg-[#FED7AA]">
              <p className=" text-black text-lg lg:text-3xl tracking-wide font-bold">
                Follow us on
              </p>
              <div className=" mt-5">
                <Link to={"#"} className=" flex items-center gap-4">
                  <div className="">
                    <img
                      height={30}
                      width={30}
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    />
                  </div>
                  <p className=" lg:text-lg text-white font-semibold">
                    tuliptots something
                  </p>
                </Link>
                <Link to={"#"} className=" mt-4 flex items-center gap-4">
                  <div className="">
                    <img
                      height={30}
                      width={30}
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    />
                  </div>
                  <p className=" lg:text-lg text-white font-semibold">
                    tuliptots something
                  </p>
                </Link>
                <Link to={"#"} className=" mt-4 flex items-center gap-4">
                  <div className="">
                    <img
                      height={30}
                      width={30}
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    />
                  </div>
                  <p className=" lg:text-lg text-white font-semibold">
                    tuliptots something
                  </p>
                </Link>
                <Link to={"#"} className=" mt-4 flex items-center gap-4">
                  <div className="">
                    <img
                      height={30}
                      width={30}
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    />
                  </div>
                  <p className=" lg:text-lg text-white font-semibold">
                    tuliptots something
                  </p>
                </Link>
              </div>
            </div>
            <div className=" p-10 lg:p-12 rounded-[64px] bg-green-300">
              <p className=" text-black text-lg lg:text-3xl tracking-wide font-bold">
                Join Our Team ?
              </p>

              <p className=" mt-5">
                Be a part of TulipTots International School, where passion meets
                purpose and every day is a step toward shaping young minds.
              </p>

              <p className=" mt-3">somethin@gmail.com</p>

              <Link to={"/careers"}>
                <button className=" bg-red-400 px-4 cursor-pointer py-3 rounded-xl mt-5">
                  <p className=" text-white font-semibold">Apply Now</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
