import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Contacts
          </Typography>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
