import { FacebookIcon, Instagram, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-2xl mx-auto h-auto'>
        <div className='w-full bg-white shadow-md'>
          <div className=' md:flex justify-between  
         my-10  h-14 box-border bg-yellow-50 shadow-md border-s-orange-100'>
            <div>
            <h1 className='montserrat-700 text-2xl font-bold '>Bandage</h1>
            </div>
             <div className="flex gap-8 ">
              <div className='bg-blue-500 rounded-full w-8 h-8  text-white'><FacebookIcon /></div>
              <div className='bg-blue-500 rounded-full text-white w-8 h-8'><Instagram /></div>
              <div className='bg-blue-500 rounded-full text-white w-8 h-8'><Twitter /></div>
           </div>
          </div>
       <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
             <h2 className=" text-gray-900 montserrat-700 text-sm mb-3">Company Info</h2>
            <nav className="list-none mb-10">
             <li className='montserrat-400 text-sm text-slate-500'>
             About us
            </li>
          <li className='montserrat-400 text-sm text-slate-500'>
          
            Carrier
          </li>
          <li className='montserrat-400 text-sm text-slate-500'>
            We are hirring
          </li>
          <li className='montserrat-400 text-sm text-slate-500'>
            Blog
          </li>
        </nav>
       </div>
       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
             <h2 className=" text-gray-900 montserrat-700 text-sm mb-3">Company Info</h2>
            <nav className="list-none mb-10">
             <li className='montserrat-400 text-sm text-slate-500'>
             About us
            </li>
          <li className='montserrat-400 text-sm text-slate-500'>
          
            Carrier
          </li>
          <li className='montserrat-400 text-sm text-slate-500'>
            We are hirring
          </li>
          <li className='montserrat-400 text-sm text-slate-500'>
            Blog
          </li>
        </nav>
       </div>
       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
             <h2 className=" text-gray-900 montserrat-700 text-sm mb-3">Company Info</h2>
            <nav className="list-none mb-10">
             <li className='montserrat-400 text-sm text-slate-500'>
             About us
            </li>
          <li className='montserrat-400 text-sm text-slate-500'>
          
            Carrier
          </li>
          <li className='montserrat-400 text-sm text-slate-500'>
            We are hirring
          </li>
          <li className='montserrat-400 text-sm text-slate-500'>
            Blog
          </li>
        </nav>
       </div>
       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
             <h2 className=" text-gray-900 montserrat-700 text-sm mb-3">Company Info</h2>
            <nav className="list-none mb-10">
             <li className='montserrat-400 text-sm text-slate-500'>
             About us
            </li>
          <li className='montserrat-400 text-sm text-slate-500'>
          
            Carrier
          </li>
          <li className='montserrat-400 text-sm text-slate-500'>
            We are hirring
          </li>
          <li className='montserrat-400 text-sm text-slate-500'>
            Blog
          </li>
        </nav>
       
       </div>
      <div className='bg-white shadow-md mx-20'>
        <p className='montserrat-400 text-sm text-slate-500 '>Made With Love By Finland All Right Reserverd</p>
      </div>

      </div>

        </div>
    </div>
  )
}

export default Footer