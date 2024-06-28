import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>
        <Link to="/logs">Captain Logs</Link>
      </h1>
      <ul>
        <li>
          <Link to="/logs/new">Add Log</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
