import styles from "../../../style";

const Support = () => (
  <section id="support" dir="rtl" className={`${styles.flexCenter} flex-col ${styles.paddingY}`}>
    <div className={`${styles.flexCenter} flex-col`}>
      <h2 className={`${styles.heading2}`}>المساهمه</h2>
      <p className={`${styles.paragraph} ${styles.padding}`}>
        نرحب بكل المساهمات من المبرمجين والمصممين سواء لتصميم موقع لغة (عرب)
        أو إضافة خصائص جديدة للغة (عرب) أو بناء برامج باستخدام لغة (عرب)
        {'.'}
      </p>
    </div>

    <div className={`${styles.flexCenter}`}>
      <a href="https://arabcode.ae/Home/Contribute" className={`${styles.whiteBtn}`}>
        ساهم معنا
      </a>
    </div>
  </section>
);

export default Support;