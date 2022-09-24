import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';

import styles from "../../../style";

const Docs = () => {
    return (
        <div className='w-full bg-gray-gradient'>

            {/* navbar */}
            <div className={`${styles.paddingX} ${styles.flexCenter} fixed top-0 left-0 right-0 z-10 shadow-md navbar-bg`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            {/* navbar */}


            <div className={`${styles.paddingX} ${styles.flexCenter} `}>
                <div className={`${styles.boxWidth} flex`}>
                    <Content />
                    <Sidebar />
                </div>
            </div >

        </div >
    )
}

export default Docs