import React from "react";
import News from "../../components/News/News";
import ToTopBtn from "../../components/ToTopBtn/ToTopBtn";
import "../../styles/Newspage.css";

const Newspage = () => {
  return (
    <div className="newspage">
      <h1 className="newspage__heading">See what's up in the crypto world</h1>
      <News />
      <ToTopBtn />
    </div>
  );
};

export default Newspage;
