
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/product";
import { useParams } from "next/navigation"; // ✅ Get slug from URL
import Cart from "@/app/component/cart";
import Checkout from "@/app/component/checkout";
import { Image as SanityImage } from "@sanity/types";



const builder = imageUrlBuilder(client);

function urlFor(source:SanityImage ) {
  return builder.image(source).url();
}

const ProductPage = () => {
  const { slug } = useParams(); // ✅ Get dynamic slug

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [cart, setCart] = useState<Product[]>([]);
  const [isCheckout, setIsCheckout] = useState(false); // ✅ Toggle between Cart & Checkout


  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product" && slug.current == $slug][0]`;
        const result: Product = await client.fetch(query, { slug });

        if (result) {
          setProduct(result);
        } else {
          console.error("Product not found.");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product])
    alert(`${product.title} has been add to  your cart`)
  };
  


  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (!product) return <p className="text-center text-lg text-red-500">Product not found.</p>;

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      {/* Grid Layout for Image & Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border rounded-lg shadow-md p-6">
        {/*  Product Image */}
        <div className="flex justify-center">
          {product.productImage && (
            <Image
              src={urlFor(product.productImage)}
              alt={product.title}
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          )}
        </div>

        {/*  Product Details */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold text-blue-600">${product.price}</p>

          {/* Tags */}
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

          {/* New Badge */}
          {product.isNew && <span className="text-green-500 font-semibold">New!</span>}
          
          {/* 🛒 Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Add to Cart
          </button>
        <div><h1 className="montserrat-400 font-semibold text-blue-800">review</h1></div>
        </div>
      </div>
      {/* 🛒 Cart & Checkout Section */}
      {isCheckout ? (
        <Checkout />
      ) : (
        <div>
          <Cart />
          {cart.length > 0 && (
            <button
              onClick={() => setIsCheckout(true)}
              className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
            >
              Proceed to Checkout →
            </button>
          )}
        </div>
        
      )}
    </div>
  );
};

export default ProductPage;
