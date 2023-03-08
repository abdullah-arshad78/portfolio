import React, { useEffect } from "react";
import { aboutContent } from "../content/about-content";
import abdullah2 from "../assets/abdullah-2.jpg";
import {
  primaryIconContent,
  alsoUsedIconContent,
  interestIconContent,
} from "../content/about-content";
import useDarkMode from "../hooks/useDarkMode";

const About = () => {
  const darkModeCtx = useDarkMode();
  const { isDarkMode } = darkModeCtx;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className={`px-4 md:px-12 pt-[9rem] pb-[6rem]  ${
        isDarkMode
          ? "dark-mode-bg text-neutral-200"
          : "about-background text-slate-600 "
      } simple-text text-xl min-h-[98vh]`}
    >
      <h2
        className={`secondary-heading text-5xl text-center mb-6 md:mb-[3rem] ${
          isDarkMode ? "text-white" : "text-zinc-600"
        }  move-up`}
      >
        About Me!
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-[50vw] lg:w-[60vw] md:mr-2 xl:w-[55vw] xl:mr-[3rem] move-up">
          <p className="simple-text small-bio-font text-[1.1rem] text-center md:leading-relaxed md:text-left lg:text-2xl  font-light ">
            {aboutContent.bio}
          </p>
        </div>
        <div className=" mt-8 md:mt-0 md:ml-2 flex md:h-[38vw]  md:w-[45vw] justify-center items-center   lg:h-[20rem] lg:w-[20rem] move-up ">
          <img
            className={`h-full w-full  shadow shadow-slate-400 object-cover lg:rounded-full ${
              isDarkMode && "drop-shadow-dark"
            } `}
            src={abdullah2}
            alt="abdullah 2"
          />
        </div>
      </div>
      <h2
        className={`secondary-heading text-5xl text-center mt-[7rem] mb-[5rem] ${
          isDarkMode ? "text-white" : "text-zinc-600"
        } move-up`}
      >
        Primary Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {primaryIconContent.map((iconContent) => (
          <div
            key={iconContent.id}
            className="flex flex-col justify-center items-center"
          >
            {iconContent.icon}
            <span className="mt-2">{iconContent.name}</span>
          </div>
        ))}
      </div>
      <h2
        className={`secondary-heading text-5xl text-center mt-[7rem] mb-[5rem]  ${
          isDarkMode ? "text-white" : "text-zinc-600"
        } `}
      >
        Also Used
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem] md:gap-6 md:px-4">
        {alsoUsedIconContent.map((iconContent) => (
          <div
            key={iconContent.id}
            className="flex flex-col justify-center items-center"
          >
            {iconContent.icon}
            <span className=" mt-2">{iconContent.name}</span>
          </div>
        ))}
      </div>
      <h2 className="secondary-heading text-5xl text-center mt-[7rem] mb-[5rem] text-zinc-600">
        Interests
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3">
        {interestIconContent.map((iconContent) => (
          <div
            key={iconContent.id}
            className="flex flex-col items-center justify-center my-4 "
          >
            {iconContent.icon}
            <span className="md:text-2xl mt-4">{iconContent.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
