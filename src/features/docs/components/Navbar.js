import { NavLink } from 'react-router-dom';

import logo from '../../../assets/arab-logo.png';

const Navbar = () => {

    return (
        <nav className='w-full py-2 flex justify-end items-center'>

            {/* Serch Bar */}
            {/* <div className={`relative h-full`}>
                <input type="text" className={`bg-white border-0 h-full w-[200px] text-[18px] p-[10px] focus:outline-none`} placeholder="بحث" dir='rtl' />
                <button className={`bg-white border-0 h-full w-[50px] cursor-pointer text-[24px] absolute top-0 left-0 focus:outline-none`}>
                    <SearchIcon />
                </button>
            </div> */}

            {/* logo */}
            <NavLink to='/'>
                <img src={logo} alt="arab logo" className='w-[90px] h-[45px] object-contain' />
            </NavLink>

        </nav >
    );
}

export default Navbar;