import React from "react";
import Image from "next/image";

function Section1() {
  return (
    <div className="max-w-screen-2xl px-4 md:px-10 mx-auto my-10">
      {/* 🔹 Container */}
      <div className="w-full bg-yellow-50 shadow-md py-6 flex justify-center">
        {/* 🔳 Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 items-center w-full max-w-5xl px-4">
          {[
            "col-md-2 (2).png",
            "col-md-2 (1).png",
            "col-md-2 (3).png",
            "col-md-2 (4).png",
            "col-md-2 (5).png",
            "col-md-2.png",
          ].map((img, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={`/images/${img}`}
                width={150}
                height={75}
                alt={`Image ${index + 1}`}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section1;
