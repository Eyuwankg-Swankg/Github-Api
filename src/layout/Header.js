import { auth } from "firebase";
import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Context from "../context/Context";
const Header = () => {
  const { authorized, setAuthorized } = useContext(Context);
  const style = {
    textDecoration: "none",
    color: "snow",
    cursor: "pointer",
  };
  return (
    <div id="header">
      <div style={{ cursor: "pointer" }}>
        <Link to="/" style={style}>
          Github-Repo
        </Link>
      </div>
      {authorized ? (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setAuthorized(!authorized)}
        >
          Logout
        </div>
      ) : (
        <ul id="list">
          <li>
            <Link to="/signup" style={style}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/signin" style={style}>
              Sign In
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
