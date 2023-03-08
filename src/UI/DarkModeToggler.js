import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../hooks/useDarkMode";

const DarkModeToggler = () => {
  const [darkText, setDarkText] = useState(false);

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="fixed right-3 top-[7rem] z-20">
      <DarkModeSwitch
        checked={isDarkMode}
        size={50}
        onChange={toggleDarkMode}
        sunColor="#443C68"
        onMouseOver={() => setDarkText(true)}
        onMouseLeave={() => setDarkText(false)}
        style={{
          filter: isDarkMode
            ? "drop-shadow(0px 0px 2px #fff)"
            : "drop-shadow(0px 0px 2px rgba(0,0,0,.7))",
        }}
      />
      {darkText && (
        <span
          className={`absolute left-[-9.5rem] top-[50%] bg-white w-[max-content] rounded px-2 button-shadow appear-animation ${
            isDarkMode ? "button-shadow-dark bg-slate-700 text-white" : ""
          }`}
        >
          Turn {isDarkMode ? "Light" : "Dark"} Mode On
        </span>
      )}
    </div>
  );
};

export default DarkModeToggler;
