import Image from 'next/image'
import React from 'react'
import { ChevronRight } from 'lucide-react'
function Feature() {
  return (
    <div className='max-w-screen-2xl h-auto mx-auto bg-slate-400 my-10 md:my-20 lg:my-40 xl:my-80'>
        <div className='w-full bg-white shadow-md '>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {/* righthand side */}
                <div>
                  <Image src={'/images/col-md-4 (5).png'} alt=""></Image>
                {/* lefthand side */}
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        </div>
                        <h1 className='montserrat-700 text-2xl'>the quick fox jumps over </h1>
                        <p className='montserrat-400 text-sm'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.

                           Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.

                          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                    </div>
                    <div className=''>
                        <div>
                            <h1 className='montserrat-700 text-2xl'>the quick fox jumps over </h1>
                            <ul className='montserrat-400 text-sm'>
                            <ChevronRight /><li>the quick fox jumps over the lazy do</li>
                            <ChevronRight /><li>the quick fox jumps over the lazy do</li>
                            <ChevronRight /><li>the quick fox jumps over the lazy do</li>
                            <ChevronRight /><li>the quick fox jumps over the lazy do</li>
                            <ChevronRight /><li>the quick fox jumps over the lazy do</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='montserrat-700 text-2xl'>the quick fox jumps over </h1>
                            <div className='flex'>
                            <ul className='montserrat-400 text-sm '>
                            <ChevronRight /><li>the quick fox jumps over the lazy do</li>
                            <ChevronRight /><li>the quick fox jumps over the lazy do</li>
                            <ChevronRight /><li>the quick fox jumps over the lazy do</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature