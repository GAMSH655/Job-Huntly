import React from 'react';
import Logo from '../assets/Logo.png';
import { FaFacebook , FaInstagram , FaDribbble , FaTwitter , FaLinkedinIn } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
        <img src={Logo} alt="" />
          <p className="text-sm mt-[20px]">
            Great platform for the job seeker that passionate about startups. Find your dream job easier.
          </p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Companies</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Advice</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Help Docs</a></li>
            <li><a href="#" className="hover:text-white">Guide</a></li>
            <li><a href="#" className="hover:text-white">Updates</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4">Get job notifications</h3>
          <p className="text-sm mb-4">
            The latest job news, articles, sent to your inbox weekly.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 rounded-r-md hover:bg-indigo-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 flex justify-evenly items-center">
        <p className="text-sm">&copy; 2021 JobHuntly. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white"> {/* Replace with actual social icons */}
            <FaFacebook/>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram/>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
          <FaDribbble/>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
          <FaTwitter/>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
           <FaLinkedinIn/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
