import React, { useContext } from "react";
import Logo from "../Elements/Logo";
import DarkModeToggle from "../Elements/DarkModeToggle";
import { ThemeContext } from "../../context/themeContext";
import { DarkModeContext } from "../../context/darkModeContext";

function AuthLayout(props) {
  const { children, title } = props;
  const { theme } = useContext(ThemeContext);
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <main
        className={`min-h-screen flex justify-center items-center p-4 ${theme.name}
          ${isDarkMode ? "bg-defaultBlack text-white" : "bg-special-mainBg text-inherit"}`}
      >
        <div className="w-full max-w-100">
          <div className="mb-8 flex justify-center">
            <Logo />
          </div>

          <h1
            className={`text-2xl font-bold text-center mb-8
              ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            {title}
          </h1>

          {children}

          {/* toggle dark/light mode, diletakkan di bawah form login */}
          <div className="flex justify-center mt-8">
            <DarkModeToggle />
          </div>
        </div>
      </main>
    </>
  );
}

export default AuthLayout;
