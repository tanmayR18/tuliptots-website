import React, { useState } from "react";
import Navbar from "../components/common/Navbar";

const Enquiry = () => {
  return (
    <div className=" pb-[400px]">
      <div className=" relative h-[60vh] w-full flex flex-col justify-center items-center">
        <div className=" absolute top-0 bottom-0 left-0 right-0 ">
          <img
            className=" w-full h-full"
            src="https://www.humanium.org/en/wp-content/uploads/2020/02/pic5-830x554.jpg"
          />
        </div>
        <div className=" absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.75)]" />
        <div className=" absolute top-0 right-0 left-0 bottom-0">
          <Navbar />
        </div>
        <p className=" text-white font-semibold text-4xl z-10">
          Come Experience the Bloom
        </p>
        <p className=" text-white font-semibold text-2xl z-10 mt-7">
          Let us show you around and answer your questions.
        </p>
      </div>
      <form className=" flex">
        <div>
          <p className=" text-black font-semibold text-2xl">Details</p>

          <div>
            <p>Name of the Child</p>
            <input className="glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100" />
          </div>
          <div>
            <p>Date of Birth</p>
            <input
              type="date"
              className="glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
            />
          </div>
          <div>
            <p>Parents Name</p>
            <input className="glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100" />
          </div>
          <div>
            <p>Occupation</p>
            <input className="glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100" />
          </div>
        </div>
        <div>
          <p className=" text-black font-semibold text-2xl">Contact Details</p>

          <div>
            <p>Email</p>
            <input className="glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100" />
          </div>
          <div>
            <p>Contact Number</p>
            <input
              maxLength={10}
              className="glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
            />
          </div>
          <div>
            <p>Address</p>
            <input className="glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100" />
          </div>
          <DropDown />
          <div>
            <p>Message / Questions</p>
            <textarea className="glowing-border resize-none rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100" />
          </div>
        </div>
      </form>
    </div>
  );
};

const DropDown = () => {
  return (
    <div className=" relative">
      <p>Select Program</p>
      <select className=" focus:outline-none w-full" name="program" id="program">
        <option value="Playgroup">Playgroup{' '}</option>
        <option value="Nursery">Nursery</option>
        <option value="LKG">LKG</option>
        <option value="UKG">UKG</option>
        <option value="Daycare">Daycare</option>
      </select>
    </div>
  );
};

export default Enquiry;
