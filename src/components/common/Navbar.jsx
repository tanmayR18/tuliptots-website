import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import image from "../../assets/bgremoved.png";
import Logo from "../../assets/tuliptotsOgLogo.jpg";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  console.log(location.pathname);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (showDropdown) {
      return;
    }
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {/* Laptop View */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=" bg-[#fff] w-11/12 left-1/2 -translate-x-1/2 py-1 top-8  fixed  rounded-2xl z-[1000] hidden lg:flex shadow-lg"
      >
        <div className=" w-full h-full px-8 flex justify-between items-center">
          <Link to={"/"}>
            <img src={image} height={90} width={90} />
          </Link>
          <div className=" flex items-center gap-10">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " font-bold group relative"
                  : " font-semibold group relative"
              }
              to="/"
            >
              <p className=" text-[#228B22]">Home</p>
              <div className="scale-x-0 group-hover:scale-x-100 origin-left w-full absolute transition-transform duration-500 bg-blue-400 h-0.5 rounded-2xl" />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " font-bold group relative"
                  : " font-semibold group relative"
              }
              to="/school"
            >
              <div className=" flex gap-x-1.5 items-center">
                <p className=" text-[#800080]">Schools</p>
                <MdArrowDropDown color="#800080" />
              </div>
              <div className="scale-x-0 group-hover:scale-x-100 origin-left w-full absolute transition-transform duration-500 bg-blue-400 h-0.5 rounded-2xl" />
              <div className=" hidden group-hover:flex  p-3 absolute">
                <div className=" p-2 px-4 bg-white rounded-md flex flex-col">
                  <Link
                    className=" border-b pb-1 border-b-gray-200"
                    to={"playground"}
                  >
                    <div className=" flex items-center hover:text-orange-400 relative gap-x-1">
                      <div className=" ">
                        <IoIosArrowForward />
                      </div>
                      <p className=" font-semibold">Playground</p>
                    </div>
                  </Link>
                  <Link
                    className=" mt-1 border-b pb-1 border-b-gray-200"
                    to={"nursery"}
                  >
                    <div className="hover:text-orange-400 flex items-center group relative gap-x-1">
                      <div className=" ">
                        <IoIosArrowForward />
                      </div>
                      <p className=" font-semibold">Nursery</p>
                    </div>
                  </Link>
                  <Link
                    className=" mt-1 border-b pb-1 border-b-gray-200"
                    to={"lkg"}
                  >
                    <div className="hover:text-orange-400 flex items-center group relative gap-x-1">
                      <div className=" ">
                        <IoIosArrowForward />
                      </div>
                      <p className=" font-semibold">LKG</p>
                    </div>
                  </Link>
                  <Link
                    className=" mt-1 border-b pb-1 border-b-gray-200"
                    to={"ukg"}
                  >
                    <div className="hover:text-orange-400 flex items-center group relative gap-x-1">
                      <div className=" ">
                        <IoIosArrowForward />
                      </div>
                      <p className=" font-semibold">UKG</p>
                    </div>
                  </Link>
                  <Link className="hover:text-orange-400  mt-1" to={"daycare"}>
                    <div className=" flex items-center group relative gap-x-1">
                      <div className=" ">
                        <IoIosArrowForward />
                      </div>
                      <p className=" font-semibold">Daycare</p>
                    </div>
                  </Link>
                </div>
              </div>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " font-bold group relative"
                  : " font-semibold group relative"
              }
              to="/admission"
            >
              <p className=" text-orange-600">Admission</p>
              <div className="scale-x-0 group-hover:scale-x-100 origin-left w-full absolute transition-transform duration-500 bg-blue-400 h-0.5 rounded-2xl" />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " font-bold group relative"
                  : " font-semibold group relative"
              }
              to="/aboutUs"
            >
              <p className=" text-blue-600">About Us</p>
              <div className="scale-x-0 group-hover:scale-x-100 origin-left w-full absolute transition-transform duration-500 bg-blue-400 h-0.5 rounded-2xl" />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " font-bold group relative"
                  : " font-semibold group relative"
              }
              to="/contactUs"
            >
              <p className=" text-red-600">Contact Us</p>
              <div className="scale-x-0 group-hover:scale-x-100 origin-left w-full absolute transition-transform duration-500 bg-blue-400 h-0.5 rounded-2xl" />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " font-bold group relative"
                  : " font-semibold group relative"
              }
              to="/gallery"
            >
              <p className=" text-blue-950">Gallery</p>
              <div className="scale-x-0 group-hover:scale-x-100 origin-left w-full absolute transition-transform duration-500 bg-blue-400 h-0.5 rounded-2xl" />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " font-bold group relative"
                  : " font-semibold group relative"
              }
              to="/blogs"
            >
              <p className=" text-amber-700">Blogs</p>
              <div className="scale-x-0 group-hover:scale-x-100 origin-left w-full absolute transition-transform duration-500 bg-blue-400 h-0.5 rounded-2xl" />
            </NavLink>
          </div>
        </div>
      </motion.nav>

      {/* Tablet and Laptop */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`w-full ${
          showDropdown && "h-screen "
        } left-1/2  -translate-x-1/2 top-0 fixed z-[1000] flex flex-col lg:hidden`}
      >
        <div className="bg-[#fff]  w-full h-20 flex flex-row items-center  justify-between px-2 pr-3">
          <NavLink to={"/"}>
            <img src={image} height={70} width={70} />
          </NavLink>

          <div onClick={() => setShowDropdown((prev) => !prev)} className="">
            {!showDropdown ? (
              <div className=" flex flex-col gap-y-1">
                <div className="h-[3px] w-8 bg-black rounded-full" />
                <div className="h-[3px] w-6 bg-black rounded-full" />
                <div className="h-[3px] w-3 bg-black rounded-full" />
              </div>
            ) : (
              <RxCross2 size={35} />
            )}
          </div>
        </div>
        {showDropdown && <DropDown setShowDropdown={setShowDropdown} />}
      </motion.nav>
    </>
  );
};

const DropDown = ({ setShowDropdown }) => {
  return (
    <div
      onClick={() => setShowDropdown(false)}
      className=" bg-black/40  flex-1 flex justify-center items-center w-full h-full backdrop-blur-sm "
    >
      <div onClick={() => {}} className=" p-5 flex flex-col justify-center items-center gap-6 shadow-2xl bg-gray-400/30">
        <NavLink
          onClick={() => setShowDropdown(false)}
          className={({ isActive }) =>
            isActive
              ? " font-bold group relative"
              : " font-semibold group relative"
          }
          to="/"
        >
          <p className=" text-2xl text-white tracking-wider">Home</p>
          {location.pathname === "/" && (
            <div className=" w-full absolute   bg-white h-1 rounded-2xl" />
          )}
        </NavLink>
        <NavLink
          onClick={() => setShowDropdown(false)}
          className={({ isActive }) =>
            isActive
              ? " font-bold group relative"
              : " font-semibold group relative"
          }
          to="/school"
        >
          <p className=" text-2xl text-white tracking-wider">School</p>
          {location.pathname === "/school" && (
            <div className=" w-full absolute   bg-white h-1 rounded-2xl" />
          )}
        </NavLink>
        <NavLink
          onClick={() => setShowDropdown(false)}
          className={({ isActive }) =>
            isActive
              ? " font-bold group relative"
              : " font-semibold group relative"
          }
          to="/admission"
        >
          <p className=" text-2xl text-white tracking-wider">Admission</p>
          {location.pathname === "/admission" && (
            <div className=" w-full absolute   bg-white h-1 rounded-2xl" />
          )}
        </NavLink>
        <NavLink
          onClick={() => setShowDropdown(false)}
          className={({ isActive }) =>
            isActive
              ? " font-bold group relative"
              : " font-semibold group relative"
          }
          to="/aboutUs"
        >
          <p className=" text-2xl text-white tracking-wider">About Us</p>
          {location.pathname === "/aboutUs" && (
            <div className=" w-full absolute   bg-white h-1 rounded-2xl" />
          )}
        </NavLink>
        <NavLink
          onClick={() => setShowDropdown(false)}
          className={({ isActive }) =>
            isActive
              ? " font-bold group relative"
              : " font-semibold group relative"
          }
          to="/contactUs"
        >
          <p className=" text-2xl text-white tracking-wider">Contact Us</p>
          {location.pathname === "/contactUs" && (
            <div className=" w-full absolute   bg-white h-1 rounded-2xl" />
          )}
        </NavLink>
        <NavLink
          onClick={() => setShowDropdown(false)}
          className={({ isActive }) =>
            isActive
              ? " font-bold group relative"
              : " font-semibold group relative"
          }
          to="/gallery"
        >
          <p className=" text-2xl text-white tracking-wider">Gallery</p>
          {location.pathname === "/gallery" && (
            <div className=" w-full absolute   bg-white h-1 rounded-2xl" />
          )}
        </NavLink>

        <NavLink
          onClick={() => setShowDropdown(false)}
          className={({ isActive }) =>
            isActive
              ? " font-bold group relative"
              : " font-semibold group relative"
          }
          to="/blogs"
        >
          <p className=" text-2xl text-white tracking-wider">Blogs</p>
          {location.pathname === "/blogs" && (
            <div className=" w-full absolute   bg-white h-1 rounded-2xl" />
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
