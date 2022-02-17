import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { Homepage, Aboutpage } from "./App";
import {Body,Header} from './Components'

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Body} />
        <Route exact path="/about" component={Header} />
      </Switch>
    </Router>
  );
};

export default Navigation;
