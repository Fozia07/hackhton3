import Image from 'next/image'
import React from 'react'
import img1 from '@/app/public/col-md-4 (8).png'
import img2 from '@/app/public/col-md-4 (9).png'
import img3 from '@/app/public/col-md-4 (10).png'

function Email() {
  return (
    <div className='max-w-screen-2xl mx-auto px-5 py-10 my-12'>
       <div className='text-center'>
        <h3 className='montserrat-400 text-sm'>VISIT OUR OFFICE</h3>
        <h1 className='montserrat-700 text-2xl'>We help small businesses 
        with big ideas</h1> 
       </div>
       <div className='grid grid-cols-1 md:grid-cols-3 mt-20'>
        <Image src={img1} alt=''></Image>
        <Image src={img2} alt=''></Image>
        <Image src={img3} alt=''></Image>
       </div>
    </div>
  )
}

export default Email