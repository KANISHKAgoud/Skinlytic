"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full z-50 relative overflow-hidden">
      {/* Main Navbar */}
      <div className="flex w-full justify-between p-4 px-7 items-center font-bold bg-white shadow-md">
        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            // Close Icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Logo */}
        <div className="text-3xl text-black">Skinlytic</div>

        {/* Desktop Navigation */}
        <div className="hidden list-none lg:flex gap-8 text-black">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="text-black">
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/symptoms">Your Symptoms</Link>
          </li>
          <li>
            <Link href="/Upload-Photo">Upload Photo</Link>
          </li>
          <li>
            <Link href="/how-it-works">How It Works?</Link>
          </li>
        </div>
        <div className="hidden lg:block list-none">
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
        </div>
      </div>

      {/* Mobile Sidebar Navigation - Added lg:hidden to hide on large screens */}
      <div
        ref={sidebarRef}
        className={`lg:hidden fixed top-7 left-0 w-[60%] bg-[#2b2a2a] text-black list-none flex flex-col h-[30%] py-5 gap-y-4 overflow-y-auto transition-transform duration-300 transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        {/* ... rest of your mobile sidebar content remains the same ... */}
        <li className="cursor-pointer flex gap-3 items-center px-5 text-black">
          
          <div className="text-white flex flex-col gap-4">

          <Link href="/" onClick={() => setShowMenu(false)}>
           Home
          </Link>
          <Link href="/about" onClick={() => setShowMenu(false)}>
          About
          </Link>
          <Link href="/symptoms" onClick={() => setShowMenu(false)}>
           Symptoms
          </Link>
          <Link href="/Upload-Photo" onClick={() => setShowMenu(false)}>
           Upload
          </Link>
          <Link href="/how-it-works" onClick={() => setShowMenu(false)}>
           How it Works?
          </Link>
          </div>
          
        </li>
        {/* ... other list items ... */}
      </div>
    </div>
  );
};

export default Navbar;