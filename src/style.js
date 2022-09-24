const styles = {
    boxWidth: "2xl:max-w-[1280px] w-full",

    heading2: "text-center font-semibold md:text-[40px] text-[32px] md:leading-[80px] leading-[50px] w-full mt-3",
    heading3: "text-center font-medium md:text-[30px] text-[22px] md:leading-[60px] leading-[40px] w-full mb-[20px] text-red-700",
    paragraph: "text-gray-700 font-normal text-right text-[17px] leading-[33px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexEnd: "flex justify-center items-end",

    paddingX: "md:px-16 px-6",
    paddingY: "md:py-16 py-9",
    padding: "md:px-16 px-6 md:py-12 py-4",

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

// docs styling
export const docs = {
    navLink: "block text-gray-500 text-[18px] leading-[35px] px-2 my-2",

    pageLayout: "px-3",
    section: "md:py-8 py-4",

    heading1: "text-center text-[#2c3e50] font-bold md:text-[40px] text-[30px] w-full",
    heading2: "text-right text-[#2c3e50] font-medium md:text-[28px] text-[24px] w-full",
    text: "text-right text-gray-600 text-[17px] leading-[35px] mt-6",

    imgContainer: "lg:w-[80%] w-[400px] mx-auto mt-10",
    img: "max-w-full rounded-md shadow-md",
    imgText: "text-center text-gray-500 leading-[30px] mt-3",

    unorderedList: "list-disc text-gray-600 px-10 text-gray-700 font-medium text-[17px] leading-[35px] mt-4",
    orderedList: "text-gray-600 px-10 text-gray-700 font-medium text-[17px] leading-[35px] mt-4",

    noteContainer: "bg-[#FFFFCC] py-[16px] px-[32px] rounded-lg shadow-lg mt-10",
    codeContainer: "bg-[#282c34] text-[#7ec699] py-[16px] px-[32px] rounded-lg shadow-lg mt-10",
    containerText: "my-[15px] leading-[30px]",

    tableContainer: "mt-10 w-full inline-block align-middle overflow-hidden border rounded-lg",
    table: "min-w-full divide-y divide-gray-200",
    thead: "bg-gray-50",
    thTitle1: "px-6 py-3 text-sm font-bold text-right text-gray-500 w-[20%]",
    thTitle2: "px-6 py-3 text-sm font-bold text-right text-gray-500",
    tbody: "divide-y divide-gray-200 bg-gray-100",
    td1: "px-6 py-4 text-md font-medium text-gray-800",
    td2: "px-6 py-4 text-md text-gray-800"
};

export default styles;