import Image from 'next/image'
import React from 'react'

function Vedio() {
  return (
    <div className='max-w-screen-2xl mx-auto px-20  xl:my-56'>
      <div className='container absolute p-18 h-24 md:h-20'>
      <Image src={'/images/media bg-cover@2x.png'}alt='' width={989} height={540}></Image>
      </div>
      <div className='relative left-2/3  size-24 md:size-20 top-28 md:left-1/2 md:top-36  lg:size-40 lg:top-60 lg:left-1/3 '>
      <Image src={'/images/button.button.btn.primary-color.btn-circle.btn-lg.png'} alt=''width={50} height={50}></Image>
      </div>
    </div>
  )
}

export default Vedio