import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import image from "../../assets/bgremoved.png";
import Logo from "../../assets/tuliptotsOgLogo.jpg";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { UserAuth } from "@/context/AuthContext";
import { MdOutlineDashboard } from "react-icons/md";
import {
  Contact,
  HandHeart,
  Home,
  Images,
  Minus,
  NotebookText,
  Pencil,
  Phone,
  Plus,
  School,
} from "lucide-react";
import { RiProfileFill } from "react-icons/ri";
import { AiFillProfile } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { scrollY } = useScroll();
  const { session } = UserAuth();
  const [hidden, setHidden] = useState(false);
  const [showSchoolDropDown, setShowSchoolDropDown] = useState(false);
  const [showSchoolDropDown2, setShowSchoolDropDown2] = useState(false);
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
          visible: { y: 0, opacity: 1, scale: 1 },
          hidden: { y: "-100%", opacity: 0, scale: 0.95 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=" bg-[#fff] font-patrickHand tracking-wide text-lg w-[95%] 2xl:w-10/12 left-1/2 -translate-x-1/2 py-1 top-8  fixed  rounded-2xl z-[1000] hidden xl:flex shadow-lg"
      >
        <div className=" w-full h-full px-8 flex justify-between items-center">
          <Link to={"/"}>
            <img src={image} height={90} width={90} />
          </Link>
          <div className=" flex items-center gap-10">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " font-bold group relative "
                  : " font-semibold group relative"
              }
              to="/"
            >
              <div className=" flex items-center gap-0.5">
                <Home color="#228B22" size={18} />
                <p className=" text-[#228B22]">Home</p>
              </div>
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
              <div className=" flex items-center gap-0.5">
                <FaUser color="#155dfc" size={15} />
                <p className=" text-blue-600">About Us</p>
              </div>
              <div className="scale-x-0 group-hover:scale-x-100 origin-left w-full absolute transition-transform duration-500 bg-blue-400 h-0.5 rounded-2xl" />
            </NavLink>

              <div
              className="font-semibold group relative"
              onMouseEnter={() => setShowSchoolDropDown2(true)}
              onMouseLeave={() => setShowSchoolDropDown2(false)}
            >
              <div className="flex gap-x-1.5 items-center">
                <div className=" flex items-center gap-0.5">
                  <HandHeart color="#fb923c" size={22} />
                  <p className="text-[#fb923c]"> Our Programs</p>
                </div>
                {showSchoolDropDown2 ? (
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent NavLink navigation
                      e.stopPropagation();
                      setShowSchoolDropDown2(false);
                    }}
                  >
                    <MdArrowDropUp color="#fb923c" />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent NavLink navigation
                      e.stopPropagation();
                      setShowSchoolDropDown2(true);
                    }}
                  >
                    <MdArrowDropDown color="#fb923c" />
                  </button>
                )}
              </div>

              <div className="scale-x-0 group-hover:scale-x-100 origin-left w-full absolute transition-transform duration-500 bg-blue-400 h-0.5 rounded-2xl" />

              <div
                onMouseEnter={() => setShowSchoolDropDown2(true)}
                onMouseLeave={() => setShowSchoolDropDown2(false)}
                className={`${
                  showSchoolDropDown2 ? "flex" : "hidden"
                } absolute p-3 bg-white rounded-lg -bottom-0.5 translate-y-full w-[200px] shadow-2xl shadow-lg z-50`}
              >
                <div className=" p-2 px-2 bg-white rounded-lg flex flex-col">
                  <Link
                    className=" border-b pb-1 border-b-gray-200"
                    to={"/school"}
                  >
                    <div className=" flex items-center hover:text-[#800080] relative gap-x-1">
                      <div className=" ">
                        <IoIosArrowForward />
                      </div>
                      <p className=" font-semibold">Preschool</p>
                    </div>
                  </Link>
                  <Link
                    className=" mt-1 border-b pb-1 border-b-gray-200"
                    to={"/daycare"}
                  >
                    <div className="hover:text-[#800080] flex items-center group relative gap-x-1">
                      <div className=" ">
                        <IoIosArrowForward />
                      </div>
                      <p className=" font-semibold">Day Care</p>
                    </div>
                  </Link>
                  <Link className=" mt-1 " to={"/library"}>
                    <div className="hover:text-[#800080] flex items-center group relative gap-x-1">
                      <div className=" ">
                        <IoIosArrowForward />
                      </div>
                      <p className=" font-semibold">Children’s Library</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="font-semibold group relative"
              onMouseEnter={() => setShowSchoolDropDown(true)}
              onMouseLeave={() => setShowSchoolDropDown(false)}
            >
              <div className="flex gap-x-1.5 items-center">
                <div className=" flex items-center gap-0.5">
                  <School color="#800080" size={18} />
                  <p className="text-[#800080]">Our Environment</p>
                </div>
                {showSchoolDropDown ? (
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent NavLink navigation
                      e.stopPropagation();
                      setShowSchoolDropDown(false);
                    }}
                  >
                    <MdArrowDropUp color="#800080" />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent NavLink navigation
                      e.stopPropagation();
                      setShowSchoolDropDown(true);
                    }}
                  >
                    <MdArrowDropDown color="#800080" />
                  </button>
                )}
              </div>

              <div className="scale-x-0 group-hover:scale-x-100 origin-left w-full absolute transition-transform duration-500 bg-blue-400 h-0.5 rounded-2xl" />

              <div
                onMouseEnter={() => setShowSchoolDropDown(true)}
                onMouseLeave={() => setShowSchoolDropDown(false)}
                className={`${
                  showSchoolDropDown ? "flex" : "hidden"
                } absolute p-3 bg-white rounded-lg -bottom-0.5 translate-y-full w-[200px] shadow-2xl shadow-lg z-50`}
              >
                <div className=" p-2 px-2 bg-white rounded-lg flex flex-col">
                  <Link
                    className=" border-b pb-1 border-b-gray-200"
                    to={"/classroom"}
                  >
                    <div className=" flex items-center hover:text-orange-400 relative gap-x-1">
                      <div className=" ">
                        <IoIosArrowForward />
                      </div>
                      <p className=" font-semibold">
                        Classroom & Learning Spaces
                      </p>
                    </div>
                  </Link>
                  <Link
                    className=" mt-1 border-b pb-1 border-b-gray-200"
                    to={"/growth"}
                  >
                    <div className="hover:text-orange-400 flex items-center group relative gap-x-1">
                      <div className=" ">
                        <IoIosArrowForward />
                      </div>
                      <p className=" font-semibold">Our Team</p>
                    </div>
                  </Link>
                  <Link className=" mt-1 " to={"health"}>
                    <div className="hover:text-orange-400 flex items-center group relative gap-x-1">
                      <div className=" ">
                        <IoIosArrowForward />
                      </div>
                      <p className=" font-semibold">Health & Hygiene</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " font-bold group relative"
                  : " font-semibold group relative"
              }
              to="/gallery"
            >
              <div className=" flex justify-center items-center gap-0.5">
                <Images color="#162456" size={18} />
                <p className=" text-blue-950">Gallery</p>
              </div>
              <div className="scale-x-0 group-hover:scale-x-100 origin-left w-full absolute transition-transform duration-500 bg-blue-400 h-0.5 rounded-2xl" />
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " font-bold group relative"
                  : " font-semibold group relative"
              }
              to="/admission"
            >
              <div className="flex items-center justify-center gap-0.5">
                <NotebookText color="#ea580c" size={18} />
                <p className=" text-orange-600">Admission</p>
              </div>
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
              <div className=" flex items-center gap-0.5">
                <Pencil color="#b45309" size={18} />
                <p className=" text-amber-700">Blogs</p>
              </div>
              <div className="scale-x-0 group-hover:scale-x-100 origin-left w-full absolute transition-transform duration-500 bg-blue-400 h-0.5 rounded-2xl" />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " font-bold group relative "
                  : " font-semibold group relative"
              }
              to="/contactUs"
            >
              <div className=" flex items-center gap-0.5">
                <Phone size={16} color="#dc2626" />
                <p className=" text-red-600">Contact Us</p>
              </div>
              <div className="scale-x-0 group-hover:scale-x-100 origin-left w-full absolute transition-transform duration-500 bg-blue-400 h-0.5 rounded-2xl" />
            </NavLink>
            {/* <NavLink
              target="_blank"
              className={" hover:scale-110 transition-transform duration-300"}
              to="https://www.instagram.com/tuliptotsinternational/"
            >
              <img
                height={30}
                width={30}
                src="https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Common/instagramIcon.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ29tbW9uL2luc3RhZ3JhbUljb24uc3ZnIiwiaWF0IjoxNzUwNTc0MDk0LCJleHAiOjIwNjU5MzQwOTR9.6zs481B0_ScUqgJmaYISHVazGaD2BPOsbbMdWtaZqLs"
              />
            </NavLink> */}

            {session && (
              <NavLink to={"/dashboard"}>
                <MdOutlineDashboard size={22} />
              </NavLink>
            )}
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
        } left-1/2  -translate-x-1/2 top-0 fixed z-[1000] flex flex-col shadow-md xl:hidden`}
      >
        <div className="bg-[#fff]  w-full h-20 flex flex-row items-center  justify-between px-2 pr-3">
          <NavLink to={"/"}>
            <img src={image} height={70} width={70} />
          </NavLink>

          <div className=" flex items-center gap-8">
            {session && (
              <NavLink to={"/dashboard"}>
                <MdOutlineDashboard size={22} />
              </NavLink>
            )}
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
        </div>
        {/* <AnimatePresence> */}
        {showDropdown && <DropDown setShowDropdown={setShowDropdown} />}
        {/* </AnimatePresence> */}
      </motion.nav>
    </>
  );
};

const DropDown = ({ setShowDropdown }) => {
  const [showSchoolDropDown, setShowSchoolDropDown] = useState(false);
  const [showSchoolDropDown2, setShowSchoolDropDown2] = useState(false);
  return (
    <div
      onClick={() => setShowDropdown(false)}
      className="  flex-1 overflow-hidden w-full h-full backdrop-blur-sm "
    >
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -200, opacity: 0 }} // <-- Exit animation
        transition={{
          type: "spring",
          stiffness: 300, // higher = faster spring
          damping: 20, // lower = more bouncy
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" p-5 flex flex-col justify-center items-center  gap-6 shadow-2xl rounded-b-3xl bg-[#333]"
      >
        <div className=" flex flex-col items-start gap-5 font-kgPrimaryPenmanship">
          <NavLink
            onClick={() => setShowDropdown(false)}
            className={({ isActive }) =>
              isActive
                ? " font-bold group relative"
                : " font-semibold group relative"
            }
            to="/"
          >
            <p className=" text-2xl text-white tracking-widest">Home</p>
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
            to="/aboutUs"
          >
            <p className=" text-2xl text-white tracking-widest">About Us</p>
            {location.pathname === "/aboutUs" && (
              <div className=" w-full absolute   bg-white h-1 rounded-2xl" />
            )}
          </NavLink>

           <div>
            <div onClick={() => setShowSchoolDropDown( prev => !prev)} className=" flex items-center gap-3">
              <div>
                <p className=" text-2xl font-semibold text-white tracking-widest">
                  Our Programs
                </p>
              </div>
            {showSchoolDropDown ? (
                <div
                //   onClick={() => setShowSchoolDropDown(false)}
                  className=" bg-amber-100 cursor-pointer"
                >
                  <Minus />
                </div>
              ) : (
                <div
                //   onClick={() => setShowSchoolDropDown(true)}
                  className=" bg-amber-100 cursor-pointer"
                >
                  <Plus />
                </div>
              )}
            </div>

            <AnimatePresence>
              {showSchoolDropDown && (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  className=" pl-3 flex flex-col gap-2 pt-3  items-start"
                >
                  <NavLink
                    onClick={() => setShowDropdown(false)}
                    className={({ isActive }) =>
                      isActive
                        ? " font-bold group relative"
                        : " font-semibold group relative"
                    }
                    to="/school"
                  >
                    <p
                      style={{
                        marginBottom: location.pathname === "/school" ? 5 : 0,
                      }}
                      className=" text-xl text-white tracking-widest"
                    >
                      Preschool
                    </p>
                    {location.pathname === "/school" && (
                      <div className=" w-full absolute bottom-1 bg-white h-1 rounded-2xl" />
                    )}
                  </NavLink>
                  <NavLink
                    onClick={() => setShowDropdown(false)}
                    className={({ isActive }) =>
                      isActive
                        ? " font-bold group relative"
                        : " font-semibold group relative"
                    }
                    to="/daycare"
                  >
                    <p className=" text-xl text-white tracking-widest">
                      Day Care
                    </p>
                    {location.pathname === "/daycare" && (
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
                    to="/library"
                  >
                    <p
                      style={{
                        marginBottom: location.pathname === "/library" ? 5 : 0,
                      }}
                      className=" text-xl text-white tracking-widest"
                    >
                      Children’s Library
                    </p>
                    {location.pathname === "/library" && (
                      <div className=" w-full absolute bottom-1  bg-white h-1 rounded-2xl" />
                    )}
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <div
              onClick={() => setShowSchoolDropDown2((prev) => !prev)}
              className=" flex items-center gap-3"
            >
              <div>
                <p className=" text-2xl font-semibold text-white tracking-widest">
                  Our Environment
                </p>
              </div>
              {showSchoolDropDown2 ? (
                <div
                //   onClick={() => setShowSchoolDropDown2(false)}
                  className=" bg-amber-100 cursor-pointer"
                >
                  <Minus />
                </div>
              ) : (
                <div
                //   onClick={() => setShowSchoolDropDown2(true)}
                  className=" bg-amber-100 cursor-pointer"
                >
                  <Plus />
                </div>
              )}
            </div>

            <AnimatePresence>
              {showSchoolDropDown2 && (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  className=" pl-3 flex flex-col gap-2 pt-3 items-start"
                >
                  <NavLink
                    onClick={() => setShowDropdown(false)}
                    className={({ isActive }) =>
                      isActive
                        ? " font-bold group relative"
                        : " font-semibold group relative"
                    }
                    to="/classroom"
                  >
                    <p
                      style={{
                        marginBottom:
                          location.pathname === "/classroom" ? 5 : 0,
                      }}
                      className=" text-xl text-white tracking-widest"
                    >
                      Classroom & Learning Spaces
                    </p>
                    {location.pathname === "/classroom" && (
                      <div className=" w-full absolute bottom-1 bg-white h-1 rounded-2xl" />
                    )}
                  </NavLink>
                  {/* <NavLink
                    onClick={() => setShowDropdown(false)}
                    className={({ isActive }) =>
                      isActive
                        ? " font-bold group relative"
                        : " font-semibold group relative"
                    }
                    to="/library"
                  >
                    <p style={{ marginBottom: location.pathname === "/library" ? 5 : 0}} className=" text-xl text-white tracking-widest">
                      Library
                    </p>
                    {location.pathname === "/library" && (
                      <div className=" w-full absolute bottom-1  bg-white h-1 rounded-2xl" />
                    )}
                  </NavLink> */}
                  <NavLink
                    onClick={() => setShowDropdown(false)}
                    className={({ isActive }) =>
                      isActive
                        ? " font-bold group relative"
                        : " font-semibold group relative"
                    }
                    to="/health"
                  >
                    <p className=" text-xl text-white tracking-widest">
                      Health & Hygiene
                    </p>
                    {location.pathname === "/health" && (
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
                    to="/growth"
                  >
                    <p
                      style={{
                        marginBottom: location.pathname === "/growth" ? 5 : 0,
                      }}
                      className=" text-xl text-white tracking-widest"
                    >
                      Our Team
                    </p>
                    {location.pathname === "/growth" && (
                      <div className=" w-full absolute bottom-1  bg-white h-1 rounded-2xl" />
                    )}
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div> 

          <NavLink
            onClick={() => setShowDropdown(false)}
            className={({ isActive }) =>
              isActive
                ? " font-bold group relative"
                : " font-semibold group relative"
            }
            to="/gallery"
          >
            <p className=" text-2xl text-white tracking-widest">Gallery</p>
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
            to="/admission"
          >
            <p className=" text-2xl text-white tracking-widest">Admission</p>
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
            to="/blogs"
          >
            <p className=" text-2xl text-white tracking-widest">Blogs</p>
            {location.pathname === "/blogs" && (
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
            <p className=" text-2xl text-white tracking-widest">Contact Us</p>
            {location.pathname === "/contactUs" && (
              <div className=" w-full absolute   bg-white h-1 rounded-2xl" />
            )}
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
