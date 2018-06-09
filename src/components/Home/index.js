import React, { Component } from "react";

import "../../App.css";

class Home extends Component {
  // this is the first life cycle(LC). LC - 1
  constructor(props) {
    // we are inheriting the props form the parent
    super(props);
    console.log("In constructor");
    //defining the state to the component. State is the object within the component, all the data we want to refer in the component
    this.state = {
      username: "",
      password: ""
    };
  }

  static getDerivedStateFromProps() {
    console.log("In Get Derived State From Props");
  }

  // this life cycle methid is called when before the compoent is rendered.
  UNSAFE_componentWillMount() {
    console.log("In component will mount");
  }

  UNSAFE_componentWillReceiveProps() {
    console.log("Component will receive props");
  }

  componentDidMount() {
    console.log("In component did mount");
  }

  shouldComponentUpdate() {
    console.log("In should component update");
  }

  UNSAFE_componentWillUpdate() {
    console.log("In component will update");
  }

  getSnapshotBeforeUpdate() {
    console.log("In Get snapshot before update");
  }

  componentDidUpdate() {
    console.log("Componenet did update");
  }
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
    console.log("In render method");
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
