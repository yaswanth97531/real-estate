import React, { Component } from "react";

import "../../App.css";

class Home extends Component {
  // this is the first life cycle(LC). LC - 1
  constructor(props) {
    // we are inheriting the props form the parent
    super(props);
    //defining the state to the component. State is the object within the component, all the data we want to refer in the component
    this.state = {
      username: "",
      password: ""
    };
  }

  UNSAFE_componentWillReceiveProps() {}

  // this life cycle methid is called when before the compoent is rendered.
  UNSAFE_componentWillMount() {}

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSingupButton = e => {
    console.log(this.state.username);
    console.log(this.state.password);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Home</h1>
        </header>
      </div>
    );
  }
}
export default Home;
