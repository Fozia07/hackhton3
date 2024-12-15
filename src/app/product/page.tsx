import React from 'react'
import Gallary from '../component/gallary'
import Top from '../component/top'
import Section1 from '../component/section1'

function Product() {
  return (
    <div className='mt-56'>
        <Top/>
        <Section1 />
        <Gallary/>
      
    </div>
  )
}

export default Product