import Image from 'next/image'
import React from 'react'


function Container1() {
  return (
    <section className='bg-slate-50 pb-20 '>
  <div className=" mx-auto flex justify-center px-5   md:justify-start md:flex-row flex-col items-center">
    <div className="">
      <Image className="object-cover object-center rounded" alt="hero" src={'/images/asian-woman-man-with-winter-clothes 1.png'} width={725} height={774}></Image>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
    <h3 className='montserrat-400 text-sm md:text-base '>SUMMER 2020</h3>
      <h1 className="montserrat-700 sm:text-4xl text-3xl mb-4 text-gray-900">Before they sold out
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white button border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">BUY NOW</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Learn more</button>
      </div>
    </div>
  </div>
</section>
  )
}
 export default Container1