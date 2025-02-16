import Image from 'next/image';
import React from 'react';

function Feature1() {
  return (
    <section className="max-w-screen-2xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-8">
        <div className="px-4 text-center bg-slate-50 py-6 rounded-lg">
          <h3 className="montserrat-400 text-sm md:text-base">Practice advice</h3>
          <h1 className="montserrat-700 text-2xl sm:text-3xl md:text-4xl">Featured post</h1>
          <p className="montserrat-400 text-sm md:text-base max-w-2xl mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[ '/images/unsplash_tVEqStC2uz8.png', '/images/unsplash_hHdHCfAifHU.png', '/images/unsplash_dEGu-oCuB1Y.png' ].map((src, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative w-full h-56">
                <Image 
                  src={src}
                  layout="fill"
                  objectFit="cover"
                  alt="Feature Image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-sm montserrat-400 text-gray-800 mb-2">Trending New</h3>
                <h1 className="montserrat-400 text-lg md:text-xl">Loudest à la Madison 1 (Integral)</h1>
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                  We focus on ergonomics and meeting you where you work. It’s only a keystroke away.
                </p>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature1;
