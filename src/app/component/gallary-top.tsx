import Image from 'next/image'
import React from 'react';


function GallaryTop() {
  return (
    <div className='max-w-screen-2xl h-auto mx-auto'>
        <div className='w-full '>
        <div className="p-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {/* Large image taking 2 rows and 2 columns */}
        <div className="col-span-2 row-span-2">
          <Image
            src={'/images/unsplash_Lks7vei-eAg.png'}
            alt="Gallery Image 1"
            width={700}
            height={530}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Remaining images */}
        <div>
          <Image
            src={'/images/unsplash_1-aA2Fadydc.png'}
            alt="Gallery Image 2"
            width={361}
            height={260}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src={'/images/unsplash_mcSDtbWXUZU (2).png'}
            alt="Gallery Image 3"
            width={361}
            height={260}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src={'/images/unsplash_PSmDDeXaEWE.png'}
            alt="Gallery Image 4"
            width={361}
            height={260}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src={'/images/unsplash_gMsnXqILjp4.png'}
            alt="Gallery Image 5"
            width={361}
            height={260}
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