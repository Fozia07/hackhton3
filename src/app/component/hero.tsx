import Image from 'next/image'
import React from 'react'


function Hero() {
  return (
    
        <div className='container mx-auto max-w-screen-2xl h-[300] md:[400] lg:h-[800] px-8  md:mb-10'>
            <div className=' absolute w-full '>
            <Image src={'/images/shop-hero-1-product-slide-1.jpg'} 
               width={1440} height={716}
             alt=''
             className='object-cover w-full h-full'></Image>
            </div>
            <div className="relative max-w-5xl h-96 pb-12 gap-y-7 text-center px-4 md:right-20 md:top-40 ">
                <h6 className='montserrat-400 text-xs text-white md:text-base px-4'>summer 2020</h6>
                <h1 className='montserrat-700 font-bold text-3xl text-white md:text-6xl'>NEW COLLECTION</h1>
                <p className='montserrat-400 text-xs  text-white md:text-xl'>We know how large objects will act, 
                but things on a small scale.</p>
                <button className='text-white font-bold monserrat text-center text-xs h-6 lg:h-12 lg:w-60  rounded-md w-40 lg:text-base bg-green-500'>SHOP NOW</button>
            </div>

        </div>
  
  )
}

export default Hero