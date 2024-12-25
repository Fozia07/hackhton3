import Image from 'next/image'
import React from 'react'



function Editorpic() {
  return (
    <div className='max-w-screen-2xl h-[1000] xl:h-[852px] py-20 md:py-30 lg:py-40 mx-auto '>
      <div className='container w-full px-4 absolute'>
            <div className='text-center ml-24 xl:ml-80 flex flex-col justify-center'>
                <h3 className='montserrat-700 font-bold text-2xl text-center md:text-4xl lg:text-6xl'>EDITORS PICK</h3>
                <p className='montserrat-400  text-sm md:text-lg lg:text-xl text-cen ter'>Problems trying to resolve the conflict between </p>
            </div>
        

        <div className='max-w-screen-xl h-[500px] grid grid-cols-2 gap-6 mt-4 px-4 md:grid-cols-4 '>
            <div className="col-span-2 row-span-2">
           <Image
            src={'/images/col-md-6.png'}
            alt="Gallery Image 1"
            width={240} height={500}
            className="object-cover w-full h-full"
          />
         
          </div>

          {/* Remaining images */}
         <div className='row-span-2'>
            <Image
            src={'/images/col-md-3.png'}
            
            alt="Gallery Image 2"
            width={510} height={500}
            className=""
            />
         </div>
         <div>
          <Image
            src={'/images/card-item (1).png'}
            alt="Gallery Image 3"
            width={239} height={242}
            
            />
         </div>
         <div>
          <Image
            src={'/images/card-item.png'}
            alt="Gallery Image 4"
            width={239}height={242}
            
            />
         </div>
        </div>
      </div>
   </div>
  
  )
}

export default Editorpic