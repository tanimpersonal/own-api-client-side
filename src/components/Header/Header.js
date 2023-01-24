import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/save-user">New User</Link>
          </li>
          <li>
            <Link to="/random">Random User</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
