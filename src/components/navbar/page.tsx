"use client"

import React from 'react'
import Logo from '../Logo/page'
import Link from 'next/link'
import { FiMenu, } from 'react-icons/fi'
import { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.png'



function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const [navbar, setnavbar] = useState(false)
    const navigation = [
        { title: "Home", href: "/" },
        { title: "Features", href: "/" },
        { title: "About me", href: "/about" },
        { title: "Conatct me", href: "/contact" },
    ]
    return (

        <>
            <div className='w-full bg-white/70 h-16 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50 font-head'>
                <div className='max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full'>

                    <Logo title='Bloggers' className='text-black  hover:brightness-125 hover:opacity-85'></Logo>
                    <h2>
                        <Image
                            src={logo}
                            alt='logo.png'
                            className='w-40 opacity-20 max-md:hidden hover:opacity-100'
                        />
                    </h2>
                    <div className='hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-black duration-200'>
                        {navigation.map((item) => (
                            <Link
                                key={item?.title}
                                href={item?.href}
                                className='text-sm uppercase font-semibold relative group overflow-hidden'>
                                {item?.title}
                                <span className='w-full h-[1px] bg-blue-700 absolute inline-block left-0 bottom-0 translate-x-[100%]
                        group-hover:translate-x-0 transition-transform duration-200 '/>
                            </Link>


                        ))}
                    </div>
                    <div className='md:hidden'> {/* Only show on mobile devices */}
                        <button className='' onClick={() => setNavbarOpen(!navbarOpen)}>
                            {navbarOpen ? <FiMenu className='text-4xl text-red-800' /> : <FiMenu className='text-2xl' />}
                        </button>
                    </div>

                    {/* Mobile Navigation Menu (with styles) */}
                    <div className={`fixed top-0 left-0 h-[12rem] w-full bg-gray-300  z-50 transition-all duration-300 ease-in-out ${navbarOpen ? 'flex flex-col justify-center items-center' : 'hidden'}`}>
                        <ul className='text-black text-xl list-none gap-y-5 px-4 absolute left-0 top-12 font-head '>  {/* Added padding for better look */}
                            {navigation.map((item) => (
                                <li key={item.title} className='font-text'>
                                    <Link href={item.href} className='hover:text-blue-500'>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button className='absolute top-4 right-4 text-white hover:text-blue-500' onClick={() => setNavbarOpen(false)}>
                            <FiMenu className='text-2xl' />  {/* Consistent menu icon */}
                        </button>
                        <h1>
                            <Image
                           src={logo}
                            alt=''
                            className=' ml-8 h-[9rem] w-[15rem]'
                            />
                        </h1>
                    </div>




                </div>
            </div>

        </>


    )
}

export default Navbar