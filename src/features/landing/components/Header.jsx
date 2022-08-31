import styles from "../../../style";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section
      id="home"
      className={`${styles.paddingY} ${styles.flexCenter} h-screen`}
    >
      {/* left part of hero section */}
      <div className={`${styles.flexCenter} flex-col xl:px-0 md:px-16 px-3`}>
        <h1 className="flex-1 font-semibold md:text-[64px] text-[40px] text-center md:leading-[90px] leading-[70px] mb-[20px] text-green-700">
          إطار عمل لبناء صفحات المواقع الإلكترونيه
        </h1>
        <h2 className={`${styles.heading2} mb-[40px] md:mb-[60px]`}>
          أداة بناء واجهات المستخدم بسهوله
        </h2>

        <div className="hidden lg:flex items-center space-x-6">
          <NavLink
            className={`${styles.whiteBtn}`}
            to="/demo"
            target="_blank"
            rel="noreferrer"
          >
            تجربه
          </NavLink>

          <NavLink to="/register" className={`${styles.greenBtn}`}>
            إبدأ الآن
          </NavLink>
        </div>

        <div className="lg:hidden bg-white text-[18px] p-8 border-4 text-center border-red-800 rounded-xl">
          عذراً، شاشة جهازك لا تكفى لتجربة المحرك
        </div>
      </div>
    </section>
  );
};

export default Header;
