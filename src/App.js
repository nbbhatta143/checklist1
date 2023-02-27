import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { HashRouter, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Checklist from "./component/Checklist";
import Navigation from "./component/NavigationMenu";
import ProfilePage from "./component/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/checklist" element={<Checklist />} />
          <Route path="/profilePage" element={<ProfilePage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
