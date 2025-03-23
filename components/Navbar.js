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
        <div className="hidden list-none lg:flex gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
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

      {/* Mobile Sidebar Navigation */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-[60%] bg-[#2b2a2a] text-white list-none flex flex-col h-[50%] py-5 gap-y-4 overflow-y-auto transition-transform duration-300 transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 1000, border: "2px solid red" }} // Debugging border
      >
        <li className="cursor-pointer flex gap-3 items-center px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <Link href="/" onClick={() => setShowMenu(false)}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer flex gap-3 items-center px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <Link href="/about" onClick={() => setShowMenu(false)}>
            About Us
          </Link>
        </li>
        <li className="cursor-pointer flex gap-3 items-center px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <Link href="/symptoms" onClick={() => setShowMenu(false)}>
            Your Symptoms
          </Link>
        </li>
        <li className="cursor-pointer flex gap-3 items-center px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <Link href="/Upload-Photo" onClick={() => setShowMenu(false)}>
            Upload Photo
          </Link>
        </li>
        <li className="cursor-pointer flex gap-3 items-center px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <Link href="/how-it-works" onClick={() => setShowMenu(false)}>
            How It Works?
          </Link>
        </li>
        <li className="cursor-pointer flex gap-3 items-center px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <Link href="/signup" onClick={() => setShowMenu(false)}>
            Sign Up
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;