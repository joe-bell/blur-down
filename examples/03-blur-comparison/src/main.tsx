import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./irrelevant/index.css";
import App from "./app";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
