import React, { useRef, useState } from "react";
import Navbar from "../components/common/Navbar";
import image from "../assets/admission/admission.png";
import { Link } from "react-router";
import {
  Document,
  Image,
  Page,
  PDFDownloadLink,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const Admission = () => {
  return (
    <div className=" bg-[#afe9e4] font-kgPrimaryPenmanship tracking-wide">
      <div className=" relative pb-20 pt-32 lg:pt-44 px-4  flex flex-col justify-center items-center">
        <h1 className=" text-3xl mx-3  md:text-5xl font-semibold text-[#333] tracking-wider  text-center">
          Admissions
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-2"></div>

        <p className="  mt-6 xl:mt-8 text-slate-600 tracking-wider text-xl md:text-2xl leading-6 mx-auto text-center max-w-2xl">
          Admissions are open throughout the year for families who resonate with
          our joyful, child-led approach to early learning.
        </p>
      </div>
      <div className="  bg-white pt-14 pb-32 lg:pb-44 md:pt-20 mt-5  relative">
        <div className="  md:w-[80%] mx-auto">
          <div className=" flex flex-col md:flex-row-reverse md:justify-evenly justify-center items-center gap-5">
            <div className=" md:w-1/2 text-xl lg:text-2xl flex flex-col px-5 md:px-0 gap-3  md:gap-6">
              <p className=" text-2xl  md:text-4xl font-semibold tracking-wide font-patrickHand md:mb-7">
                Here's how to begin:
              </p>
              <p>
                ✻ Reach out to <strong>schedule a meeting</strong> with our team
              </p>
              <p>
                ✻ Explore our unique educational philosophy and thoughtfully
                designed curriculum
              </p>
              <p>
                ✻ Fill in the admission form if it feels like the right fit for
                your family
              </p>
              <p>✻ Join us for an interaction session</p>
              <p>✻ Receive an update on available spots and next steps</p>
            </div>
            <div className=" mt-5 md:mt-0 md:w-1/2 flex justify-center md:justify-start">
              <img className=" w-[70%] aspect-[9/12] rounded-3xl" src={image} />
            </div>
          </div>
        </div>

        <div className=" mt-12 w-[95%] md:w-[80%] mx-auto h-0.5 bg-slate-400" />

        {/* Enquiry Section */}
        <div className="mt-16 md:mt-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#f8e7d5] to-[#f3e8dc] rounded-3xl p-8 md:p-12 shadow-xl  border border-purple-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Have Questions?
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
                  We're here to help! Get in touch with us to learn more about
                  our programs, schedule a visit, or discuss your child's
                  educational journey.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/enquiry"
                  className="group relative overflow-hidden bg-gradient-to-r bg-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  <span className="relative z-10 text-xl tracking-wider">
                    Enquiry Now
                  </span>
                  <svg
                    className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-xl md:text-2xl tracking-wide">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Visit Our Campus
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-600">
                    Schedule a guided tour
                  </p>
                </div>

                <div className="flex flex-col  items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3">
                    <svg
                      className="w-6 h-6 text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Ask Questions
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-600">
                    Get detailed answers
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Begin Journey
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-600">
                    Start admission process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default Admission;
