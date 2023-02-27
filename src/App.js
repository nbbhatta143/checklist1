import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

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
          <Route exact path="/" element={<Checklist />} />
          <Route path="/checklist/profilePage" element={<ProfilePage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
