import React, { useEffect } from "react";
import ContactForm from "./ContactForm";

import useDarkMode from "../hooks/useDarkMode";

const Contact = () => {
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className={`px-6 pt-[9rem] pb-[6rem]  ${
        isDarkMode ? "dark-mode-bg" : "about-background"
      } simple-text text-slate-600 text-xl flex flex-col justify-start items-center min-h-[98vh]`}
    >
      <h2
        className={`secondary-heading text-4xl xl:text-5xl text-center mb-6 md:mb-[3rem]  move-up ${
          isDarkMode ? "text-white" : "text-zinc-600"
        }`}
      >
        Contact Me!
      </h2>
      <div
        className={`items-center w-full md:w-[80vw] flex flex-col justify-center items-center md:items-start computer-bg rounded move-up ${
          isDarkMode ? "drop-shadow-dark" : "drop-shadow-md"
        }`}
      >
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
