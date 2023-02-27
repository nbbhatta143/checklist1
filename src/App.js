import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Checklist from "./component/Checklist";
import ProfilePage from "./component/Profile";
import Navigation from "./component/NavigationMenu";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Checklist />} />
        <Route path="/profilePage" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
