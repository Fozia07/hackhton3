import Image from 'next/image'
import React from 'react'
import card1 from '@/app/public/card-item (1).png'
import card2 from '@/app/public/card-item.png'
import card3 from '@/app/public/col-md-3.png'
import card4 from '@/app/public/col-md-6.png'


function Editorpic() {
  return (
    <div className='max-w-screen-2xl h-[1000] xl:h-[852px] pt-20 md:pt-40  mx-auto '>
      <div className='container w-full px-4 absolute'>
            <div className='text-center ml-24 xl:ml-80 flex flex-col justify-center'>
                <h3 className='montserrat-700 font-bold text-2xl text-center md:text-4xl lg:text-6xl'>EDITORS PICK</h3>
                <p className='montserrat-400  text-sm md:text-lg lg:text-xl text-cen ter'>Problems trying to resolve the conflict between </p>
            </div>
            <div>

        <div className='max-w-screen-xl h-[500px] grid grid-cols-2 gap-6 mt-4 px-4 md:grid-cols-4 '>
            <div className="col-span-2 row-span-2">
           <Image
            src={card4}
            alt="Gallery Image 1"
            className=""
          />
         
          </div>

          {/* Remaining images */}
         <div className='row-span-2'>
            <Image
            src={card3}
            alt="Gallery Image 2"
            className=""
            />
         </div>
         <div>
          <Image
            src={card1}
            alt="Gallery Image 3"
            
            />
         </div>
         <div>
          <Image
            src={card2}
            alt="Gallery Image 4"
            
            />
         </div>
        </div>
      </div>
      </div>
   </div>
  
  )
}

export default Editorpic