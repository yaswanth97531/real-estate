import React, { Component } from "react";
import "./App.css";

import Routes from "./router";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <Routes />
      </div>
    );
  }
}

export default App;
