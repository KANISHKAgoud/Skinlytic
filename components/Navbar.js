"use client"
import React from 'react'
import { useState } from 'react'



const Navbar = () => {
    const [showmenu, setshowmenu] = useState(false)

    return (
        <div className='absolute w-full z-50 '>
            <div className='flex justify-between p-4 px-7 items-center font-bold'>
                <div className='text-3xl'>
                    Skinlytic
                </div>
                <div className='hidden lg:flex list-none gap-8 '>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Upload Image</li>
                    <li>How It Works?</li>
                </div>
                <div className='hidden lg:block list-none'>
                    <li>Sign Up</li>
                </div>

                <button className='lg:hidden' onClick={() => setshowmenu(!showmenu)}>
                    <i className={`fa-solid ${showmenu ? "fa-xmark" : "fa-bars"}`}></i>
                </button>
            </div>

            <div className={`top-0 bg-[#2b2a2a] left-0 w-[40%]  text-white list-none flex flex-col justify-center h-[30vh] py-5 gap-y-4 transition-all duration-300 ${showmenu ? "translate-x-0" : "-translate-x-full"}`}>
                <li className='cursor-pointer flex gap-3 items-center' onClick={() => setshowmenu(false)}>
                <i className="fa-solid fa-house"></i>
                    Home</li>
                <li className='cursor-pointer flex gap-3 items-center' onClick={() => setshowmenu(false)}>
                <i className="fa-solid fa-address-card"></i>
                    About Us</li>
                <li className='cursor-pointer flex gap-3 items-center' onClick={() => setshowmenu(false)}>
                <i className="fa-solid fa-house"></i>
                Upload Image</li>
                <li className='cursor-pointer flex gap-3 items-center' onClick={() => setshowmenu(false)}>
                <i className="fa-solid fa-question"></i>
                How It Works?</li>
                <li className='cursor-pointer flex gap-3 items-center' onClick={() => setshowmenu(false)}>
                <i className="fas fa-user-alt"></i>
                Sign Up</li>

            </div>
        </div>
    )
}

export default Navbar
