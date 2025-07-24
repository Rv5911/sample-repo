'use client';
import { useThemeStore } from '@/store/useThemeStore';
import { useStore } from '@/store/useStore';
import React from 'react';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import Image from 'next/image';

const AddToCart = () => {
  const { cart, removeFromCart } = useStore();
  const { theme } = useThemeStore();

  return (
    <main
      className={`min-h-screen bg-gradient-to-br ${theme === 'dark' ? 'from-gray-900 to-gray-800' : 'from-blue-50 to-blue-100'} py-8 sm:py-12 px-2 sm:px-4`}
    >
      <div className="">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <FaShoppingCart className="text-blue-500 text-2xl sm:text-3xl" />
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">
            My Cart
          </h1>
        </div>
        {cart.length === 0 ? (
          <div className="text-center text-gray-500 text-base sm:text-lg py-10 sm:py-20">
            Your cart is empty.
          </div>
        ) : (
          <div className="grid max-[900px]:grid-cols-1 grid-cols-6 xs:grid-cols-2 gap-4 sm:gap-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className={`${theme === 'dark' ? 'bg-gray-800 border-1 text-white' : 'bg-white text-gray-900'}  rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center relative w-full`}
              >
                <Image
                  unoptimized
                  width={100}
                  height={100}
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 rounded-full object-cover"
                />
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-center">
                  {item.title}
                </h3>
                <button
                  className="absolute cursor-pointer top-2 sm:top-3 right-2 sm:right-3 p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-500 transition"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove from cart"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default AddToCart;
