import { FacebookIcon, Instagram, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
  const companyInfo = ["About us", "Career", "We are hiring", "Blog"];

  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* Top Section */}
      <div className="w-full bg-white shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-6 bg-yellow-50 shadow-md border-s-orange-100">
          <h1 className="montserrat-700 text-2xl font-bold">Bandage</h1>
          <div className="flex gap-4 mt-4 md:mt-0">
            {[FacebookIcon, Instagram, Twitter].map((Icon, index) => (
              <div
                key={index}
                className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 transition"
              >
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-20 py-10 text-center md:text-left">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="w-full">
                <h2 className="text-gray-900 montserrat-700 text-sm mb-3">
                  Company Info
                </h2>
                <nav className="list-none space-y-2">
                  {companyInfo.map((item, i) => (
                    <li key={i} className="montserrat-400 text-sm text-slate-500 hover:text-gray-800 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </nav>
              </div>
            ))}
        </div>

        {/* Bottom Section */}
        <div className="bg-white shadow-md px-6 py-4 text-center">
          <p className="montserrat-400 text-sm text-slate-500">
            Made With Love By Finland. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
