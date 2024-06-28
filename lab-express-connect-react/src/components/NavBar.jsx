// NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <h1>
        <Link to="/logs">Captain Logs</Link>
      </h1>
      <ul>
        <li>
          <Link to="/logs/new">New Log</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
