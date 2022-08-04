import React from "react";

const Support = () => {
  return (
    <section id="support" className="section">
      <div className="flex flex-col items-center space-y-8 text-justify">
        <h2 className="section-title">المساهمه</h2>
        <p className="body-text">
          نرحب بكل المساهمات من المبرمجين والمصممين سواء لتصميم موقع لغة (عرب)
          أو إضافة خصائص جديدة للغة (عرب) أو بناء برامج باستخدام لغة (عرب).
        </p>
      </div>

      <div className="flex items-center justify-center">
        <a href="https://arabcode.ae/Home/Contribute" className="button">
          ساهم معنا
        </a>
      </div>
    </section>
  );
};

export default Support;
