import React from 'react'
import Company from '../component/company'
import Vedio from '../component/vedio'
import Section2 from '../component/section2'
import Views from '../component/Views'
import User from '../component/User'
import Section1 from '../component/section1'

function About() {
  return (
    <div className='max-w-screen-2xl my-10 mx-auto'>
       <Company/>
       <Section2/>
       <Views/>
       <Section1 />
       <Vedio />
       <User />
    </div>
  )
}

export default About