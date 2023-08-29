import React from "react";
import { useThemeContext, themes } from "../context/MyThemeContext";

function ThemeSwitcher() {
  const { theme, setTheme, darkMode } = useThemeContext();

  const toggleTheme = () => {
    setTheme(darkMode ? themes.light : themes.dark);
  };

  return (
    <button onClick={toggleTheme}>{darkMode ? "🌞" : "🌙"} </button>
  );
}

export default ThemeSwitcher;
