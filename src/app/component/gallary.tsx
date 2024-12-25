import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function Gallary() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      <div className=" p-4 w-full">
        <Link href="" className="block relative rounded overflow-hidden">
         <Image alt="ecommerce"  src={'/images/fixed-height.png'} width={239} height={300}></Image></Link>
        
        <div className="mt-4 ">
          <h3 className="text-black  text-sm montserrat-700 font-semibold ">Graphic Design</h3>
          <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <Link href="" className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" className='object-cover' src={'/images/fixed-height (1).png'}width={239} height={300}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <Link href='' className="block relative rounded overflow-hidden">
          <Image alt="ecommerce"  src={'/images/product-cover-5 (1).png'}width={239} height={300}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <Link href="" className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={'/images/product-cover-5 (2).png'}width={239} height={300}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <Link href='' className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={'/images/product-cover-5 (3).png'}width={239} height={300}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <Link href='' className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={'/images/fixed-height (2).png'}width={239} height={300}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <Link href='' className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={'/images/fixed-height (3).png'}width={239} height={300}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <Link href='' className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={'/images/fixed-height (4).png'}width={239} height={300}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div> 
      <div className="p-4 w-full">
        <Link href='' className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={'/images/fixed-height (5).png'}width={239} height={300}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <Link href='' className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={'/images/fixed-height (6).png'}width={239} height={300}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className=" p-4 w-full">
        <Link href='' className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={'/images/fixed-height (7).png'}width={239} height={300}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className="p-4 w-full">
        <Link href='' className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={'/images/product-cover-5.png'}width={239} height={300}></Image>
        </Link>
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