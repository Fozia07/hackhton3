import { ChevronRight, Eye, Heart, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import carosuel from '@/app/public/carouselCaptions.png';
import product from '@/app/public/single-product-1-thumb-1.jpg';
import product1 from '@/app/public/single-product-1-cover-2.jpg';
import frame from '@/app/public/Frame 31.png'
import color from '@/app/public/product-colors.png'
function Product1() {
  return (
    <div className='max-w-screen-2xl h-auto mx-auto '>
      <div className='w-full bg-white shadow-md'>
        <div className="text-center mt-7 md:flex md:justify-between md:item center h-10 bg-slate-200 shadow-md">
          <h1 className='montserrat-700 font-bold text-lg ml-20 text-black'>Shop</h1>
          <div className='flex md:w-1/2 lg:w-1/4 mr-11 px-10'>
          <h3 className='montserrat-400 text-base'>Home</h3>
          <ChevronRight />
          <h3 className='monserrat-400 text-base'>Shop</h3>
          </div>
          <div className='grid grid-cols-1 gap-x-10 md:grid-cols-2 mr-8 mt-12'>
            {/* left side div */}
             <div className=''>
                <div >
                 <Image src={product1} alt=""></Image>
                </div>
                <div className='flex'>
                    <Image src={product} alt=""></Image>
                    <Image src={carosuel } alt=""></Image>
                </div>
             </div>
            {/* right side div */}
             <div className='mt-7'>
                <h1 className='montserrat-400 text-xl'>Floating Phone</h1>
                <Image src={frame} alt="" className='ml-16 py-3'></Image>
                <h5 >$1,139,33</h5>
                <h6 className='montserrat-700 text-sm py-3'>Availability  :<span className='monserrat-700 text-sm text-blue-900'>In Stock </span></h6>
                <p className='montserrat-400 text-sm '>Met minim Mollie non desert Alamo est sit cliquey dolor 
                 do met sent. RELIT official consequent door ENIM RELIT Mollie. 
                  Excitation venial consequent sent nostrum met.</p>
                <div className='my-6 px-10'>
                <Image src={color} alt=""></Image>
                </div>
                <div className='flex gap-4 mx-10'>
                    <button className='montserrat-700 text-sm bg-blue-500 hover:bg-blue-300'>Select Options</button>
                    <Heart />
                    <ShoppingCart/>
                    <Eye />
                </div>

            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Product1