import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

function Card(props) {
  const { title, link = false, desc } = props;
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className="h-full flex flex-col">
      <div
        className={`flex justify-between items-center mb-2 ${
          isDarkMode ? "text-white" : "text-gray-02"
        }`}
      >
        <div className="text-2xl">{title}</div>
        {link && <div className="text-xs">View All</div>}
      </div>
      <div
        className={`flex-1 rounded-lg px-6 py-5 shadow-xl ${
          isDarkMode ? "bg-special-bg3 text-white" : "bg-white"
        }`}
      >
        {desc}
      </div>
    </div>
  );
}

export default Card;