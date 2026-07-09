import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      aria-pressed={isDarkMode}
      className={`relative w-16 h-9 rounded-full flex items-center px-1 cursor-pointer
        transition-colors duration-300 border
        ${isDarkMode
          ? "bg-defaultBlack border-special-bg3"
          : "bg-special-bg border-gray-05"}`}
    >
      {/* thumb bulat yang geser kiri/kanan */}
      <span
        className={`absolute top-1 left-1 w-7 h-7 rounded-full flex items-center justify-center
          bg-white shadow-md transition-transform duration-300
          ${isDarkMode ? "translate-x-7" : "translate-x-0"}`}
      >
        {isDarkMode ? (
          <DarkModeRoundedIcon sx={{ fontSize: 18 }} className="text-primary" />
        ) : (
          <LightModeRoundedIcon sx={{ fontSize: 18 }} className="text-yellow-500" />
        )}
      </span>
    </button>
  );
}

export default DarkModeToggle;
