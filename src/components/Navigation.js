import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
