import React from "react";
import { NavLink } from "react-router";

const routes = [
  {
    path: "/",
  },
  {
    path: "/about",
  },
  {
    path: "/academics",
  },
  {
    path: "/admission",
  },
  {
    path: "/blogs",
  },
  {
    path: "/contactUs",
  },
  {
    path: "/enquiry",
  },
  {
    path: "/gallery",
  },
];

const Navbar = () => {
  return (
    <div className=" flex space-x-3 bg-amber-300 py-2 justify-center ">
      {routes.map((route) => (
        <NavLink key={route.path} className={"text-black"} to={route.path}>
          <p className=" capitalize">
            {route.path === "/"
              ? "Home"
              : route.path?.slice(1, route.path.length)}
          </p>
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
