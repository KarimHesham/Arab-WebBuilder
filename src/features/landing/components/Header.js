import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100">
      {/* Navbar Logo */}
      <div className="flex flex-col lg:flex-row justify-between items-center flex-grow space-y-12 pt-4 px-24 pb-0">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <img
            // onClick={}
            src="https://arabcode.ae/images/arab-logo.png"
            alt=""
            width={200}
            height={55}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Navbar Links */}
        <div className="flex items-center text-sm md:text-lg space-x-6 whitespace-nowrap">
          <div className="link">
            <a href="#support">الدعم</a>
          </div>
          <div className="link">
            <a href="#features">الخصائص</a>
          </div>
          <div href="#" className="link">
            <a href="http://arabcode.ae/Docs/Intro">دليل المستخدم</a>
          </div>
          <div className="link">
            <a href="https://arabcode.ae">موقع عرب</a>
          </div>
        </div>

        {/* Navbar CTA */}
        <div className="link">
          <a
            href="/"
            className="px-6 py-2 rounded-md text-center border-green-600 border-2
                bg-green-600 text-white hover:bg-white hover:text-green-600"
          >
            تسجيل الدخول
          </a>
        </div>
      </div>

      {/* Title & CTA */}
      <section className="section">
        <div className="flex items-center flex-col flex-grow space-y-6">
          <div className="tagline">
            <h2>
              إطار عمل لبناء صفحات المواقع الإلكترونيه
              <br></br>
              <span className="text-lg">أداة بناء واجهات المستخدم بسهوله</span>
            </h2>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <a
              className="button"
              href="http://waleedbaz-002-site1.htempurl.com/grapes/build/index.html"
            >
              تجربه
            </a>
            <a href="/" className="button">
              إبدأ الآن
            </a>
          </div>

          <div className="lg:hidden p-10 border-4 text-center border-red-800">
            عذراً، شاشة جهازك لا تكفى لتجربة المحرك
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
