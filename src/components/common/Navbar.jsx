import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center px-12 py-4 ">
      <a href="/">
        <img
          height={50}
          width={150}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Rln5bTcDxbr9YzdGXU8sraD59tiJJaIQDw&s"
        />
      </a>

      <div className=" flex items-center gap-12">
        <div className=" flex justify-center gap-4">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline font-bold" : ""} text-white`
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline font-bold" : ""} text-white`
            }
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline font-bold" : ""} text-white`
            }
            to={"/academics"}
          >
            The School
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline font-bold" : ""} text-white`
            }
            to={"/gallery"}
          >
            Gallery
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline font-bold" : ""} text-white`
            }
            to={"/contactUs"}
          >
            Contact Us
          </NavLink>
        </div>
        <div className=" flex items-center gap-4">
          <a>
            <img
              width={24}
              height={24}
              src="https://cdn-icons-png.freepik.com/256/15707/15707884.png?semt=ais_hybrid"
            />
          </a>
          <a>
            <img
              width={24}
              height={24}
              src="https://www.svgrepo.com/show/157006/linkedin.svg"
            />
          </a>
          <a>
            <img
              width={24}
              height={24}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png"
            />
          </a>
          <a>
            <img
              width={24}
              height={24}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
