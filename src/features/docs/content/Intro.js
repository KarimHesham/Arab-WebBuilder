import { docs } from "../../../style";
import img1 from '../../../assets/grapesjs-front-page-m.jpg';

import { useEffect } from 'react';

const Intro = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <section dir="rtl" className={`${docs.pageLayout}`}>
      <div className={`${docs.section}`}>
        <h1 className={`${docs.heading1}`}>مقدمة</h1>
        <h2 className={`${docs.heading2}`}>لغة العرب</h2>
        <p className={`${docs.text}`}>أبجد هوز حطى كلمن هوى ، حسومات محسنة. امتنع عن سعادتها الحكيمة ، من خارجها ، وتملقها ، ألا تعرف كيف تتحرر من بعض المستكشف المولود للعقل أنه كذلك؟ بالنسبة لبعض الآلام ، ولكن هذا ليس من الحكمة إدارة الأيدي الكبيرة ، يتبع ممارسة المتعة هنا. إعاقة آلام طبيعة الهروب بحيث يتم إبرام جميع المحاضرين الرئيسيين بشكل فاسد.</p>
        <div className={`${docs.imgContainer}`}>
          <img className={`${docs.img}`} src={img1} alt="" />
          <p className={`${docs.imgText}`}>.أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ، الاحتياجات</p>
        </div>
      </div>

      <hr className="style-six" />

      <div className={`${docs.section}`}>
        <h2 className={`${docs.heading2}`}>عنوان الليست</h2>
        <ul className={`${docs.unorderedList}`}>
          <li>.أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ، الاحتياجات الأكبر لرفض المتعة ، من الصعب</li>
          <li>.أبجد هوز حطى كلمن هوى ، إجراءات المراقبة</li>
          <li>.أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ، الاحتياجات الأكبر لرفض المتعة ، من الصعب</li>
          <li>.أبجد هوز حطى كلمن هوى ، إجراءات المراقبة</li>
        </ul>

        <div className={`${docs.noteContainer}`}>
          <p className={`${docs.containerText}`}><strong>ملحوظة: </strong> .أبجد هوز حطى كلمن هوى ، حسومات محسنة. ليس من السهل الحصول على المتعة الجسدية التي تسمى عقبة عندما يكون من الحكمة أن يتبعها يتجنب المصنعون التخلي عن آلامهم التي أعمتها أحكام الرفض ، الذين اكتشفوا الحقيقة! إذا كان واحد منهم عظيم!</p>
        </div>
      </div>

      <hr className="style-six" />

      <div className={`${docs.section}`}>
        <h2 className={`${docs.heading2}`}>عنوان الليست</h2>
        <ol className={`${docs.orderedList}`} style={{ listStyle: "arabic-indic" }}>
          <li>.أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ، الاحتياجات الأكبر لرفض المتعة ، من الصعب</li>
          <li>.أبجد هوز حطى كلمن هوى ، إجراءات المراقبة</li>
          <li>.أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ، الاحتياجات الأكبر لرفض المتعة ، من الصعب</li>
          <li>.أبجد هوز حطى كلمن هوى ، إجراءات المراقبة</li>
        </ol>

        <div className={`${docs.codeContainer}`}>
          <p className={`${docs.containerText}`}>
            .أبجد هوز  حطى<br />
            .أبجد هوز حطى كلمن هوى ، إجراءات المراقبة<br />
            .أبجد هوز  حطى<br />
            .أبجد هوز  حطى<br />
            .أبجد هوز حطى كلمن هوى ، إجراءات المراقبة
          </p>
        </div>

        <p className={`${docs.text}`}>.أبجد هوز حطى كلمن هوى ، حسومات محسنة. امتنع عن سعادتها الحكيمة ، من خارجها ، وتملقها ، ألا تعرف كيف تتحرر من بعض المستكشف المولود للعقل أنه كذلك؟ بالنسبة لبعض الآلام ، ولكن هذا ليس من الحكمة إدارة الأيدي الكبيرة ، يتبع ممارسة المتعة هنا. إعاقة آلام طبيعة الهروب بحيث يتم إبرام جميع المحاضرين الرئيسيين بشكل فاسد.</p>

        {/* table */}
        <div className={`${docs.tableContainer}`}>
          <table className={`${docs.table}`}>

            <thead className={`${docs.thead}`}>
              <tr>
                <th className={`${docs.thTitle1}`}>.أبجد هوز  حطى</th>
                <th className={`${docs.thTitle2}`}>.أبجد هوز  حطى</th>
              </tr>
            </thead>

            <tbody className={`${docs.tbody}`}>
              <tr>
                <td className={`${docs.td1}`}>
                  .أبجد هوز  حطى
                </td>
                <td className={`${docs.td2}`}>
                  .أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ، الاحتياجات الأكبر لرفض المتعة ، من الصعب
                </td>
              </tr>

              <tr>
                <td className={`${docs.td1}`}>
                  .أبجد هوز  حطى
                </td>
                <td className={`${docs.td2}`}>
                  .أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ، الاحتياجات الأكبر لرفض المتعة ، !من الصعب جدًا إجراء قطع سلس عبث
                </td>
              </tr>

              <tr>
                <td className={`${docs.td1}`}>
                  .أبجد هوز  حطى
                </td>
                <td className={`${docs.td2}`}>
                  .أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ، الاحتياجات الأكبر لرفض المتعة ، من الصعب جدًا إجراء قطع سلس! عبث أولئك الذين يرفضون محبة المبارك شيء لا تتبعه الأخوات الان
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      <hr className="style-six" />

    </section>
  )
}

export default Intro;