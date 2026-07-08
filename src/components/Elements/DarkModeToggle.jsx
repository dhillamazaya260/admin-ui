import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      className={`w-14 h-8 rounded-full flex items-center px-1 cursor-pointer transition-colors
        ${isDarkMode ? "bg-primary justify-end" : "bg-gray-05 justify-start"}`}
    >
      <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs">
        {isDarkMode ? "🌙" : "☀️"}
      </span>
    </button>
  );
}

export default DarkModeToggle;
