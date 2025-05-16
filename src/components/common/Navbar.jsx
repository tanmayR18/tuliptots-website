import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [showDropDOwn, setShowDropDOwn] = useState(false);
  return (
    <nav className=" flex justify-between items-center px-4 lg:px-12 py-4 ">
      <a href="/">
        <img
          className=" h-[55px]  lg:h-[100px] w-[55px] lg:w-[100px]"
          src="https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/Common/WhatsApp%20Image%202025-05-15%20at%2015.55.43_922dbfb6.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM2N2UzYTQ1LTFjMjItNGNhZi1hZjk3LTc1OGRiNWQ3ODJiMSJ9.eyJ1cmwiOiJhc3NldHMvQ29tbW9uL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTUgYXQgMTUuNTUuNDNfOTIyZGJmYjYuanBnIiwiaWF0IjoxNzQ3MzkyMTgwLCJleHAiOjIwNjI3NTIxODB9.BMJCfAHYhg7V8ccBCsGFX9i_pAW_zmr6SOi9SiRoXLI"
        />
      </a>

      {/* Laptop Navbar */}
      <div className=" hidden  lg:flex items-center gap-12">
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

      {/* Mobile Navbar */}
      <div
        onClick={() => setShowDropDOwn(true)}
        className=" space-y-1.5 lg:hidden"
      >
        <div className="h-0.5 bg-white w-8" />
        <div className="h-0.5 bg-white w-8" />
        <div className="h-0.5 bg-white w-6" />
      </div>

      {showDropDOwn && <DropDown setShowDropDOwn={setShowDropDOwn} />}
    </nav>
  );
};

const DropDown = ({ setShowDropDOwn }) => {
  return (
    <div className=" fixed top-0 right-0 left-0 bottom-0 bg-black z-50">
      <div
        onClick={() => setShowDropDOwn(false)}
        className=" absolute top-10 right-10"
      >
        <div className=" bg-white h-0.5 w-10 rotate-45 origin-center " />
        <div className=" absolute top-0 bg-white h-0.5 w-10 -rotate-45 origin-center" />
      </div>

      <div className=" flex flex-col justify-center items-center h-full space-y-6">
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "underline font-bold" : ""} text-white text-lg`
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "underline font-bold" : ""} text-white text-lg`
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "underline font-bold" : ""} text-white text-lg`
          }
          to={"/academics"}
        >
          The School
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "underline font-bold" : ""} text-white text-lg`
          }
          to={"/gallery"}
        >
          Gallery
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "underline font-bold" : ""} text-white text-lg`
          }
          to={"/contactUs"}
        >
          Contact Us
        </NavLink>
      </div>
      <div className=" flex items-center gap-6 absolute bottom-5 justify-center w-full">
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
  );
};

export default Navbar;
