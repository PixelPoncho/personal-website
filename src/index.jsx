// Imported components
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Project-defined components
import LandingPage from "./components/LandingPage";

// Stylesheets
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
);
