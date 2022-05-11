import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import "../../styles/Layout.css";

const Layout = (props) => {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>
      <main className="container">{props.children}</main>
    </>
  );
};

export default Layout;
