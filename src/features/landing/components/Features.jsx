import styles, { layout } from "../../../style";

import feature1 from '../../../assets/sc-grapesjs-blocks-prp.jpg';
import feature2 from '../../../assets/sc-grapesjs-responsive-2.jpg';
import feature3 from '../../../assets/sc-grapesjs-code.jpg';

const Features = () => {
  return (
    <section id="features" className={`flex flex-col ${styles.paddingY}`}>
      <h2 className={`${styles.heading2}`}>الخصائص</h2>

      {/* feature 1 */}
      <div className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
          <h3 className={`${styles.heading3}`}>مكعبات سحب و إفلات</h3>
          <p dir="rtl" className={`${styles.paragraph}`}>
            يأتى محرك عرب بخواص داخليه لدعم سهوله بناء واجهات المستخدم للصفحات
            الإلكترونية
            {'.'}
          </p>
        </div>

        <div className={`${layout.sectionImg} max-w-[344x]`}>
          <img
            className="w-[full] rounded shadow-lg"
            src={feature1}
            alt=""
          />
        </div>
      </div>
      <hr className="style-two" />

      {/* feature 2 */}
      <div className={`${layout.sectionReverse}`}>
        <div className={`${layout.sectionImgReverse} max-w-[1200px]`}>
          <img
            className="w-[full] rounded shadow-lg"
            src={feature2}
            alt=""
          />
        </div>

        <div className={`${layout.sectionInfo}`}>
          <h3 className={`${styles.heading3}`}>مكعبات سحب و إفلات</h3>
          <p dir="rtl" className={`${styles.paragraph}`}>
            يأتى محرك عرب بخواص داخليه لدعم سهوله بناء واجهات المستخدم للصفحات
            الإلكترونية
            {'.'}
          </p>
        </div>
      </div>
      <hr className="style-two" />

      {/* feature 3 */}
      <div className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
          <h3 className={`${styles.heading3}`}>مكعبات سحب و إفلات</h3>
          <p dir="rtl" className={`${styles.paragraph}`}>
            يأتى محرك عرب بخواص داخليه لدعم سهوله بناء واجهات المستخدم للصفحات
            الإلكترونية
            {'.'}
          </p>
        </div>

        <div className={`${layout.sectionImg} max-w-[800px]`}>
          <img
            className="w-[full] rounded shadow-lg"
            src={feature3}
            alt=""
          />
        </div>
      </div>
    </section >
  );
};

export default Features;