import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/signup" component={Signup} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};
