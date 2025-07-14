import React from "react";
import { NavLink } from "react-router";
import { motion, useInView } from "framer-motion";
import image from "../../../assets/home/homeCta.jpg";

const CTA = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <div className="h-[90vh] w-full relative flex items-end " ref={ref}>
        <motion.div
        //   initial={{ opacity: 0, scale: 1 }}
        //   animate={
        //     isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1 }
        //   }
        //   transition={{ duration: 1 }}
        >
          <video
            className=" w-screen h-full absolute top-0 left-0 right-0 bottom-0 object-cover"
            // controls
            loop
            autoPlay
            muted
            controlsList="nodownload"
            disablePictureInPicture
          >
            <source
              src={
                "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Home/homeLast.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvSG9tZS9ob21lTGFzdC5tcDQiLCJpYXQiOjE3NTEyMTM3MjEsImV4cCI6MTc4Mjc0OTcyMX0.Xfc4XZ14XdDkmMueR-9IMSapR05rDu3H1cEk59uLMVA"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        <div
          //   initial={{ opacity: 0 }}
          //   animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          //   transition={{ duration: 0.8, delay: 0.2 }}
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          className="absolute top-0 right-0 left-0 bottom-0  flex flex-col justify-center items-center"
        >
          <div
            // initial={{ opacity: 0, y: 20 }}
            // animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            // transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white flex flex-col px-4 lg:px-10 -translate-y-8 lg:w-9/12 mx-auto"
          >
            <p className=" text-xl md:text-2xl lg:text-3xl tracking-wider   font-semibold italic">
              ❝ We’ve been underestimating children for far too long. Every
              child holds immense potential—far greater than we imagine. When we
              stop trying to control their learning and start guiding with trust
              and respect, we see them soar beyond the limits we once believed
              existed. ❞
            </p>
            <p className="self-end mt-5 text-xl md:text-2xl text-right tracking-wide">
              - Sufiya Inamdar <br />{" "}
              <span className="  text-xl">
                Co-Founder, Tulip Tots International
              </span>
            </p>
          </div>
        </div>
        <div
          //   initial={{ opacity: 0, y: 50 }}
          //   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          //   transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            boxShadow: "4 20px 20px rgba(0, 0, 0, 0.6)",
          }}
          className="translate-y-1/2 absolute w-[90%] translate-x-1/2 right-1/2 bg-[#edd7c2] py-20 px-5 rounded-4xl flex flex-col justify-center items-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className=" text-slate-800 md:text-3xl text-xl tracking-wider lg:text-4xl font-semibold text-center mb-10"
          >
            From Little Seeds to Mighty Blossoms <br className="lg:hidden" /> —
            Join the Tulip Tots Family!
          </motion.p>
          <NavLink to={"enquiry"}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 border text-xl tracking-wider md:text-2xl rounded-md border-slate-800  transition-all duration-300 hover:scale-105 text-slate-800 hover:text-slate-800 font-semibold"
            >
              <p>Book a Visit</p>
            </motion.div>
          </NavLink>
        </div>
      </div>
      <div className="h-64 sm:h-80 w-full" />
    </>
  );
};

export default CTA;
