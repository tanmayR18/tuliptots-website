import React from "react";
import { NavLink } from "react-router";
import { motion, useInView } from "framer-motion";
import image from '../../../assets/home/homeCta.jpg'

const CTA = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <div className="h-[70vh] md:h-[90vh] w-full relative flex items-end " ref={ref}>
        <motion.img
          initial={{ opacity: 0, scale: 1 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover"
          src={image}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.8)] flex flex-col justify-center items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white flex flex-col px-10 -translate-y-8"
          >
            <p className="text-3xl font-semibold">
              "Children see magic because they look for it."
            </p>
            <p className="self-end mt-1">- Chirstopher Moore</p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            boxShadow: "4 20px 20px rgba(0, 0, 0, 0.6)",
          }}
          className="translate-y-1/2 absolute w-[90%] translate-x-1/2 right-1/2 bg-purple-600 py-20 px-5 rounded-4xl flex flex-col justify-center items-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-white md:text-2xl text-lg lg:text-3xl text-center mb-10"
          >
            From Little Seeds to Mighty Blossoms <br className="lg:hidden" /> —
            Join the Tulip Tots Family!
          </motion.p>
          <NavLink to={"enquiry"}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 border rounded-md border-white hover:bg-white transition-all duration-300 hover:scale-105 text-white hover:text-purple-600 font-semibold"
            >
              <p>Book a Visit</p>
            </motion.div>
          </NavLink>
        </motion.div>
      </div>
      <div className="h-64 sm:h-80 w-full" />
    </>
  );
};

export default CTA;
