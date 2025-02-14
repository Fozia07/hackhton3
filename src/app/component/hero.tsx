import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[800px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/shop-hero-1-product-slide-1.jpg"
          layout="fill"
          objectFit="cover"
          alt="Hero Background"
          className="w-full h-full"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h6 className="montserrat-400 text-xs text-white md:text-sm">SUMMER 2020</h6>
        <h1 className="montserrat-700 font-bold text-3xl text-white md:text-5xl lg:text-6xl">
          NEW COLLECTION
        </h1>
        <p className="montserrat-400 text-xs text-white md:text-lg mt-2">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="mt-4 bg-green-500 text-white font-bold montserrat px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-md text-sm md:text-base lg:text-lg">
          SHOP NOW
        </button>
      </div>
    </div>
  )
}

export default Hero
