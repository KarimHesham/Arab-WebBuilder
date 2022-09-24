import { NavLink } from 'react-router-dom';

import { docs } from "../../../style";

const Sidebar = () => {
    return (
        <div dir='rtl' className={`hidden lg:block w-[250px] py-16`} style={{ borderLeft: "1px solid #bbb" }}>
            <nav className='fixed'>
                <NavLink to='/docs/intro' className={`${docs.navLink}`}>
                    مقدمة
                </NavLink>
                <NavLink to='/docs/overview' className={`${docs.navLink}`}>
                    نظرة عامة
                </NavLink>
            </nav>
        </div>
    )
}

export default Sidebar