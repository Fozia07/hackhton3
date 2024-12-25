import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function User() {
  return (
    <div className='max-w-screen-2xl mx-auto h-auto px-20 py-40 mt-28 md:py-48 lg:py-60 md:mt-72 lg:mt-96 '>
      <div className='w-full'>
       <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={'/images/team-1-user-3.jpg'} width={316} height={231}></Image>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-black montserrat-400 text-sm">UserName</h2>
          <p className="text-gray-500 montserrat-400 text-sm">Professional</p>
         <div className='flex ml-44 gap-y-3'>
            <Facebook size={20}/>
            <Twitter size={20}/>
            <Instagram size={20}/>
         </div>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={'/images/team-1-user-2.jpg'} width={316} height={237}></Image>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-black montserrat-400 text-sm">UserName</h2>
          <p className="text-gray-500 montserrat-400 text-sm">Professional</p>
         <div className='flex ml-44 gap-y-3'>
            <Facebook size={20}/>
            <Twitter size={20}/>
            <Instagram size={20}/>
         </div>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={'/images/team-1-user-2 (2).jpg'} width={329} height={237}></Image>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-black montserrat-400 text-sm">UserName</h2>
          <p className="text-gray-500 montserrat-400 text-sm">Professional</p>
         <div className='flex ml-44 gap-y-3'>
            <Facebook size={20}/>
            <Twitter size={20}/>
            <Instagram size={20}/>
         </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default User