import React, { useContext } from "react";
import Logo from "../Elements/Logo";
import { ThemeContext } from "../../context/themeContext";

function AuthLayout(props) {
  const { children } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`min-h-screen bg-special-mainBg flex justify-center items-center font-poppins ${theme.name}`}>
      <div className="bg-special-mainBg w-full max-w-sm px-8 py-10">
        <Logo />
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;