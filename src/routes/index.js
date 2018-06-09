import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import Login from "./../components/Login";
import Home from "./../components/Home";
import Signup from "./../components/Signup";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/home" render={props => <Home {...props} />} />
        <Route exact path="/signup" render={props => <Signup {...props} />} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};
