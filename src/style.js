// put text-color in paragraph
const styles = {
    boxWidth: "2xl:max-w-[1280px] w-full",

    heading2: "text-center font-semibold md:text-[40px] text-[32px] md:leading-[80px] leading-[50px] w-full mt-3",
    heading3: "text-center font-medium md:text-[30px] text-[22px] md:leading-[60px] leading-[40px] w-full mb-[20px] text-red-700",
    paragraph: "font-normal text-right text-[17px] leading-[33px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexEnd: "flex justify-center items-end",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-9",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "md:mx-16 mx-6",
    marginY: "md:my-16 my-6",

    whiteBtn: "px-16 py-4 text-[26px] font-semibold border-2 border-green-600 rounded-xl hover:border-green-700 transition-all text-green-600 hover:text-green-700 bg-white hover:bg-slate-50 hover:shadow-lg",
    greenBtn: "px-16 py-4 text-[26px] font-semibold border-2 border-green-600 rounded-xl hover:border-green-700 transition-all text-white hover:text-slate-50 bg-green-600 hover:bg-green-700 hover:shadow-lg"
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;