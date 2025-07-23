"use client"
import React, { useRef } from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { useStore, Item } from '../store/zustandStore'
import FeatureSection from '../components/FeatureSection';

const features = [
  {
    title: 'Feature One',
    description: 'This is a description for Feature One. It highlights the main benefit and value for users.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=800&q=80',
    extraInfo: 'Extra details about Feature One, such as use cases, statistics, or a testimonial.',
    highlights: [
      'Seamless integration with your workflow',
      'User-friendly interface for all ages',
      '24/7 customer support',
      'Highly customizable settings',
    ],
  },
  {
    title: 'Feature Two',
    description: 'Feature Two offers another great advantage, making your experience even better.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=800&q=80',
    extraInfo: 'Feature Two is trusted by thousands of users worldwide.',
    highlights: [
      'Advanced security and privacy',
      'Lightning-fast performance',
      'Regular updates and improvements',
    ],
  },
  {
    title: 'Feature Three',
    description: 'Discover how Feature Three can help you achieve your goals faster and easier.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=800&q=80',
    extraInfo: 'Feature Three integrates seamlessly with your workflow.',
    highlights: [
      'AI-powered recommendations',
      'Easy data import/export',
      'Mobile and desktop compatibility',
    ],
  },
  {
    title: 'Feature Four',
    description: 'Feature Four brings everything together for a seamless experience.',
    image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=facearea&w=800&q=80',
    extraInfo: 'Get started with Feature Four in just a few clicks!',
    highlights: [
      'One-click setup',
      'Comprehensive analytics dashboard',
      'Cloud backup and sync',
    ],
  },
];

const products: Item[] = [
  { id: 'p1', title: 'Product One', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&q=80' },
  { id: 'p2', title: 'Product Two', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&q=80' },
  { id: 'p3', title: 'Product Three', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80' },
  { id: 'p4', title: 'Product Four', image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=facearea&w=256&q=80' },
]


const ProductCard = ({ item }: { item: Item }) => {
  const { favorites, cart, addToFavorites, removeFromFavorites, addToCart, removeFromCart } = useStore()
  const isFav = favorites.some(f => f.id === item.id)
  const isCart = cart.some(c => c.id === item.id)

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center relative w-full">
      <img src={item.image} alt={item.title} className="w-40 h-40 sm:mb-4 rounded-full object-cover" />
      <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-center">{item.title}</h3>
      <div className="flex gap-2 sm:gap-4 mt-2">
        <button
          className={`p-2 cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out  rounded-full border ${isFav ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-500'}`}
          onClick={() => isFav ? removeFromFavorites(item.id) : addToFavorites(item)}
        >
          <FaHeart />
        </button>
        <button
          className={`p-2 cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out rounded-full border ${isCart ? 'bg-blue-100 text-blue-500' : 'bg-gray-100 text-gray-500'}`}
          onClick={() => isCart ? removeFromCart(item.id) : addToCart(item)}
        >
          <FaShoppingCart />
        </button>
      </div>
    </div>
  )
}

const LandingPage = () => {
  const featuresRef = useRef(null)
  const productsRef = useRef(null)

  const scrollToSection = (ref: React.RefObject<any>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main>
      <section className="relative flex flex-col items-center w-full py-40 bg-gradient-to-br from-blue-50 via-white to-purple-100 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl z-0" />
        <div className="absolute -bottom-32 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl z-0" />
        <div className="flex flex-col md:flex-row gap-12 w-full  z-10 px-40">
          {/* Main Product Card */}
          <div className="flex-1 text-black rounded-2xl p-14 flex flex-row items-center min-h-[440px] relative shadow-2xl overflow-hidden hero-main-card">
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-center">
              <div className=" text-sm mb-2 font-semibold tracking-widest">LIMITED EDITION</div>
              <div className=" text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">iPhone 16 Pro Max</div>
              <div className=" text-lg mb-6 opacity-90">Featuring A18 Chip, Liquid Glass, and AI-Powered Innovation</div>
              <ul className=" text-base opacity-90 space-y-1 mb-4 list-disc list-inside pl-2">
                <li>6.9" Super Retina XDR Display</li>
                <li>Triple 48MP Pro Cameras</li>
                <li>All-day Battery Life</li>
                <li>Face ID & 5G Connectivity</li>
              </ul>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center items-center">
              <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="iPhone 16 Pro Max" className="w-64 md:w-96 rounded-xl shadow-2xl object-contain  " style={{zIndex:1}} />
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full md:w-[380px]">
            <div className="flex-1 glass-card bg-blue-100/60 rounded-2xl p-8 flex flex-col justify-between items-start shadow-lg border border-blue-200/40 transition-all duration-200 hover:scale-105 hover:shadow-2xl">
              <div className="text-xl font-semibold text-gray-800 mb-3">Smart Security Home Camera</div>
              <img src="https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Home%20Safety%20Security/Images/306821_gzib3o.png" alt="Smart Camera" className="w-28 h-28 object-contain mb-3 rounded-xl border-2 border-white/40 shadow" />
              <div className="text-gray-700 text-base mb-2">Save up to <span className="text-blue-700 font-bold">$450</span></div>
              <ul className="text-gray-700 text-base space-y-1 mb-2 list-disc list-inside pl-2">
                <li>1080p Full HD Video</li>
                <li>360° Pan & Tilt</li>
                <li>Night Vision</li>
                <li>Motion Detection Alerts</li>
              </ul>
            </div>
            <div className="flex-1 glass-card bg-gray-100/60 rounded-2xl p-8 flex flex-col justify-between items-start shadow-lg border border-gray-200/40 transition-all duration-200 hover:scale-105 hover:shadow-2xl">
              <div className="text-xl font-semibold text-gray-800 mb-3">Galaxy S24 Ultra 5G</div>
              <img src="https://m.media-amazon.com/images/I/71CXhVhpM0L._UF1000,1000_QL80_.jpg" alt="Galaxy S24 Ultra" className="w-28 h-28 object-contain mb-3 rounded-xl border-2 border-white/40 shadow" />
              <div className="text-gray-700 text-base mb-2">Save up to <span className="text-blue-700 font-bold">$600</span></div>
              <ul className="text-gray-700 text-base space-y-1 mb-2 list-disc list-inside pl-2">
                <li>6.8" QHD+ Dynamic AMOLED</li>
                <li>200MP Quad Camera</li>
                <li>Snapdragon 8 Gen 3</li>
                <li>5000mAh Battery</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Feature Icons Row */}
        <div className="flex flex-wrap justify-center gap-16 mt-16 w-full max-w-5xl z-10 px-4">
          <div className="flex flex-col items-center group transition-all duration-200">
            <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">🚀</span>
            <span className="font-semibold text-gray-800 text-lg">Free Shipping</span>
            <span className="text-gray-500 text-base">For all orders $200</span>
          </div>
          <div className="flex flex-col items-center group transition-all duration-200">
            <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">🔄</span>
            <span className="font-semibold text-gray-800 text-lg">1 & 1 Returns</span>
            <span className="text-gray-500 text-base">Cancellation after 1 day</span>
          </div>
          <div className="flex flex-col items-center group transition-all duration-200">
            <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">🛡️</span>
            <span className="font-semibold text-gray-800 text-lg">100% Secure Payments</span>
            <span className="text-gray-500 text-base">Gurantee secure payments</span>
          </div>
          <div className="flex flex-col items-center group transition-all duration-200">
            <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">💬</span>
            <span className="font-semibold text-gray-800 text-lg">24/7 Dedicated Support</span>
            <span className="text-gray-500 text-base">Anywhere & anytime</span>
          </div>
        </div>
      </section>
       <div id="features-section" ref={featuresRef} className="relative py-10 sm:py-20 px-2 sm:px-8" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
        <div className="relative z-10 ">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center">Features</h2>
          <FeatureSection features={features} endImage="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80" endImageAlign="right" />
        </div>
      </div>

      <div id="products-section" ref={productsRef} className="relative py-10 sm:py-20 px-2 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center">Products</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

     
    </main>
  )
}

export default LandingPage 