import React, { useEffect, useState } from "react";
import "../../styles/ToTopBtn.css";

const ToTopBtn = () => {
  const [scrollBtnIsShown, setScrollBtnIsShown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setScrollBtnIsShown(true);
      } else {
        setScrollBtnIsShown(false);
      }
    });
  }, []);

  const goToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scrollBtnIsShown && (
        <button className="totopbtn" onClick={() => goToTopHandler()}>
          <i className="ri-arrow-up-s-fill"></i>
        </button>
      )}
    </>
  );
};

export default ToTopBtn;
