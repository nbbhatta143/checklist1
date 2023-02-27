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
      <HashRouter basename="/">
        <Navigation />
        <Routes>
          <Route exact path="/checklist" component={Checklist} />
          <Route path="/profilePage" component={ProfilePage} />
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
