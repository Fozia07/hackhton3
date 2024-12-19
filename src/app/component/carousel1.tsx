import Image from 'next/image'
import React from 'react'
import img1 from '@/app/public/shop-hero-2-png-picture-1.png';
function Carousel1() {
  return (
    <div className='max-w-screen-2xl py-12 my-20 mx-auto'>
      <div className='w-full h-[1230px] md:h-[600px] color rounded-md border-solid border caret-lime-50 px-14 py-28 grid grid-cols-1 md:grid-cols-2'>
        <div className='max-w-xl h-[499px] gap-9'>
           <h3 className='montserratt-400 text-xl text-yellow-50'>SUMMER 2020</h3>
           <h1 className='montserrat-700 text-2xl lg:text-4xl text-yellow-50'>Vita Classic 
           Product</h1>
           <p className='montserrat-400 text-xl text-yellow-50 '>We know how large objects will act, but things on a small scale.</p>
           <h3 className='montserrat-700 text-2xl text-yellow-50'>$16.48</h3>
           <button className='w[184px] h-[52px] rounded-md px-10 py-4 button text-yellow-50'></button>
        </div>
        <div className='w-[416px] h-[681px]'>
          <Image src={img1} alt=''></Image>

        </div>
      </div>

    </div>
  )
}

export default Carousel1