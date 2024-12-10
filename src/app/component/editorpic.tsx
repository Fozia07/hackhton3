import Image from 'next/image'
import React from 'react'
import card1 from '@/app/public/card-item (1).png'
import card2 from '@/app/public/card-item.png'
import card3 from '@/app/public/col-md-3.png'
import card4 from '@/app/public/col-md-6.png'


function Editorpic() {
  return (
    <div className='max-w-screen-2xl h-auto mx-auto mt-96 '>
      <div className='w-4/5'>
            <div className='text-center'>
                <h1 className='montserrat-700 font-bold text-2xl '>EDITORS PICK</h1>
                <p className='montserrat-400  text-sm'>Problems trying to resolve the conflict between </p>
            </div>
            <div>

        <div className='grid grid-cols-2 gap-5 md:grid-cols-4 mt-20 mx-20'>
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