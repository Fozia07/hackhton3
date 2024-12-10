import Image from 'next/image'
import React from 'react'
import img1 from '@/app/public/shop-hero-1-product-slide-1.jpg'
function Hero() {
  return (
    <div className='max-w-screen-lg h-auto mx-auto'>
        <div className='w-full mt-64  flex md:mt-2'>
            <div className=' absolute h-56 mr-20'>
            <Image src={img1} alt=''></Image>
            </div>
            <div className="relative w-1/4 h-40  text-center ml-14 md:text-left md:ml-20 md:mt-48 md:gap-y-6">
                <h6 className='montserrat-400 text-xs text-white md:text-sm'>summer 2020</h6>
                <h1 className='montserrat-700 font-bold text-xl text-white md:text-2xl'>NEW COLLECTION</h1>
                <p className='montserrat-400 text-xs  text-white md:text-sm'>We know how large objects will act, 
                but things on a small scale.</p>
                <button className='text-white font-bold monserrat text-center text-xs w-28 h-3 md:w-56 md:h-5 md:text-sm bg-green-500'>SHOP NOW</button>
            </div>

        </div>
    </div>
  )
}

export default Hero