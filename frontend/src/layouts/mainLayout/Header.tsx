import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <h2>LOGO</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/my-tasks">My Tasks</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/auth/sign-up">Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
