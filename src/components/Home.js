import React, { useEffect } from "react";
import abdullahPic from "../assets/abdullah.png";
import { Link } from "react-router-dom";

import useDarkMode from "../hooks/useDarkMode";
const Home = () => {
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className={` overflow-hidden relative flex flex-col md:flex-row justify-start md:justify-center items-center pt-[9rem] pb-[8rem] min-h-[98vh] ${
        isDarkMode ? "dark-mode-bg" : "home-bg"
      } `}
    >
      <div className="w-[15rem] z-10 md:w-[22rem] md:mr-6 rounded-full move-up">
        <img
          className={`w-full h-auto  rounded-full shadow-lg ${
            isDarkMode ? "shadow-white" : "saturate-150"
          }`}
          src={abdullahPic}
          alt="abdullah"
        />
      </div>
      <div
        className={`flex mt-8 md:mt-0 flex-col text-center justify-center items-center md:items-start md:text-left  main-heading text-5xl lg:text-7xl font-extrabold ml-5 md:ml-ml-6 move-up ${
          isDarkMode ? "text-white" : "text-zinc-900"
        }`}
      >
        <h1 className="z-10">
          Hi, I am{" "}
          <span className={isDarkMode ? "text-[#A459D1]" : ""}>Abdullah.</span>{" "}
        </h1>{" "}
        <span
          className={`text-4xl block mt-4 z-10 ${
            isDarkMode ? "text-[#03C988]" : ""
          }`}
        >
          A Web Developer!
        </span>
        <Link
          to="/about"
          className={`text-center z-10 ${
            isDarkMode
              ? "bg-purple-800 hover:bg-purple-200 "
              : "bg-slate-700 hover:bg-slate-200"
          }  hover:shadow  mt-6  flex justify-center items-center  secondary-heading font-medium text-3xl md:text-2xl lg-text-4xl mr-2 text-white py-2 px-8 rounded-md  hover:scale-101 hover:text-slate-700  hover:border-2 hover:border-slate-700 transition-all duration-150 ease-in-out border-box`}
        >
          About Me <span className="ml-2"> &rarr;</span>
        </Link>
      </div>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute w-[90vw] top-[-10rem] md:top-[-8rem] left-[-50%] z-0 opacity-70`}
      >
        <path
          fill="#3F3B6C"
          d="M56.5,-59.1C70.1,-55.8,76,-35.1,69.3,-20.1C62.7,-5,43.3,4.4,34.5,20.1C25.7,35.9,27.4,57.8,18,70.4C8.5,82.9,-12,86.1,-21.6,75.6C-31.3,65,-30.1,40.9,-31.5,24.8C-33,8.7,-37,0.7,-39.8,-11.1C-42.6,-23,-44.2,-38.8,-37.4,-43.3C-30.6,-47.7,-15.3,-40.8,3.1,-44.4C21.4,-48.1,42.8,-62.3,56.5,-59.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className={`absolute w-[40vw] bottom-[-1rem] md:bottom-[-8rem] right-0 z-0 opacity-70`}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#3F3B6C"
          d="M35.9,-26.5C48.3,-13.1,61.3,1.9,60.3,16.7C59.2,31.6,44.3,46.2,29.3,48.7C14.4,51.2,-0.6,41.7,-17.8,34.4C-35,27.1,-54.6,22,-62.9,7.9C-71.3,-6.1,-68.4,-29.2,-56,-42.5C-43.7,-55.9,-21.8,-59.5,-5,-55.5C11.8,-51.5,23.5,-39.8,35.9,-26.5Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default Home;
