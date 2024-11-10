"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // User state to manage login status

  // Simulate user login status (use actual authentication logic in a real app)
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user')); // Example way to check login
    if (loggedInUser) setUser(loggedInUser);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header sticky top-0 bg-blue-100 text-black shadow-md flex items-center justify-between p-3">
      {/* Logo and Links */}
      <nav className="flex items-center">
        <ul className="flex gap-4 items-center">
          <li className="mx-3">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </Link>
          </li>
          <li className="hidden md:block">
            <Link href="/" className="p-2 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500">Home</Link>
          </li>
          <li className="hidden md:block">
            <Link href="/announcement" className="p-2 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500">Announcement</Link>
          </li>
        </ul>
      </nav>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-4">
        {!user ? (
          <>
            <Link href="/signin" className="p-2 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500">Login</Link>
            <Link href="/signup" className="p-2 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500">Register</Link>
          </>
        ) : (
          <div className="flex items-center gap-3">
            {/* Profile section */}
            <Link href="/profile" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              <Image src={user.profileImage || "/default-profile.png"} alt="Profile" width={40} height={40} />
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          {/* Hamburger Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-blue-100 shadow-md">
          <ul className="flex flex-col items-center gap-4 p-4">
            <li><Link href="/" className="block p-2">Home</Link></li>
            <li><Link href="/announcement" className="block p-2">Announcement</Link></li>
            {!user ? (
              <>
                <li><Link href="/signin" className="block p-2">Login</Link></li>
                <li><Link href="/signup" className="block p-2">Register</Link></li>
              </>
            ) : (
              <li><Link href="/profile" className="block p-2">Profile</Link></li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
