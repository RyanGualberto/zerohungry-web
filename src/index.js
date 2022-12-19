import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./routes/index.routes";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
