import React, { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import AdminRoutes from "./admin.routes";
import ClientRoutes from "./client.routes";

const LanguageContext = createContext();

export default function Index() {
  const [language, setLanguage] = React.useState("");

  return (
    <Router>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/cl/*" element={<ClientRoutes />} />
          <Route path="/adm/*" element={<AdminRoutes />} />
        </Routes>
      </LanguageContext.Provider>
    </Router>
  );
}
