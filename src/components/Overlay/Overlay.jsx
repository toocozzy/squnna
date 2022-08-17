import React from "react";
import "../../styles/Overlay.css";
import { useLocation } from "react-router-dom";

const Overlay = () => {
  const location = useLocation();

  return (
    <>{location.pathname === "/home" && <div className="overlay"></div>}</>
  );
};

export default Overlay;
