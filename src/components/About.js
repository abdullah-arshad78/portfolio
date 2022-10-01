import React from "react";
import { aboutContent } from "../content/content";
import abdullah2 from "../assets/abdullah-2.jpg";

const About = () => {
  return (
    <div className="p-12 bg-yellow-50">
      <h2 className="secondary-heading text-5xl text-center mb-6 text-zinc-600">
        About Me!
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-[50vw] lg:w-[60vw] md:mr-2">
          <p className="simple-text text-[1.1rem] text-center md:text-left lg:text-2xl md:leading-relaxed text-slate-700 font-light ">
            {aboutContent.bio}
          </p>
        </div>
        <div className=" mt-8 md:mt-0 md:ml-2 flex md:h-[38vw]  md:w-[45vw] justify-center items-center   lg:h-[20rem] lg:w-[20rem] ">
          <img
            className="h-full w-full  shadow shadow-slate-400 object-cover lg:rounded-full "
            src={abdullah2}
            alt="abdullah 2"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
