import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import logo from '../../../assets/arab-logo.png';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full py-2 flex justify-between items-center'>

      {/* desktop */}
      <ul className='list-none hidden lg:flex justify-start items-center flex-1'>
        <li className='font-normal text-[18px] cursor-pointer hover:text-green-800 transition-colors mr-10'>
          <a href="https://arabcode.ae" target='_blank' rel="noreferrer">موقع عرب</a>
        </li>
        <li className='font-normal text-[18px] cursor-pointer hover:text-green-800 transition-colors mr-10'>
          <a href="http://arabcode.ae/Docs/Intro" target='_blank' rel="noreferrer">دليل المستخدم</a>
        </li>
        < li className='font-normal text-[18px] cursor-pointer hover:text-green-800 transition-colors mr-10' >
          <a href="#support">المساهمة</a>
        </li >
        <li className='font-normal text-[18px] cursor-pointer hover:text-green-800 transition-colors  mr-10'>
          <a href="#features">الخصائص</a>
        </li>
        < li className='font-normal text-[18px] cursor-pointer hover:text-green-800 transition-colors' >
          <a href="#what">ما هى</a>
        </li >
      </ul >

      {/* mobile */}
      <div className='lg:hidden flex flex-1 justify-start items-center' >

        {/* sidebar icons to toggle */}
        {toggle ? <CloseIcon className='w-[28px] h-[28px] cursor-pointer' onClick={() => setToggle((prev) => !prev)} />
          : <MenuIcon className='w-[28px] h-[28px] cursor-pointer' onClick={() => setToggle((prev) => !prev)} />
        }

        {/* sidebar */}
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute top-16 left-0 my-1 mx-1 min-w-[140px] rounded-xl sidebar bg-gray-gradient shadow-md`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            <li className='font-normal text-[16px] cursor-pointer mb-4'>
              <a href="#what" onClick={() => setToggle((prev) => !prev)}>ما هى</a>
            </li>
            <li className='font-normal text-[16px] cursor-pointer mb-4'>
              <a href="#features" onClick={() => setToggle((prev) => !prev)}>الخصائص</a>
            </li>
            <li className='font-normal text-[16px] cursor-pointer mb-4'>
              <a href="#support" onClick={() => setToggle((prev) => !prev)}>المساهمة</a>
            </li>
            <li className='font-normal text-[16px] cursor-pointer mb-4'>
              <a href="http://arabcode.ae/Docs/Intro" target='_blank' rel="noreferrer" onClick={() => setToggle((prev) => !prev)}>دليل المستخدم</a>
            </li>
            <li className='font-normal text-[16px] cursor-pointer'>
              <a href="https://arabcode.ae" target='_blank' rel="noreferrer" onClick={() => setToggle((prev) => !prev)}>موقع عرب</a>
            </li>
          </ul>
        </div>

      </div>

      {/* logo */}
      <img src={logo} alt="arab logo" className='w-[90px] h-[45px] object-contain' />

    </nav >
  );
}

export default Navbar;