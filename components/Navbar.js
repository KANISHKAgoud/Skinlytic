"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showmenu, setshowmenu] = useState(false);

  return (
    <div className="w-full z-50 relative">
      {/* Main Navbar */}
      <div className="flex justify-between p-4 px-7 items-center font-bold">
        <div className="text-3xl">Skinlytic</div>

        {/* Desktop Navigation */}
        <div className="hidden list-none lg:flex gap-8">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/upload">Upload Image</Link></li>
          <li><Link href="/how-it-works">How It Works?</Link></li>
        </div>
        <div className="hidden lg:block list-none">
          <li><Link href="/signup">Sign Up</Link></li>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setshowmenu(!showmenu)}>
          <i className={`fa-solid ${showmenu ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Sidebar Navigation */}
      <div
        className={`absolute top-0 left-0 w-[60%] bg-[#2b2a2a] text-white list-none flex flex-col h-screen py-5 gap-y-4 transition-transform duration-300
          ${showmenu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <li className="cursor-pointer flex gap-3 items-center px-5">
          <i className="fa-solid fa-house"></i>
          <Link href="/" onClick={() => setshowmenu(false)}>Home</Link>
        </li>
        <li className="cursor-pointer flex gap-3 items-center px-5">
          <i className="fa-solid fa-address-card"></i>
          <Link href="/about" onClick={() => setshowmenu(false)}>About Us</Link>
        </li>
        <li className="cursor-pointer flex gap-3 items-center px-5">
          <i className="fa-solid fa-upload"></i>
          <Link href="/upload" onClick={() => setshowmenu(false)}>Upload Image</Link>
        </li>
        <li className="cursor-pointer flex gap-3 items-center px-5">
          <i className="fa-solid fa-question"></i>
          <Link href="/how-it-works" onClick={() => setshowmenu(false)}>How It Works?</Link>
        </li>
        <li className="cursor-pointer flex gap-3 items-center px-5">
          <i className="fas fa-user-alt"></i>
          <Link href="/signup" onClick={() => setshowmenu(false)}>Sign Up</Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
