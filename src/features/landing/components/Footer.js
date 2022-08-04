import React from "react";

const Footer = () => {
  return (
    <footer className="space-y-8 bg-gray-800 text-white pt-20">
      <div className="flex items-center flex-col space-y-16 pt-20 pb-20 px-8 lg:px-28">
        <p className="section-content">
          جاري العمل على إضافة المزيد من الخصائص لتصبح اللغة أداة تطوير
          للتطبيقات والمواقع لممارسي مهنة البرمجة ومحترفيها
        </p>

        <a className="button" href="/">
          إبدأ الآن
        </a>
      </div>
      <div className="bg-gray-700 text-center">
        <p className="p-2">لغة عرب - جميع الحقوق محفوظة © 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
