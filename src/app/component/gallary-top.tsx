import Image from 'next/image'
import React from 'react';
import pic1 from '@/app/public/unsplash_Lks7vei-eAg.png';
import pic2 from '@/app/public/unsplash_1-aA2Fadydc.png'
import pic3 from '@/app/public/unsplash_PSmDDeXaEWE (1).png'
import pic4 from '@/app/public/unsplash_PSmDDeXaEWE.png'
import pic5 from '@/app/public/unsplash_gMsnXqILjp4.png'


function GallaryTop() {
  return (
    <div className='max-w-screen-2xl h-auto mx-auto'>
        <div className='w-full '>
        <div className="p-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {/* Large image taking 2 rows and 2 columns */}
        <div className="col-span-2 row-span-2">
          <Image
            src={pic1}
            alt="Gallery Image 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Remaining images */}
        <div>
          <Image
            src={pic2}
            alt="Gallery Image 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src={pic3}
            alt="Gallery Image 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src={pic4}
            alt="Gallery Image 4"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src={pic5}
            alt="Gallery Image 5"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default GallaryTop