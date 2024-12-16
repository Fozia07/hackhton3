import Image from 'next/image'
import React from 'react'
import img1 from '@/app/public/unsplash_tVEqStC2uz8.png'
import img2 from '@/app/public/unsplash_hHdHCfAifHU.png'
import img3 from '@/app/public/unsplash_dEGu-oCuB1Y.png'
function Feature1() {
  return (
 <section className="max-w-screen-2xl mx-auto py-20 ">
  <div className="container px-5  py-8 mx-16 ">
    <div className=' px-10 text-center bg-slate-50'>
        <h3 className='montserrat-400 text-sm md:text-base'>Practice advice</h3>
        <h1 className='montserrat-700 text-3xl md:text-4xl'>Featured post</h1>
        <p className='montserrat-400 text-sm md:text-base'>Problems trying to resolve the conflict between 
        the two major realms of Classical physics Newtonian mechanics </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full h-56 object-contain">
          <Image src={img1}
            alt="Feature One"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h3 className="text-sm motserrat-400 text-gray-800 mb-4">Trending New</h3>
          <h1 className='montserrat-400 text-base'>Loudest à la Madison 1 
          (Lintegral)</h1>
          <p className="text-gray-600 mb-6">
          We focus on ergonomics and meeting you where you work. Its only a 
          
          keystroke away.
          </p>
          <button className="button hover:text-indigo-700 font-medium">
            Learn More 
          </button>
        </div>
        </div>

    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full h-56 object-contain">
          <Image src={img2}
            alt="Feature One"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h3 className="text-sm motserrat-400 text-gray-800 mb-4">Trending New</h3>
          <h1 className='montserrat-400 text-base'>Loudest à la Madison 1 
          (Lintegral)</h1>
          <p className="text-gray-600 mb-6">
          We focus on ergonomics and meeting you where you work. Its only a 
          keystroke away.
          </p>
          <button className="button hover:text-indigo-700 font-medium">
            Learn More
          </button>
       </div>  
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full h-56 object-contain">
          <Image src={img3}
            alt="Feature One"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h3 className="text-sm motserrat-400 text-gray-800 mb-4">Trending New</h3>
          <h1 className='montserrat-400 text-base'>Loudest à la Madison 1 
          (integral)</h1>
          <p className="text-gray-600 mb-6">
          We focus on ergonomics and meeting you where you work. Its only a 
          keystroke away.
          </p>
          <button className="button hover:text-indigo-700 font-medium">
            Learn More
          </button>
        </div>
      </div>
      </div>
   </div>
   </section>
  )
}

export default Feature1