import styles from '../../../style';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={`w-full bg-gray-800`}>

      <div className={`${styles.flexCenter} flex-col p-16`}>
        <p className={`text-[17px] leading-8 text-center text-white`}>
          جاري العمل على إضافة المزيد من الخصائص لتصبح اللغة أداة تطوير
          للتطبيقات والمواقع لممارسي مهنة البرمجة ومحترفيها
        </p>

        <NavLink to="/Register"
          className={`${styles.greenBtn}  mt-10`}>
          إبدأ الآن
        </NavLink>
      </div>

      <div className="bg-gray-700 text-center text-white">
        <p className="p-2">لغة عرب - جميع الحقوق محفوظة © 2022</p>
      </div>

    </footer>
  );
};

export default Footer;