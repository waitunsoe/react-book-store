import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === "undefined") {
    return Error("theme context should be used only in ThemeContextProvider!");
  }
  return context;
};

export default useTheme;
