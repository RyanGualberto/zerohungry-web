import React, { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import ClientRoutes from "./client.routes";

const LanguageContext = createContext();

export default function Index() {
  return (
    <Router>
      <LanguageContext.Provider>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/cl/*" element={<ClientRoutes />} />
        </Routes>
      </LanguageContext.Provider>
    </Router>
  );
}
