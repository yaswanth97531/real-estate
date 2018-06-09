import React, { Component } from "react";
import "../../App.css";

import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "material-ui/Typography";
import TextField from "@material-ui/core/TextField";

import { loginUser } from "./../../redux/actions";
import Header from "../Navigation/Header";

class Login extends Component {
  constructor(props) {
    super(props);
    //defining the state to the component
    this.state = {
      username: "",
      password: ""
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("props", this.props);
    console.log("Next props", nextProps);
    if (nextProps.isUserLoggedIn) {
      this.props.history.push("/home");
    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLoginButton = e => {
    this.props.dispatch(loginUser(this.state.username, this.state.password));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <Header />
        <Paper style={{ marginTop: "5px", height: "600px" }} elevation={4}>
          <Typography component="p">
            <form noValidate autoComplete="off">
              <TextField
                required
                name="username"
                label="Email Id"
                type="email"
                value={this.state.username}
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
              />
              <br />
              <Button onClick={this.handleLoginButton}>Login</Button>
            </form>
          </Typography>
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  username: {
    marginTop: "10px"
  }
});

const mapStateToProps = state => {
  return {
    isUserLoggedIn: state.Auth.isUserLoggedIn,
    userObject: state.Auth.userObject
  };
};

export default connect(mapStateToProps)(Login);
