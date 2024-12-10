import { ChevronDown, Heart, Search, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-evenly h-16">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="montserrat-700 text-2xl font-bold text-black ">
            Bandage
          </h1>
        </div>
         {/* Navigation Links */}
         <ul className=" pt-56 md:pt-0 md:flex space-x-6">
          <li className="text-black-700 hover:text-blue-600 montserrat-700 text-2xl md:text-sm"><Link href="/">Home</Link></li>
          <li className="text-black-700 hover:text-blue-600 montserrat-700 text-2xl md:text-sm"><Link href="/shop">Shop</Link></li>
          <li className="text-black-700 hover:text-blue-600 monserrat-700 text-2xl md:text-sm"><ChevronDown /></li>
          <li className="text-black-700 hover:text-blue-600 montserrat text-2xl md:text-sm"><Link href="/about">About</Link></li>
          <li className="text-black-700 hover:text-blue-600 montserrat text-2xl md:text-sm"><Link href="/gallary">Blog</Link></li>
          <li className="text-black-700 hover:text-blue-600 montserrat text-2xl md:text-sm"><Link href="/">Contact</Link></li>
          <li className="text-black-700 hover:text-blue-600 montserrat text-2xl md:text-sm"><Link href="/">Pages</Link></li>
          
        </ul>
        
            {/* Icons Section */}
        <div className="flex items-center sm:space-x-3 md:space-x-4 pr-4">
           <User size={20} className="text-gray-600 hover:text-blue-600"/>
          
          <button className="text-gray-600 hover:text-blue-600">Login/Register</button>
          <button className="text-gray-600 hover:text-blue-600">
            <Search size={20} />
          </button>
          <button className="text-gray-600 hover:text-blue-600">
            <Heart size={20} />
          </button>
          <button className="text-gray-600 hover:text-blue-600">
            <ShoppingCart size={20} />
          </button>
        </div>
        
        {/* Mobile Menu Button
        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none">
            <span className="sr-only">Open menu</span>
            ☰
          </button>
        </div> */}
       </div>
     </header>   
  )
}

export default Navbar