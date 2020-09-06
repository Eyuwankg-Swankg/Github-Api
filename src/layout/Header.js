import React from "react";
import {Link} from "react-router-dom"
const Header = ({ authorized }) => {
    const style = {
      textDecoration: "none",
      color: "snow",
    };
  return (
    <div id="header">
      <div style={{ cursor: "pointer" }}>
        <Link to="/" style={style}>Github-Repo</Link>
      </div>
      {authorized ? (
        <div>Logout</div>
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
