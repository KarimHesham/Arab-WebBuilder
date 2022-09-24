import { docs } from '../../../style';

import { useEffect } from 'react';

const Overview = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <section dir='rtl' className={`${docs.pageLayout}`}>
      <div className={`${docs.section}`}>
        <h1 className={`${docs.heading1} mt-`}>نظرة عامة</h1>
        <h2 className={`${docs.heading2} text-right`}>بناء الموقع</h2>
        <p className={`${docs.text}`}>.أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ، الاحتياجات الأكبر لرفض المتعة ، من الصعب جدًا إجراء قطع سلس! عبث أولئك الذين يرفضون محبة المبارك شيء لا تتبعه الأخوات الان</p>
      </div>
    </section>
  )
}

export default Overview