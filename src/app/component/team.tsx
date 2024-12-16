import Image from 'next/image'
import React from 'react'
import pic1 from '@/app/public/team-1-user-2.jpg';
import pic2 from '@/app/public/media (3).png'
import pic3 from '@/app/public/media (5).png';
import pic4 from '@/app/public/media (1).png';
import pic5 from '@/app/public/media (2).png';
import pic6 from '@/app/public/media (4).png';
import pic7 from '@/app/public/team-1-user-2.jpg';
import pic8 from '@/app/public/team-1-user-2 (2).jpg';
import pic9 from '@/app/public/team-1-user-3.jpg';


import { Facebook, Instagram, Twitter } from 'lucide-react';

function Team() {
  return (
    <div className='max-w-screen-2xl mx-auto my-20 '>
        <div className='text-center'>
           <h1 className='montserrat-700 text-3xl'>Meet Our Team</h1>
        </div>
        <div className="flex flex-wrap mt-10">
       <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={pic1}></Image>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-black montserrat-400 text-sm">UserName</h2>
          <p className="text-gray-500 montserrat-400 text-sm">Professional</p>
        <div className='flex ml-4 lg:ml-28 gap-y-3'>
            <Facebook size={20}/>
            <Twitter size={20}/>
            <Instagram size={20}/>
        </div>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={pic2}></Image>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-black montserrat-400 text-sm">UserName</h2>
          <p className="text-gray-500 montserrat-400 text-sm">Professional</p>
        <div className='flex ml-4 lg:ml-28 gap-y-3'>
            <Facebook size={20}/>
            <Twitter size={20}/>
            <Instagram size={20}/>
        </div>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={pic3}></Image>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-black montserrat-400 text-sm">UserName</h2>
          <p className="text-gray-500 montserrat-400 text-sm">Professional</p>
        <div className='flex ml-4 lg:ml-28 gap-y-3'>
            <Facebook size={20}/>
            <Twitter size={20}/>
            <Instagram size={20}/>
        </div>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={pic4}></Image>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-black montserrat-400 text-sm">UserName</h2>
          <p className="text-gray-500 montserrat-400 text-sm">Professional</p>
        <div className='flex ml-4 lg:ml-28 gap-y-3'>
            <Facebook size={20}/>
            <Twitter size={20}/>
            <Instagram size={20}/>
        </div>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={pic5}></Image>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-black montserrat-400 text-sm">UserName</h2>
          <p className="text-gray-500 montserrat-400 text-sm">Professional</p>
        <div className='flex ml-4 lg:ml-28 gap-y-3'>
            <Facebook size={20}/>
            <Twitter size={20}/>
            <Instagram size={20}/>
        </div>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={pic6}></Image>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-black montserrat-400 text-sm">UserName</h2>
          <p className="text-gray-500 montserrat-400 text-sm">Professional</p>
        <div className='flex ml-4 lg:ml-28 gap-y-3'>
            <Facebook size={20}/>
            <Twitter size={20}/>
            <Instagram size={20}/>
        </div>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={pic7}></Image>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-black montserrat-400 text-sm">UserName</h2>
          <p className="text-gray-500 montserrat-400 text-sm">Professional</p>
        <div className='flex ml-4 lg:ml-28 gap-y-3'>
            <Facebook size={20}/>
            <Twitter size={20}/>
            <Instagram size={20}/>
        </div>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={pic8}></Image>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-black montserrat-400 text-sm">UserName</h2>
          <p className="text-gray-500 montserrat-400 text-sm">Professional</p>
        <div className='flex ml-4 lg:ml-28 gap-y-3'>
            <Facebook size={20}/>
            <Twitter size={20}/>
            <Instagram size={20}/>
        </div>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={pic9}></Image>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-black montserrat-400 text-sm">UserName</h2>
          <p className="text-gray-500 montserrat-400 text-sm">Professional</p>
        <div className='flex ml-4 lg:ml-28 gap-y-3'>
            <Facebook size={20}/>
            <Twitter size={20}/>
            <Instagram size={20}/>
        </div>
        </div>
      </div>
   
     </div>
    </div>
  )
}

export default Team