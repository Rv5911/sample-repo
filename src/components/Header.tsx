'use client';
import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useStore } from '../store/zustandStore';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useThemeStore } from '@/store/useThemeStore';

const Header = () => {
  const favCount = useStore((state: any) => state.favorites.length);
  const cartCount = useStore((state: any) => state.cart.length);
  const { theme, setTheme } = useThemeStore();
  const router = useRouter();

  const handleNavigateOrScroll = (id: string) => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      if (currentPath === '/') {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push(`/#${id}`);
      }
    }
  };

  return (
    <header
      className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white'} flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-3 sm:py-4 shadow-md sticky top-0 z-50 w-full flex-nowrap gap-2 sm:gap-0`}
    >
      <div
        onClick={() => {
          router.push('/');
        }}
        className="flex flex-col cursor-pointer sm:flex-row items-center gap-2 sm:gap-8 flex-nowrap w-full sm:w-auto"
      >
        <div className="text-xl sm:text-2xl flex items-center gap-4 font-bold whitespace-nowrap">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          Gadgets Zone
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-6 flex-nowrap">
        <nav className="flex gap-4 sm:gap-6 sm:ml-8 flex-nowrap transition-all duration-300 ease-in-out">
          <button
            onClick={() => handleNavigateOrScroll('features-section')}
            className="text-sm sm:text-base cursor-pointer font-medium hover:text-blue-600 transition whitespace-nowrap"
          >
            Features
          </button>
          <button
            onClick={() => handleNavigateOrScroll('products-section')}
            className="text-sm sm:text-base cursor-pointer font-medium hover:text-blue-600 transition whitespace-nowrap"
          >
            Products
          </button>
        </nav>

        <div
          className="cursor-pointer  hover:scale-110"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
          title="Toggle Theme"
        >
          {theme === 'dark' ? (
            <MdLightMode size={24} />
          ) : (
            <MdDarkMode size={24} />
          )}
        </div>

        <div
          className="relative cursor-pointer hover:scale-110"
          onClick={() => router.push('/favouritesPage')}
          title="View Favorites"
        >
          <FaHeart size={24} />
          {favCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[18px] text-center">
              {favCount}
            </span>
          )}
        </div>

        <div
          className="relative cursor-pointer hover:scale-110"
          onClick={() => router.push('/addToCart')}
          title="View Cart"
        >
          <FaShoppingCart size={24} className="text-blue-500" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[18px] sm:min-w-[20px] text-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
