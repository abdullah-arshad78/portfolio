import React from "react";
import useDarkMode from "../hooks/useDarkMode";
const ErrorContainer = (props) => {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-slate-800 text-slate-300 border-red-400"
          : "bg-slate-300 text-slate-700 border-red-700"
      }   w-[80%] md:w-[50%] simple-text border-2  p-6 md:py-8 text-center fixed top-[40%] left-[50%] translate-to-mid rounded-lg`}
      onClick={props.onClose}
    >
      <h2
        className={`${
          isDarkMode ? "text-red-400" : "text-red-900"
        } secondary-heading text-2xl md:text-3xl `}
      >
        Oops! Submission Failed.
      </h2>
      <p className="my-4">Something went wrong. Please try again later.</p>
      <button className="absolute h-[2rem] w-[2rem] top-[.5rem] right-[.5rem] text-3xl flex justify-center items-center text-center hover:text-green-500 ">
        &times;
      </button>
    </div>
  );
};

export default ErrorContainer;
