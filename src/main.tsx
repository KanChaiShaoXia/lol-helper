import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import Index from "./pages/index";
import "./i18n/init";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
