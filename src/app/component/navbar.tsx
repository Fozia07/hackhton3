import { ChevronDown, Heart, LucideMenu, Search, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Menu from './menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


function Navbar() {
  return (
    <header className=" shadow-md bg-white max-w-screen-2xl mx-auto h-14 ">
      <div className="container mx-auto h-14  flex items-center justify-between  relative">
        {/* Logo Section */}
        <div className="flex justify-between">
          <h1 className="montserrat-700 text-2xl font-bold text-black ">
            Bandage
          </h1>
          <div className='md:hidden  '>
          <Sheet>
  <SheetTrigger><LucideMenu/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetDescription>
      <ul className=" flex flex-col items-center justify-center space-x-6">
          <li className="text-black-700 hover:text-blue-600 montserrat-700 "><Link href="/">Home</Link></li>
          <li className="text-black-700 hover:text-blue-600 montserrat-700 "><Link href="/product">Shop</Link></li>
          <li className="text-black-700 hover:text-blue-600 montserrat "><Link href="/about">About</Link></li>
          <li className="text-black-700 hover:text-blue-600 montserrat "><Link href="/gallary">Blog</Link></li>
          <li className="text-black-700 hover:text-blue-600 montserrat "><Link href="/contact">Contact</Link></li>
          <li className="text-black-700 hover:text-blue-600 montserrat "><Link href="/">Pages</Link></li>
          
        </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>

        </div>
         {/* Navigation Links */}
         <ul className=" hidden pt-56 md:pt-0 md:flex space-x-6">
          <li className="text-black-700 hover:text-blue-600 montserrat-700 text-2xl md:text-sm"><Link href="/">Home</Link></li>
          <li className="text-black-700 hover:text-blue-600 montserrat-700 text-2xl md:text-sm"><Link href="/product">Shop</Link></li>
          <li className="text-black-700 hover:text-blue-600 monserrat-700 text-2xl md:text-sm"><ChevronDown /></li>
          <li className="text-black-700 hover:text-blue-600 montserrat text-2xl md:text-sm"><Link href="/about">About</Link></li>
          <li className="text-black-700 hover:text-blue-600 montserrat text-2xl md:text-sm"><Link href="/gallary">Blog</Link></li>
          <li className="text-black-700 hover:text-blue-600 montserrat text-2xl md:text-sm"><Link href="/contact">Contact</Link></li>
          <li className="text-black-700 hover:text-blue-600 montserrat text-2xl md:text-sm"><Link href="/">Pages</Link></li>
          
        </ul>
        
            {/* Icons Section */}
        <div className="flex items-center w-60 h-14 mt-1 gap-4 md:gap-5   ">
           <User size={20} className="text-gray-600 hover:text-blue-600  gap-1"/>
          
          <button className="text-gray-600 hover:text-blue-600  gap-1">Login/Register</button>
          <button className="text-gray-600 hover:text-blue-600 gap-1">
            <Search size={20} /> 
          </button>
          <button className="text-gray-600 hover:text-blue-600  gap-1">
            <Heart size={20} />
          </button>
          <button className="text-gray-600 hover:text-blue-600 gap-1">
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