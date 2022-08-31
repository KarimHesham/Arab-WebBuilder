import { Navbar, Header, What, Features, Support, Footer, ScrollTop } from "./components";

import styles from "../../style";

const Landing = () => (

  <div className='w-full overflow-hidden'>

    {/* navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter} fixed top-0 left-0 right-0 z-10 shadow-md navbar-bg`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    {/* navbar */}

    {/* Header section */}
    <div className={`bg-gray-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Header />
      </div>
    </div>
    {/* Header section */}

    {/* sections */}
    <div className={`bg-gray-100 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <What />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart} bg-gray-gradient`}>
      <div className={`${styles.boxWidth}`}>
        <Features />
      </div>
    </div>

    <div className={`bg-gray-100 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Support />
      </div>
    </div>
    
    <Footer />
    {/* sections */}

    <ScrollTop />

  </div>
);

export default Landing;