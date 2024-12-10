import { ChevronDownIcon, ChevronRight, LayoutGrid, List } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import col from '@/app/public/col-md-4.png'
import col1 from '@/app/public/col-md-4 (4).png'
import col2 from '@/app/public/col-md-4 (3).png'
import col3 from '@/app/public/col-md-4 (2).png'
import col4 from '@/app/public/col-md-4 (1).png'
function Top() {
  return (
    <div className='max-w-screen-2xl h-auto mx-auto mt-6'>
      <div className='bg-white shadow-md w-full '>
        <div className="text-center mt-7 md:flex md:justify-between md:item center h-10 bg-slate-200 shadow-md">
          <h1 className='montserrat-700 font-bold text-lg ml-20 text-black'>Shop</h1>
          <div className='flex md:w-1/2 lg:w-1/4 mr-11 px-10'>
          <h3 className='montserrat-400 text-base'>Home</h3>
          <ChevronRight />
          <h3 className='monserrat-400 text-base'>Shop</h3>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 mx-5 gap-2 mt-7'>
          <Image src={col} alt=""></Image>
          <Image src={col4} alt=""></Image>
          <Image src={col3} alt=""></Image>
          <Image src={col2} alt=""></Image>
          <Image src={col1} alt=""></Image>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-y-8 px-7 m-4'>
          <h3 className='montserrat-400 text-base'>Showing all 12 results</h3>
          <div className='flex gap-4 '>
            <h3 className='montserrat-400 text-base'>view</h3>
            <LayoutGrid />
            <List />
          </div>
          <div className='flex gap-4 '>
            <ChevronDownIcon/>
            <button className="text-base montserrat-400">Popularity</button>
            <button className='text-base montserrat-400'>Filter</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top