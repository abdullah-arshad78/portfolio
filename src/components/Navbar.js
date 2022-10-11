import React from "react";
import { NavLink } from "react-router-dom";
const navClasses =
  "p-1 flex justify-center items-center mx-2 lg:mx-4 hover:bg-slate-600 hover:rounded px-2";
const navActiveClass = "bg-slate-700 rounded text-sky-100 ";

const Navbar = () => {
  return (
    <header className="flex flex-row bg-slate-800 text-white px-10 py-4 justify-between items-center fixed top-0 left-0 right-0  simple-text z-20">
      <span>
        <NavLink
          end
          to="/"
          className="main-heading text-4xl font-bold flex justify-between items-center p-1 px-2 hover:bg-slate-700 hover:rounded"
        >
          Abdullah
        </NavLink>
      </span>

      <nav className="flex  justify-center items-center ">
        <NavLink
          to="/about"
          className={({ isActive }) => {
            if (isActive) {
              return navClasses + " " + navActiveClass;
            }
            return navClasses;
          }}
        >
          About Me!
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => {
            if (isActive) {
              return navClasses + " " + navActiveClass;
            }
            return navClasses;
          }}
        >
          {" "}
          Projects
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) => {
            if (isActive) {
              return navClasses + " " + navActiveClass;
            }
            return navClasses;
          }}
        >
          Blogs
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => {
            if (isActive) {
              return navClasses + " " + navActiveClass;
            }
            return navClasses;
          }}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
