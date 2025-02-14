import Image from 'next/image'
import React from 'react'

function Editorpic() {
  return (
    <div className="max-w-screen-2xl mx-auto py-10 md:py-16 lg:py-20 px-4">
      {/* Heading Section */}
      <div className="text-center flex flex-col justify-center items-center mb-10">
        <h3 className="montserrat-700 font-bold text-2xl md:text-4xl lg:text-5xl">EDITORS PICK</h3>
        <p className="montserrat-400 text-sm md:text-lg lg:text-xl text-center max-w-2xl mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Large Image (First Image) */}
        <div className="col-span-2 row-span-2">
          <Image
            src="/images/col-md-6.png"
            alt="Gallery Image 1"
            width={500} height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Second Image */}
        <div className="row-span-2">
          <Image
            src="/images/col-md-3.png"
            alt="Gallery Image 2"
            width={250} height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Smaller Images */}
        <div>
          <Image
            src="/images/card-item (1).png"
            alt="Gallery Image 3"
            width={250} height={250}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div>
          <Image
            src="/images/card-item.png"
            alt="Gallery Image 4"
            width={250} height={250}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Editorpic
