import React from 'react'
import Image from 'next/image'
import img1 from '@/app/public/col-md-2 (1).png'
import img2 from '@/app/public/col-md-2 (2).png'
import img3 from '@/app/public/col-md-2 (3).png'
import img4 from '@/app/public/col-md-2 (4).png'
import img5 from '@/app/public/col-md-2 (5).png'
import img6 from '@/app/public/col-md-2.png'
function Section1() {
  return (
          <div className='max-w-screen-2xl h-auto mx-auto'>
              <div className='w-full h-20 bg-white shadow-md my-7 py-5'>
                  <div className='w-4/5 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-6 ml-16'>
                  <Image src={img1} alt=''   ></Image>
                  <Image src={img2} alt=''   ></Image>
                  <Image src={img3} alt=''   ></Image>
                  <Image src={img4} alt=''   ></Image>
                  <Image src={img5}alt=''  ></Image>
                  <Image src={img6} alt=''  ></Image>
                  </div>
              </div>
      
          </div>
        )
      }
  

export default Section1