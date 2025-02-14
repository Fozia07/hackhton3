"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '../../../types/product';
import { client } from '@/sanity/lib/client';
import { six } from '@/sanity/lib/quries';


const List = () =>{

const [homeProduct,sethomeProduct]=useState<Product[]>([])
useEffect(()=>{
  async function fetchProduct(){
    const fetchedHomeproduct:Product[]=await client.fetch(six)
    sethomeProduct(fetchedHomeproduct)
  }
  fetchProduct()
},[])

  return (
    <div className='max-w-screen-2xl lg:h-[1200px] mx-auto pb-20 lg:pb-4'>
      <div className='w-full'>
        <div className=' h-40 lg:max-w-2xl px-20  text-center'>
           <h1 className="montserrat-700 text-2xl  "> Featured Products</h1>
           <h1 className='montserrat-700 text-2xl font-bold'>BESTSELLER PRODUCTS</h1>
           <p></p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
          {homeProduct.map((product)=>(
             <div key={product._id} 
             className="border rounded-lg shadow-md p-3 hover:shadow-lg transition duration-200">
            <Link href="">
            {product.productImage && (
            <Image className=' object-cover w-full h-48 rounded-md '
            src={urlFor(product.productImage).url()}
            alt="image"
            width={240}
            height={180}></Image>
            
          )};
          <div className='mosserrat-700 font-bold '>
            {product.title}
          </div>
          <div className='mosserat-400 font-medium'>
            {product.price}
          </div>
          </Link>
           </div>
          
          ))
        }
        </div>
       
        {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 mt-20'>
        <div className="px-4 w-full bg-slate-100 shadow-lg">
        <Link href="/product" className="block relative rounded overflow-hidden translate-x-1">
          <Image alt="ecommerce" src={'/images/fixed-height.png'} width={239} height={427}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className="p-4 w-full bg-slate-100 shadow-lg">
        <Link href="/product" className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={'/images/fixed-height (1).png'} width={239} height={427}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className="p-4 w-full bg-slate-100 shadow-lg ">
        <Link href="/product" className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src='/images/fixed-height (2).png'width={239} height={427}
          className='w-auto h-auto '></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className="p-4 w-full bg-slate-100 shadow-lg">
        <Link href="/product" className="block relative rounded overflow-hidden">
          <Image alt="ecommer" src={'/images/fixed-height (3).png'}width={239} height={427}
          className='w-auto h-auto'></Image>
        </Link> 
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className="p-4 w-full bg-slate-100 shadow-lg">
        <Link href="/product" className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src='/images/fixed-height (4).png'width={239} height={427} ></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className="p-4 w-full bg-slate-100 shadow-lg">
        <Link href="/product" className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src='/images/fixed-height (5).png'width={239} height={427}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className="p-4 w-full bg-slate-100 shadow-lg">
        <Link href="/product" className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src='/images/fixed-height (7).png'width={239} height={427}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className="p-4 w-full bg-slate-100 shadow-lg">
        <Link href="/product" className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src='/images/fixed-height (8).png'width={239} height={427}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div> */}

      
      </div>
    </div>
  )
}

export default List;