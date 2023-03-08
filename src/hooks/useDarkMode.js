import { useContext } from "react";
import UIContext from "../store/ui-context";

const useDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useContext(UIContext);
  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
