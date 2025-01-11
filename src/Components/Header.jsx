import React, { useState } from "react";
import logo from "../src/assets/logo.png"
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="JobHuntly"/>
        </div>

        {/* Menu items (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <a href="#find-jobs" className="text-gray-600 hover:text-gray-900">
            Find Jobs
          </a>
          <a href="#browse-companies" className="text-gray-600 hover:text-gray-900">
            Browse Companies
          </a>
          <a href="#login" className="text-gray-600 hover:text-gray-900">
            Login
          </a>
          <a
            href="#sign-up"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </a>
        </nav>

        {/* Menu button (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
        >
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
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <a
            href="#find-jobs"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Find Jobs
          </a>
          <a
            href="#browse-companies"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Browse Companies
          </a>
          <a
            href="#login"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Login
          </a>
          <a
            href="#sign-up"
            className="block px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
          >
            Sign Up
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
