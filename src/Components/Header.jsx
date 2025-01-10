import React, { useState } from 'react';
import Logo from '../assets/Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="p-5 flex justify-between items-center bg-[#F8F8FD] ">
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-5">
        <img src={Logo} alt="Logo" />
        {/* Navigation links (visible on medium and larger screens) */}
        <nav className="hidden md:flex space-x-5">
          <a href="#" className="capitalize text-[#515B6F] font-semibold hover:text-skyBlue">
            Find Jobs
          </a>
          <a href="#" className="capitalize text-[#515B6F] font-semibold hover:text-skyBlue">
            Browse Company
          </a>
        </nav>
      </div>

      {/* Right Section - Login/Sign Up */}
      <div className="hidden md:flex items-center space-x-3">
        <a
          href="#"
          className="font-bold capitalize text-lg text-skyBlue hover:bg-skyBlue hover:text-white py-2 px-4 transition-all"
        >
          Login
        </a>
        <span className="border-[0.5px] border-[#D6DDEB] h-8"></span>
        <a
          href="#"
          className="font-bold capitalize text-lg text-skyBlue hover:bg-skyBlue hover:text-white py-2 px-4 transition-all"
        >
          Sign Up
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="block md:hidden text-skyBlue text-2xl focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-10 flex flex-col p-5 space-y-3 md:hidden">
          <a
            href="#"
            className="capitalize text-[#515B6F] font-semibold hover:text-skyBlue"
          >
            Find Jobs
          </a>
          <a
            href="#"
            className="capitalize text-[#515B6F] font-semibold hover:text-skyBlue"
          >
            Browse Company
          </a>
          <div className="flex flex-col space-y-3">
            <a
              href="#"
              className="font-bold capitalize text-lg text-skyBlue hover:bg-skyBlue hover:text-white py-2 px-4 transition-all"
            >
              Login
            </a>
            <a
              href="#"
              className="font-bold capitalize text-lg text-skyBlue hover:bg-skyBlue hover:text-white py-2 px-4 transition-all"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
