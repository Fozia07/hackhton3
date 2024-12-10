import { Facebook, Instagram, Mail, Phone, Twitter, Youtube } from 'lucide-react'
import React from 'react'

function Topheader() {
  return (
    <div className=' w-full h-10 bg-black  md:flex hidden justify-center'>
       <div className="container mx-auto px-4 flex items-center justify-between gap-3">
         <div className="text-sm text-white Montserrat-700 flex gap-2">
            <Phone className='size-5'/>
            (225)555-0118
         </div>
         <div className="text-sm text-white Montserrat-700 flex gap-2">
            <Mail className='size-5'/>
            <span>michelle.rivera@example.com</span>
         </div>
         
         <div className='flex gap-8'>
           <p className='Montserrat-700 text-sm text-white'>Follow Us  and get a chance to win 80% off</p>
         </div>

         <div className='flex gap-2 Montserrat text-xsm text-white'>
         <p>Follow Us</p>
         <Facebook  />
         <Youtube />
         <Instagram />
         <Twitter />
         </div>
       </div>
    </div>
  )
}

export default Topheader