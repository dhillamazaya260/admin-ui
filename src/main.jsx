import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeContextProvider } from "./context/themeContext";
import { AuthContextProvider } from "./context/authContext";
import { DarkModeContextProvider } from "./context/darkModeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <DarkModeContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </DarkModeContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
