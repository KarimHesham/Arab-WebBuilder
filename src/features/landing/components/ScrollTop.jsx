import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import styles from "../../../style";

const ScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleVisibleButton = () => {
    setShowScrollTop(window.pageYOffset > 50);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0});
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <div
      className={`${showScrollTop ? "fixed" : "hidden"} bottom-3 md:bottom-5 right-3 md:right-5 w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-green-700 hover:scale-110 transition-transform shadow-md z-10 cursor-pointer`}
      onClick={() => handleScrollUp()}
    >
      <KeyboardArrowUpIcon
        fontSize="large"
        className={`w-[50%] h-[50%] object-contain text-white`}
      />
    </div >
  );
};

export default ScrollTop;