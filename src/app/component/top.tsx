import { ChevronDownIcon, ChevronRight, LayoutGrid, List } from "lucide-react";
import Image from "next/image";
import React from "react";

function Top() {
  return (
    <div className="max-w-screen-2xl h-auto mx-auto mt-6 px-4">
      {/* 🏷️ Header */}
      <div className="bg-white shadow-md w-full">
        <div className="text-center mt-7 md:flex md:justify-between md:items-center h-10 bg-slate-200 shadow-md px-4 md:px-10">
          <h1 className="font-bold text-lg text-black">Shop</h1>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base">
            <h3 className="text-gray-600">Home</h3>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <h3 className="text-gray-600">Shop</h3>
          </div>
        </div>

        {/* 🖼️ Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 px-4 md:px-12 mx-auto mt-7">
          {["col-md-4.png", "col-md-4 (1).png", "col-md-4 (2).png", "col-md-4 (3).png", "col-md-4 (4).png"].map((img, index) => (
            <Image key={index} src={`/images/${img}`} width={205} height={223} alt={`Image ${index + 1}`} className="w-full h-auto object-cover rounded-lg shadow-md" />
          ))}
        </div>

        {/*  Sorting & Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 px-4 md:px-7 my-6 items-center text-center md:text-left">
          {/*  Showing Results */}
          <h3 className="text-gray-700 text-sm sm:text-base">Showing all 12 results</h3>

          {/* 🔳View Options */}
          <div className="flex gap-4 justify-center md:justify-start text-gray-600">
            <h3 className="text-sm sm:text-base">View:</h3>
            <LayoutGrid className="cursor-pointer hover:text-blue-500 transition" />
            <List className="cursor-pointer hover:text-blue-500 transition" />
          </div>

          {/* 🔽 Sorting & Filter */}
          <div className="flex justify-center md:justify-end items-center gap-4">
            <button className="flex items-center gap-2 text-gray-700 text-sm sm:text-base hover:text-blue-500 transition">
              <ChevronDownIcon className="w-5 h-5" /> Popularity
            </button>
            <button className="text-gray-700 text-sm sm:text-base hover:text-blue-500 transition">Filter</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
