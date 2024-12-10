import Image from 'next/image'
import React from 'react'
import card1 from '@/app/public/fixed-height.png'
import card2 from '@/app/public/fixed-height (1).png'
import card3 from '@/app/public/product-cover-5 (1).png'
import card4 from '@/app/public/product-cover-5 (2).png'
import card5 from '@/app/public/product-cover-5 (3).png'
import card6 from '@/app/public/fixed-height (2).png'
import card7 from '@/app/public/fixed-height (3).png'
import card8 from '@/app/public/fixed-height (4).png'
import card9 from '@/app/public/fixed-height (5).png'
import card10 from '@/app/public/fixed-height (6).png'
import card11 from '@/app/public/fixed-height (7).png'
import card12 from '@/app/public/product-cover-5.png'

function Gallary() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      <div className=" p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce"  src={card1}></Image>
        </a>
        <div className="mt-4 ">
          <h3 className="text-black  text-sm montserrat-700 font-semibold ">Graphic Design</h3>
          <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" className='object-cover' src={card2}></Image>
        </a>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce"  src={card3}></Image>
        </a>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={card4}></Image>
        </a>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={card5}></Image>
        </a>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={card6}></Image>
        </a>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={card7}></Image>
        </a>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={card8}></Image>
        </a>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div> 
      <div className="p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={card9}></Image>
        </a>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={card10}></Image>
        </a>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={card11}></Image>
        </a>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className="p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={card12}></Image>
        </a>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
    </div>
  </div>
  
</section>
  )
}

export default Gallary