import React from "react";
import "../../styles/Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo__container">
        <span className="logo">squnna</span>
      </div>
    </Link>
  );
};

export default Logo;
