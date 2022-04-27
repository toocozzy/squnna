import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
