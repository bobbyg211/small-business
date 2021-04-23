import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <AppBar position="relative" className="navbar">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Small Business
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Listings</Link>
          </li>
          <li
            className="nav-list-item"
            onClick={() => {
              document.cookie = "loggedIn=";
              window.location.replace("/login");
            }}
          >
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
}
