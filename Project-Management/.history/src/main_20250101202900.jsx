import App from "./App";
import "../i18n.js"; // Ensure this path matches your `i18n.js` location
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
