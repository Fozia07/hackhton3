import React from 'react'

function Views() {
  return (
    <div className='max-w-screen-2xl mx-auto my-12 px-10 md:px-20 lg:px-40'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-4'>
        <div>
            <p className='montserrat-700 text-5xl'>15k</p>
            <p className='montserrat-700 text-base'>Happy Customers</p>
        </div>
        <div>
            <p className='montserrat-700 text-5xl'>150k</p>
            <p className='montserrat-700 text-base'>Monthly Visitor</p>
        </div>
        <div>
            <p className='montserrat-700 text-5xl'>15</p>
            <p className='montserrat-700 text-base'>Country Worldwide</p>
        </div>
        <div>
            <p className='montserrat-700 text-5xl'>100+</p>
            <p className='montserrat-700 text-base'>Top Partner</p>
        </div>
      </div>
    </div>
  )
}

export default Views