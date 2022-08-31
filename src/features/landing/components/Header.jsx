import styles from '../../../style';

const Header = () => {
  return (
    <section id="home" className={`${styles.paddingY} ${styles.flexCenter} h-screen`}>
      {/* left part of hero section */}
      <div className={`${styles.flexCenter} flex-col xl:px-0 md:px-16 px-3`}>
        <h1 className='flex-1 font-semibold md:text-[64px] text-[40px] text-center md:leading-[90px] leading-[70px] mb-[20px] text-green-700'>
          إطار عمل لبناء صفحات المواقع الإلكترونيه
        </h1>
        <h2 className={`${styles.heading2} mb-[40px] md:mb-[60px]`}>
          أداة بناء واجهات المستخدم بسهوله
        </h2>

        <div className="hidden lg:flex items-center space-x-6">
          <a
            className={`${styles.whiteBtn}`}
            href="http://waleedbaz-002-site1.htempurl.com/grapes/build/index.html"
          >
            تجربه
          </a>

          <a href="/"
            className={`${styles.greenBtn}`}>
            إبدأ الآن
          </a>
        </div>

        <div className="lg:hidden bg-white text-[18px] p-8 border-4 text-center border-red-800 rounded-xl">
          عذراً، شاشة جهازك لا تكفى لتجربة المحرك
        </div>

      </div>
    </section>
  );
};

export default Header;