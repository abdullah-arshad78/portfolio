import React, { useEffect } from "react";
import projectsContent from "../content/projects-content";
import { GoDeviceDesktop } from "react-icons/go";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

import useDarkMode from "../hooks/useDarkMode";

const Projects = () => {
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const projectGridItems = projectsContent.map((project) => (
    <div
      key={project.id}
      className={`rounded-lg shadow-md shadow-[rgba(0,0,0,.3)] grid justify-items-center overflow-hidden relative move-up bg-gradient-to-r ${
        isDarkMode
          ? "drop-shadow-dark  from-gray-900 to-indigo-900"
          : "  from-stone-200  to-neutral-100"
      }`}
    >
      <img
        className="object-cover w-full h-auto dark-cover relative"
        src={project.image}
        alt={project.name}
      />

      <h3
        className={`secondary-heading small-project-heading text-white bg-slate-800 opacity-90 py-2 px-4 text-2xl w-[max-content] up-half shadow rounded ${
          isDarkMode && "drop-shadow-dark"
        }`}
      >
        {project.name}
      </h3>
      <div>
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="bg-slate-200 py-2 px-2 sm:px-3 rounded-lg mx-1 text-sm sm:text-basic shadow font-bold inline-block mt-[-1.2rem] hover:bg-slate-600 hover:text-slate-200 transition-all duration-300 ease-in"
          >
            {tool}
          </span>
        ))}
      </div>
      <div>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`smallest-size bg-slate-100 py-1 px-2 rounded mx-1 text-sm shadow  inline-block m-2`}
          >
            {tag}
          </span>
        ))}
      </div>

      {project.desktopOnly && (
        <div className="flex items-center justify-center bg-teal-800 py-2 px-3 rounded-lg absolute top-2 right-2 shadow text-sm">
          <p className="text-white">Desktop Only</p>
          <GoDeviceDesktop className="w-[2rem] h[2rem] fill-white" />
        </div>
      )}
      <div className="flex text-[.8rem] sm:text-sm  sm:font-bold my-[1rem]">
        <a
          href={project.views.sourceCode}
          target="_blank"
          rel="noreferrer noopener"
          className={`flex justify-center items-center mr-[.1rem] sm:mr-2 bg-slate-700 text-white py-2 px-2 rounded-lg shadow hover:text-slate-700 hover:bg-slate-200 transition-all duration-300 ease-in ${
            isDarkMode && "drop-shadow-dark"
          }`}
        >
          <BsGithub className="w-[1.5rem] h-[1.5rem] mr-1" />
          <span>Source Code</span>{" "}
        </a>
        {project.views.liveSite && (
          <a
            href={project.views.liveSite}
            target="_blank"
            rel="noreferrer noopener"
            className={`flex justify-center items-center ml-[.1rem] sm:ml-2 bg-slate-700 text-white py-2 px-2 rounded-lg shadow hover:text-slate-700 hover:bg-slate-200 transition-all duration-300 ease-in ${
              isDarkMode && "drop-shadow-dark"
            }`}
          >
            {" "}
            <MdOutlineScreenSearchDesktop className="w-[1.5rem] h-[1.5rem] mr-1" />
            <span>Live Preview</span>
          </a>
        )}
      </div>
    </div>
  ));
  return (
    <div
      className={`pt-[9rem] pb-[6rem] px-4 simple-text text-slate-600  ${
        isDarkMode ? "dark-mode-bg" : "about-background"
      } min-h-[98vh]`}
    >
      <h2
        className={`secondary-heading text-5xl text-center  mb-[3rem] ${
          isDarkMode ? "text-white" : "text-zinc-600"
        } move-up`}
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projectGridItems}
      </div>
    </div>
  );
};

export default Projects;
