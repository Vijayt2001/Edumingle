import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import { AuthContextProvider } from "./context/authContext";
// import { DarkMode } from "./context/DarkMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

      <AuthContextProvider>
        <App />
      </AuthContextProvider>

  </React.StrictMode>
);
