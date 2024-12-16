import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import pic1 from '@/app/public/asian-woman-man-with-winter-clothes 1.png'

function Section3() {
  return (
    <div>
        <div>
        <section className="max-w-screen-2xl mx-auto my-10 px-10 md:px-20 lg:px-40">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h3 className='montserrat-400 text-sm'>Contact Us</h3>
        <h1 className="montserrat-700 sm:text-4xl text-3xl mb-4  text-gray-900">Get in touch 
        today!
        </h1>
        <p className="mb-8 montserrat-400 text-xl  ">We know how large objects will act, but things on a small scale just do 
not act that way.</p>
         <p className="mb-8 montserrat-400 text-sm">Phone ; +451 215 215 </p>
         <h3 className="mb-8 montserrat-400 text-sm ">Fax : +451 215 215</h3>
         <div className='flex ml-4 gap-4 gap-y-3'>
            <Facebook size={40} />
            <Twitter size={40}/>
            <Instagram size={40}/>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image className="object-cover object-center rounded" alt="hero" src={pic1}></Image>
      </div>
    </div>
  </section>
    </div>
    </div>
  )
}

export default Section3