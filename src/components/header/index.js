import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">React and D3 Playground</h1>
      <Link className="links" to="./">
        Home
      </Link>
    </div>
  );
};

export default Header;
