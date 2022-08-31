import styles, { layout } from "../../../style";
import img1 from '../../../assets/grapesjs-front-page-m.jpg';
import img2 from '../../../assets/sc-grapesjs-newsletter-demo.jpg';


const What = () => (
  <section id='what' dir="rtl" className={`${styles.flexCenter} flex-col ${styles.paddingY}`}>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>ما هى؟</h2>
      <p className={`${styles.paragraph} max-w-[1000px] mt-6`}>
        محرك عرب هى أداه تتيح للمستخدم كل الأدوات المطلوبه لبناء و تطوير صفحات
        المواقع الإلكترونيه، يمكن للمستخدم بناء هياكل واجهات المستخدم بسهوله و
        بدون الحاجه لخلفيه فى مجال البرمجيات، و يمكن استخدام
        <span> <a className="text-red-600 hover:text-red-800 transition-colors underline underline-offset-8" href="https://arabcode.ae" target='_blank' rel="noreferrer">لغة عرب</a> </span>
        لإضافه
        خصائص و تفاعل للواجهات التى تم تصميمها و تحويلها إلى صفحات إلكترونيه متكامله
        {'.'}
      </p>
      <p className={`${styles.paragraph} max-w-[1000px] mt-4`}>
        اذا كنت هنا لبناء صفحات المواقع بشكل سريع احتفظ بهذه الصفحه كمرجع
        {'.'}
      </p>
    </div>

    <div className="block relative h-[250px] sm:h-[500px] max-w-[896px] w-[90%] my-10 md:my-15">
      <div className="absolute top-[100px] right-[0] w-[75%] min-w-[250px]">
        <img className="block w-full rounded shadow-lg" src={img1} alt="webpage demo" />
      </div>

      <div className="absolute top-[0] left-[0] w-[75%] min-w-[250px]">
        <img className="block w-full rounded shadow-lg" src={img2} alt="webpage demo" />
      </div>
    </div>


  </section>
);

export default What;