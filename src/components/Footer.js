import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
const linkClasses =
  " flex smallest-size justify-center items-center p-[.1rem] sm:p-1 mx-[.2em] sm:mx-1 sm:font-extrabold font-bold hover:-rotate-6 hover:text-cyan-300 hover:bg-slate-600 transition-all duration-300 ease-in-out";
const linkClassesLeft =
  " flex smallest-size  justify-center items-center p-[.1rem] sm:p-1 mr-[.2rem] sm:mr-1 sm:font-extrabold font-bold hover:-rotate-6 hover:text-cyan-300 hover:bg-slate-600 transition-all duration-300 ease-in-out";
const linkClassesRight =
  " flex smallest-size  justify-center items-center p-[.1rem] sm:p-1 ml-[.2rem] sm:ml-1 sm:font-extrabold font-bold hover:-rotate-6 hover:text-cyan-300 hover:bg-slate-600 transition-all duration-300 ease-in-out";
const socialIconClasses =
  "mx-6 rounded-full hover:scale-110 transition-all duration-200 ease-in";
const socialIconLeftClass =
  "mr-6 rounded-full hover:scale-110 transition-all duration-200 ease-in";
const socialIconRightClass =
  " ml-6 rounded-full hover:scale-110 transition-all duration-200 ease-in";

const Footer = () => {
  return (
    <div className="text-sm sm:text-basic  bg-slate-700 text-white simple-text pt-12 py-2 px-12">
      <div className="flex flex-col md:flex-row justify-between  my-6 py-3 items-center">
        <div className="flex mb-8 md:mb-0 border-t-2 py-4 ">
          <Link to="/" className={linkClassesLeft}>
            HOME
          </Link>
          <Link to="/about" className={linkClassesLeft}>
            ABOUT
          </Link>
          <Link to="/projects" className={linkClasses}>
            PROJECTS
          </Link>
          <Link to="/posts" className={linkClasses}>
            BLOGS
          </Link>
          <Link to="/contact" className={linkClassesRight}>
            CONTACT
          </Link>
        </div>
        <div className="pt-4 border-t-2 flex">
          <SocialIcon
            url="https://www.linkedin.com/in/abdullah-arshad-3a739b22b/"
            target="_blank"
            className={socialIconLeftClass}
            fgColor="#fff"
          />
          <SocialIcon
            url="https://github.com/abdullah-arshad78"
            target="_blank"
            className={socialIconClasses}
            fgColor="#fff"
          />
          <SocialIcon
            url="https://www.instagram.com/abdulla.arh/"
            target="_blank"
            className={socialIconRightClass}
            fgColor="#fff"
          />
        </div>
      </div>
      <p className="text-center text-sm font-light text-slate-200">
        &copy; Copyright Abdullah Arshad 2022
      </p>
    </div>
  );
};

export default Footer;
