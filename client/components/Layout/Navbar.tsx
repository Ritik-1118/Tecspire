"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const closeDropdown = () => setIsDropdownOpen(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }



    return (
        <nav className='w-full z-50 px-5 shadow-sm shadow-slate-500 fixed  font-medium text-white glass_effect'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href={ '/' }>
                    <div className='text-lg font-semibold italic hover:text-green-750 flex items-end h-full'>
                        <img src='/assets/logo.png' className='w-16' alt='Logo' />
                        <span className='text-3xl mb-2 font-bold'>TECSPIRE</span>
                    </div>
                </Link>

                <div className='md:hidden flex items-center'>
                    { isOpen ? <></> : <button onClick={ toggleMenu } className='focus:outline-none'>
                        < HiOutlineMenuAlt3 size={ 30 } />
                    </button> }

                </div>
                <div className='hidden md:flex gap-8 items-center'>
                    <Link href='/' className='hover:text-green-750 flex items-center'>Home</Link>
                    <Link href='/about' className='hover:text-green-750 flex items-center'>About</Link>
                    <Link href='' className='hover:text-green-750 flex items-center'>Contact</Link>
                </div>

            </div>

            <div
                className={ `fixed top-0 right-0 h-[100vh] glass_effect text-white w-64 transform transition-transform duration-700 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden  flex flex-col gap-8 p-8` }
            >
                <div className='text-lg font-semibold flex-row w-full justify-between italic  flex items-center'>
                    <span className='flex flex-row items-center'>
                        <img src='/assets/icon.svg' className='w-10' alt='Logo' />
                        TecSpire
                    </span>
                    <span
                        onClick={ toggleMenu }
                        className={ `hover:text-green-750 cursor-pointer transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'
                            }` }
                    >
                        <RxCross2 size={ 25 } />
                    </span>
                </div>
                <Link href='/' className='hover:text-green-750 justify-center  w-full items-center text-center' onClick={ toggleMenu }>Home</Link>
                <Link href='/about' className='hover:text-green-750 justify-center  w-full items-center text-center' onClick={ toggleMenu } >About</Link>
                <Link href='' className='hover:text-green-750 justify-center  w-full items-center text-center' onClick={ toggleMenu } >Contact</Link>

            </div>
        </nav>
    )
}

export default Navbar