import React from 'react';
import Logo from '../assets/Logo.png';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col r md:flex-row md:justify-between">
        <div className="w-[400px]">
        <img src={Logo} alt="" />
        <p className="mt-2 text-gray-400 p-[10px]">Great platform for the job seeker that passionate about startups. Find your dream job easier..</p>
        </div>
         

          {/* Middle section: Links */}
          <div>
            <h3 className="font-semibold text-lg">About</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white capitalize">company</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white capitalize">price</a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white capitalize">advices</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white capitalize">privacy policy</a>
              </li>
            </ul>
          </div>
          
          
          <div>
            <h3 className="font-semibold text-lg capitalize">resources</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white capitalize">help doc</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white  capitalize">guide</a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white  capitalize">update</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white capitalize">contact us</a>
              </li>
            </ul>
          </div>

        
          
          <div >
            <h3 className="font-semibold text-lg">Get jobs notifcation</h3>
            <p className="mt-2 text-gray-400">The latest job news, articles, sent to your inbox weekly..</p>
            <div className="flex ">
                <input type="text" 
                className='p-[7px] text-gray-600 focus:border-2 focus:border-skyBlue ' 
                placeholder='Email address'
                />
                <button className="bg-skyBlue p-2">Search my job</button>
            </div>
          </div>

        













        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
