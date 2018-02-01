import React from "react";

//custom components and containers
import TestCompContainer from "./containers/TestCompContainer";
import About from "./components/About/About";
import UserForm from "./components/Login/UserForm";
import ProjectContainer from "./containers/ProjectContainer";
import Dashboard from "./components/Dashboard/Dashboard";
import Landing from "./components/Landing/Landing.js";
import Profile from "./components/Profile/Profile";
import MyAnalysesContainer from "./containers/MyAnalysesContainer";

import { BrowserRouter as Router, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={TestCompContainer} />
        <Route exact path="/project" component={ProjectContainer} />
        <Route exact path="/login" component={UserForm} />
        <Route exact path="/test" component={TestCompContainer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/myanalyses" component={MyAnalysesContainer} />
      </div>
    </Router>
  );
};

export default Routes;
