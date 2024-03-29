import React from "react";
import useDarkMode from "../hooks/useDarkMode";
const SuccessContainer = (props) => {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-slate-800 text-slate-300 border-green-300"
          : "bg-slate-300 text-slate-700 border-green-500"
      }  w-[80%] md:w-[50%] simple-text border-2  p-6 md:py-8 text-center fixed top-[40%] left-[50%] translate-to-mid rounded-lg`}
      onClick={props.onClose}
    >
      <h2
        className={`secondary-heading text-2xl md:text-3xl ${
          isDarkMode ? "text-green-400" : "text-green-900"
        }`}
      >
        Form Successfully Submitted.
      </h2>
      <p className="my-4">
        Thank you for messaging. I will get back to you within 3-5 working days.
      </p>
      <button className="absolute h-[2rem] w-[2rem] top-[.5rem] right-[.5rem] text-3xl flex justify-center items-center text-center hover:text-green-700 ">
        &times;
      </button>
    </div>
  );
};

export default SuccessContainer;
