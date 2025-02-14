import Image from 'next/image'
import React from 'react'

function Carousel1() {
  return (
    <div className="max-w-screen-2xl  mx-auto pb-20 px-4">
      <div className="w-full bg-teal-800 rounded-md border border-gray-700 px-6 md:px-14 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Side - Text Content */}
        <div className="max-w-xl space-y-6">
          <h3 className="montserrat-400 text-lg md:text-xl text-yellow-300">SUMMER 2020</h3>
          <h1 className="montserrat-700 text-3xl md:text-4xl lg:text-5xl text-white">
            Vita Classic Product
          </h1>
          <p className="montserrat-400 text-sm md:text-lg text-gray-300">
            We know how large objects will act, but things on a small scale.
          </p>
          <h3 className="montserrat-700 text-2xl text-yellow-400">$16.48</h3>
          <button className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-md text-sm md:text-base">
            SHOP NOW
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/images/shop-hero-2-png-picture-1.png"
            width={443}
            height={685}
            alt="Product Image"
            className="w-auto h-auto max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  )
}

export default Carousel1
