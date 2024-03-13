"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-20 w-full mx-auto px-4 text-lg  text-blue-500   shadow-md shadow-black-100 fixed'>
      <h1 className=' font-monow-full text-xl font-bold text-[#00df9a]'>WEB DEVELOPMENT</h1>
      <ul className='hidden md:flex'>
        <Link href="/" className='p-4'>HOME</Link>
        <Link href="/about" className='p-4'>ABOUT</Link>
        <Link href="/contact" className='p-4'>CONTACT</Link>
        
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-xl font-bold text-[#00df9a] m-4 font-monow-full'>WEB DEVELOPMENT</h1>
          <li className='p-4 border-b '><Link href="/">HOME</Link> </li>
          <li className='p-4 border-b '><Link href="/about">ABOUT</Link> </li>
          <li className='p-4 border-b '><Link href="/contact">CONTACT</Link> </li>
          
          
      </ul>
    </div>
  );
};

export default Navbar;