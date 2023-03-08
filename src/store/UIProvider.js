import React, { useState } from "react";
import UIContext from "./ui-context";

const UIProvider = (props) => {
  const [darkState, setDarkState] = useState(false);

  const toggleDarkModeHandler = () => {
    setDarkState((prev) => !prev);
  };

  return (
    <UIContext.Provider
      value={{ isDarkMode: darkState, toggleDarkMode: toggleDarkModeHandler }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIProvider;
