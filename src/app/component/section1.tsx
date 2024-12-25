import React from 'react'
import Image from 'next/image'

function Section1() {
  return (
          <div className='max-w-screen-2xl pb-60 px-10 mb-36 md:pb-10 lg:pb-4 my-10 mx-auto'>
              <div className='w-full h-20 bg-yellow-50 shadow-md my-7 py-5'>
                  <div className='w-4/5 grid grid-cols-1 gap-5  md:grid-cols-3 lg:grid-cols-6 ml-16'>
                  <Image src='/images/col-md-2 (2).png' width={152} height={75} alt=''   ></Image>
                  <Image src='/images/col-md-2 (1).png' width={146} height={59} alt=''   ></Image>
                  <Image src='/images/col-md-2 (3).png'width={103} height={42} alt=''   ></Image>
                  <Image src='/images/col-md-2 (4).png' width={104} height={52} alt=''   ></Image>
                  <Image src='/images/col-md-2 (5).png' width={151} height={72} alt=''  ></Image>
                  <Image src='/images/col-md-2.png' width={153} height={34} alt=''  ></Image>
                  </div>
              </div>
      
          </div>
        )
      }
  

export default Section1