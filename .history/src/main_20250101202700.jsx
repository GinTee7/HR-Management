import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n"; // Ensure this path matches your `i18n.js` location

ReactDOM(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
