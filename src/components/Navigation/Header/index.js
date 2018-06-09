import React from "react";

import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Real Estate
        </Typography>
        <Typography style={styles.flex} />
        <Typography style={styles.flex} />
        <Typography style={styles.flex} />
        <Typography style={styles.flex} />
        <Typography style={styles.flex} />
        <Typography style={styles.flex} />
        <Typography variant="title" style={styles.flex}>
          <Link
            style={styles.sign}
            to={{
              pathname: "/signin"
            }}
          >
            Login
          </Link>
          <Link
            style={styles.sign}
            to={{
              pathname: "/signup"
            }}
          >
            Sign up
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  sign: {
    color: "white",
    textDecoration: "none",
    marginLeft: "10px"
  }
};

export default withStyles(styles)(Header);
