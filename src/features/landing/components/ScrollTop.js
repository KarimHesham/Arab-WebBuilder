import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleVisibleButton = () => {
    setShowScrollTop(window.pageYOffset > 50);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <KeyboardArrowUpIcon
      className={`${
        showScrollTop ? "fixed" : "hidden"
      } w-10 h-10 bottom-2 lg:right-20 right-6 bg-green-600 rounded-full p-2 hover:scale-125 mx-auto z-10`}
      color="white"
      onClick={() => handleScrollUp()}
    />
  );
};

export default ScrollTop;
