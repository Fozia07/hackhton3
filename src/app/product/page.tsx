"use client"
import React,{useEffect, useState}from "react"
import { Product } from "../../../types/product";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/quries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Section1 from "../component/section1";
import Top from "../component/top";
import Link from "next/link";
import SearchBar from "../component/searchbar";


const PRODUCT = () =>{

const [product,setProduct]=useState<Product[]>([]);
const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
useEffect(()=>{
  async function fetchproduct(){
    const fetchedProduct:Product[]=await client.fetch(allProducts)
    setProduct(fetchedProduct);
    setFilteredProducts(fetchedProduct); // Initialize filtered list
  }
  fetchproduct()
},[]);

// 🔎 Handle Search Filtering
const handleSearch = (query: string) => {
  const filtered = product.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
  setFilteredProducts(filtered);
};
  return (
    <div className="max-w-screen-2xl mx-auto my-5">
      <div><Top/></div>
      <div><Section1/></div>
  
      {/* 🔍 Search Bar */}
      <SearchBar onSearch={handleSearch} />
      
      <div className="grid grid-cols-1 gap-3 mx-6 sm:grid-cols-2 lg:grid-cols-4">
      
      {filteredProducts.map((product)=>(
        <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
          <Link href={product.slug?.current ? `/product/${product.slug.current}` : "#"}>
          {product.productImage && (
            <Image className='object-cover w-full h-48 rounded-md'
            src={urlFor(product.productImage).url()} 
            alt="image"
            width={240}
            height={240}></Image>
            
          )}
          <div className="my-3 mosserat-700 ">
          {product.title}
          </div>
          <div>
          {product.price}
          </div>
            {/* Tags */}
          <div>
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span key={index} 
                className="px-3 py-1 bg-gray-200 rounded-full text-sm transition duration-300 ease-in-out 
                   hover:bg-blue-500 hover:text-white hover:scale-105">
                  {tag}
                </span>
              ))}
              </div>
          )}
          </div>
          
          </Link>
          </div>
    
      ))}
      </div>
    </div>
  );
};

export default PRODUCT;