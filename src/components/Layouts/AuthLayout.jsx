import React, { useContext } from "react";
import Logo from "../Elements/Logo";
import { ThemeContext } from "../../context/themeContext";

function AuthLayout(props) {
  const { children, title } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <main
        className={`min-h-screen bg-special-mainBg flex justify-center items-center p-4 ${theme.name}`}
      >
        <div className="w-full max-w-100">
          <div className="mb-8 flex justify-center">
            <Logo />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {title}
          </h1>

          {children}
        </div>
      </main>
    </>
  );
}

export default AuthLayout;