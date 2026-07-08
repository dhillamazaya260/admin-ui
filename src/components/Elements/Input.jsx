import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

function Input(props) {
  const {
    id,
    icon = false,
    backgroundColor = false,
    border = "border-gray-03",
    ...rest
  } = props;

  const { isDarkMode } = useContext(DarkModeContext);

  const darkClasses = isDarkMode
    ? "bg-special-bg3 text-white border-gray-02 placeholder:text-gray-03"
    : "text-gray-01";

  return (
    <>
      <input
        className={`py-3 pl-4 text-sm rounded-md w-full border 
          ${border} focus:border-black focus:outline-none focus:ring-0 
          ${backgroundColor || ""} ${darkClasses}
        `}
        id={id}
        {...rest}
      />
    </>
  );
}

export default Input;