import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className=" bg-[#333] py-12 md:p-26">
      <div className=" flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-5 text-white text-lg">
        <div>
          <p className=" text-white text-3xl font-semibold px-5 lg:px-0">
            Tuliptots Internation Prep School.
          </p>

          <p className="px-5 lg:px-0 mt-2 text-base">
            Address: Punawala, Pune
          </p>

          <div className=" flex flex-col  mt-5 px-5 lg:px-0">
            <p>tuliptotsinternational@gmail.com</p>
            <p>1234567890</p>
            <div className=" mt-2">
              <a
                target="_blank"
                href="https://www.instagram.com/tuliptotsinternational/"
              >
                <img
                  height={20}
                  width={20}
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className=" mt-8 lg:mt-0 flex flex-row gap-26">
            <div className=" flex flex-col gap-1">
              <p className=" font-bold  mb-5">Important Links</p>
              <Link to={"contactUs"}>
                <p>Home</p>
              </Link>
              <Link to={"contactUs"}>
                <p>About Us</p>
              </Link>
              <Link to={"contactUs"}>
                <p>Contact Us</p>
              </Link>
              <Link to={"contactUs"}>
                <p>Admission</p>
              </Link>
              <Link to={"contactUs"}>
                <p>Blog</p>
              </Link>
            </div>
            <div className=" flex flex-col gap-1">
              <p className=" font-bold  mb-5">Explore</p>
              <Link to={"contactUs"}>
                <p>School</p>
              </Link>
              <Link to={"contactUs"}>
                <p>Enquiry</p>
              </Link>
              <Link to={"contactUs"}>
                <p>Careers</p>
              </Link>
              <Link to={"contactUs"}>
                <p>Gallery</p>
              </Link>
              <Link to={"contactUs"}>
                <p>FAQ</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-0.5 bg-slate-600 my-12" />
      <p className=" text-white text-2xl font-semibold text-center">
        © 2025 All Rights Reserved TulipTots
      </p>
    </div>
  );
};

export default Footer;
