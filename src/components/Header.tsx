"use client";
import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { useStore } from '../store/zustandStore'
import { useRouter } from 'next/navigation'

const scrollToSectionById = (id: string) => {
  if (typeof window !== 'undefined') {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const Header = () => {
  const favCount = useStore((state: any) => state.favorites.length)
  const cartCount = useStore((state: any) => state.cart.length)
  const router = useRouter()

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-3 sm:py-4 bg-white shadow-md sticky top-0 z-50 w-full flex-nowrap gap-2 sm:gap-0">
      <div onClick={()=>{
        router.push("/")
      }} className="flex flex-col cursor-pointer sm:flex-row items-center gap-2 sm:gap-8 flex-nowrap w-full sm:w-auto">
        <div className="text-xl sm:text-2xl font-bold whitespace-nowrap">MyWebsite</div>
      
      </div>
      <div className="flex items-center gap-4 sm:gap-6 flex-nowrap">
      <nav className="flex gap-4 sm:gap-6 sm:ml-8 flex-nowrap">
          <button className="text-sm sm:text-base cursor-pointer font-medium hover:text-blue-600 transition whitespace-nowrap" onClick={() => scrollToSectionById('features-section')}>Features</button>

          <button className="text-sm sm:text-base cursor-pointer font-medium hover:text-blue-600 transition whitespace-nowrap" onClick={() => scrollToSectionById('products-section')}>Products</button>
        </nav>
        <div className="relative cursor-pointer" onClick={() => router.push('/favouritesPage')} title="View Favorites">
          <FaHeart size={30}  />
          {favCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[18px] sm:min-w-[30px] text-center">{favCount}</span>
          )}
        </div>
        <div className="relative cursor-pointer" onClick={() => router.push('/addToCart')} title="View Cart">
          <FaShoppingCart size={30}  />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[18px] sm:min-w-[20px] text-center">{cartCount}</span>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header 