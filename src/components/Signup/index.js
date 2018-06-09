import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "../../App.css";
import { signupUser } from "../../redux/actions";
import Header from "./../Navigation/Header";

class Signup extends Component {
  constructor(props) {
    super(props);
    //defining the state to the component
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("History props ", this.nextProps.history);
    console.log("next user Object", nextProps.userObject);
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSignupButton = e => {
    this.props.dispatch(
      signupUser(
        this.state.firstName,
        this.state.lastName,
        this.state.email,
        this.state.password
      )
    );
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Paper style={{ marginTop: "5px", height: "600px" }} elevation={4}>
          <Typography component="p">
            <div className="parent-signup">
              <TextField
                required
                name="firstName"
                label="First Name"
                type="text"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                margin="normal"
                errorText={this.state.usernameError}
              />
              <br />
              <TextField
                required
                name="lastName"
                label="Last Name"
                type="text"
                value={this.state.lastName}
                onChange={this.handleInputChange}
                margin="normal"
                errorText={this.state.usernameError}
              />
              <br />
              <TextField
                required
                name="email"
                label="Email"
                type="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                margin="normal"
                errorText={this.state.usernameError}
              />
              <br />
              <TextField
                required
                name="password"
                label="Password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                margin="normal"
                errorText={this.state.usernameError}
              />
              <br />
              <Button onClick={this.handleSignupButton}>Sign Up</Button>
            </div>
          </Typography>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userObject: state.Auth.userObject
  };
};

export default connect(mapStateToProps)(Signup);
