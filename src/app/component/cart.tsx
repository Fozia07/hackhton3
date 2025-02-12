"use client";

import { useState } from "react";
import { Image as SanityImage } from "@sanity/types";

import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import { Product } from "../../../types/product";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";


const builder = imageUrlBuilder(client);

function urlFor(source: SanityImage){
  return builder.image(source).url();
}

const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // 🆙 Increase Quantity
  const increaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // 🔽 Decrease Quantity
  const decreaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  //  Remove Item
  const removeItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-5 text-center">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-4 rounded-lg"
            >
              {/*  Product Image */}
              <div className="flex justify-center">
                        {item.productImage && (
                          <Image
                            src={urlFor(item.productImage)}
                            alt={item.title}
                            width={400}
                            height={400}
                            className="rounded-lg object-cover"
                          />
                        )}
                      </div>

              {/* Product Details */}
              <div className="text-center sm:text-left sm:w-1/3">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>

              {/*  Quantity Controls */}
              <div className="flex items-center space-x-3">
                <button onClick={() => decreaseQuantity(item._id)} className="p-2 bg-gray-300 hover:bg-gray-400 rounded-md">
                  <Minus size={16} />
                </button>
                <span className="text-lg font-medium">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item._id)} className="p-2 bg-gray-300 hover:bg-gray-400 rounded-md">
                  <Plus size={16} />
                </button>
              </div>

              {/* Remove Button */}
              <button onClick={() => removeItem(item._id)} className="text-red-500 hover:text-red-700">
                <Trash2 size={20} />
              </button>
            </div>
          ))}

          {/*  Total Price */}
          <div className="flex justify-between font-semibold text-lg border-t pt-4">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          {/*  Checkout Button */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
