import React from "react";

const UIContext = React.createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});
export default UIContext;

