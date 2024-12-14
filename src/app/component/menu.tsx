"use client"
import { LucideMenu} from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
const Menu=()=> {
    const[open,setOpen]= useState(false)
  return (
    <div className='gap-6 justify-center mt-2 md:hidden'>
        <LucideMenu className='cursor-pointer' onClick={()=>setOpen((prev)=>!prev)} />
{ open &&(
    <div className='absolute flex flex-col item-center justify-center gap-6 montserrat-400 top-20  '>
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">About</Link>
          <Link href="/">Blog</Link>
          <Link href="/">contact</Link>
     </div>   
)}
    </div>
  )
}

export default Menu