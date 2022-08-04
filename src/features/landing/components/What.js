import React from "react";

const What = () => {
  return (
    <section className="section">
      <h4 className="section-title">ما هى؟</h4>
      <p className="body-text">
        محرك عرب هى أداه تتيح للمستخدم كل الأدوات المطلوبه لبناء و تطوير صفحات
        المواقع الإلكترونيه، يمكن للمستخدم بناء هياكل واجهات المستخدم بسهوله و
        بدون الحاجه لخلفيه فى مجال البرمجيات، و يمكن استخدام لغة عرب لإضافه
        خصائص و تفاعل للواجهات التى تم تصميمها و تحويلها إلى صفحات إلكترونيه
        متكامله
      </p>
      <p className="body-text">
        اذا كنت هنا لبناء صفحات المواقع بشكل سريع احتفظ بهذه الصفحه كمرجع
      </p>
      <br />

      <div className="relative h-250 lg:h-500 lg:w-80 mx-auto mt-20">
        <div className="absolute top-0 right-0 box-border overflow-hidden w-1/2 lg:w-9/12 min-w-img">
          <img
            className="block w-full"
            src="https://grapesjs.com/img/grapesjs-front-page-m.jpg"
            alt=""
            width={600}
            height={400}
          />
        </div>

        <div className="absolute top-24 left-0 box-border overflow-hidden w-1/2 lg:w-9/12 min-w-img">
          <img
            className="block w-full"
            src="https://grapesjs.com/img/sc-grapesjs-newsletter-demo.jpg"
            alt=""
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default What;
