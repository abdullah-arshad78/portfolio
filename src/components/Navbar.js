import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";
const navClasses =
  "p-1 flex justify-center items-center mx-2 lg:mx-4 hover:bg-slate-600 hover:rounded px-2";
const navActiveClass = "bg-slate-700 rounded text-sky-100 ";

const Navbar = ({
  isMobileNavigation,
  toggleNavbar,
  mobileNavbarIsVisible,
}) => {
  const { isDarkMode } = useDarkMode();
  return (
    <header
      className={`${
        isMobileNavigation ? "py-2 pl-2 pr-6" : "px-10 py-4 "
      } flex flex-row ${
        isDarkMode ? "bg-[#041C32]" : "bg-slate-800"
      }  text-white   justify-between items-center fixed top-0 left-0 w-screen max-w-screen min-w-screen  simple-text z-40`}
    >
      <span>
        <NavLink
          end
          to="/"
          className="main-heading text-4xl font-bold flex justify-center items-center p-1 px-2 hover:bg-slate-700 hover:rounded"
        >
          Abdullah
        </NavLink>
      </span>

      {!isMobileNavigation && (
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
      )}
      {isMobileNavigation && !mobileNavbarIsVisible && (
        <GiHamburgerMenu
          onClick={toggleNavbar}
          className="w-[2rem] h-[2rem] cursor-pointer hover:fill-cyan-100"
        />
      )}
      {isMobileNavigation && mobileNavbarIsVisible && (
        <FaTimes
          onClick={toggleNavbar}
          className="w-[2rem] h-[2rem] cursor-pointer hover:fill-cyan-100"
        />
      )}
    </header>
  );
};

export default Navbar;
