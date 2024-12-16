import Image from 'next/image'
import React from 'react'
import img1 from '@/app/public/media bg-cover@2x.png'
import img2 from '@/app/public/button.button.btn.primary-color.btn-circle.btn-lg.png'

function Vedio() {
  return (
    <div className='max-w-screen-2xl mx-auto px-20  xl:my-56'>
      <div className='container absolute p-18 size-80 md:size-4/5'>
      <Image src={img1} alt=''></Image>
      </div>
      <div className='relative left-1/2  size-10 md:size-20 top-20 right-10 md:top-30 lg:size-40 lg:top-60 xl:right-1/2'>
      <Image src={img2} alt=''></Image>
      </div>
    </div>
  )
}

export default Vedio