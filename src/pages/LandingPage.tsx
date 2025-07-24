"use client";
import React, { useRef } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useStore, Item } from "../store/zustandStore";
import FeatureSection from "../components/FeatureSection";
import { featureIcons, features, products } from "@/mockdata/mockData";
import { useThemeStore } from "@/store/useThemeStore";
import Image from "next/image";

const ProductCard = ({ item, theme }: { item: Item; theme: string }) => {
  const {
    favorites,
    cart,
    addToFavorites,
    removeFromFavorites,
    addToCart,
    removeFromCart,
  } = useStore();
  const isFav = favorites.some((f) => f.id === item.id);
  const isCart = cart.some((c) => c.id === item.id);

  return (
    <div className={` glass-card ${theme === "dark" ? "bg-gray-800 border-2 text-white" : "bg-white text-gray-900"} rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center relative w-full`}>
      <img
        src={item.image}
        alt={item.title}
        className="w-40 h-40 sm:mb-4 rounded-full object-cover"
      />
      <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-center">
        {item.title}
      </h3>
      <div className="flex gap-2 sm:gap-4 mt-2">
        <button
          className={`p-2 cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out  rounded-full border ${
            isFav ? "bg-red-100 text-red-500" : "bg-gray-100 text-gray-500"
          }`}
          onClick={() =>
            isFav ? removeFromFavorites(item.id) : addToFavorites(item)
          }
        >
          <FaHeart />
        </button>
        <button
          className={`p-2 cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out rounded-full border ${
            isCart ? "bg-blue-100 text-blue-500" : "bg-gray-100 text-gray-500"
          }`}
          onClick={() => (isCart ? removeFromCart(item.id) : addToCart(item))}
        >
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const featuresRef = useRef(null);
  const productsRef = useRef(null);
  const { theme } = useThemeStore();

  return (
    <main>
      <section className={` ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-50 via-white to-purple-100"} relative flex flex-col items-center w-full py-10  overflow-hidden`}>
        <div className={"absolute -top-24 -left-24 w-96 h-96  rounded-full opacity-30 blur-3xl z-0"} />
        <div className="absolute -bottom-32 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl z-0" />
        <div className="flex flex-col md:flex-row gap-12 w-full  z-10 max-[900px]:px-6 px-40">
          <div className={`flex-1 glass-card rounded-2xl p-14 flex flex-row items-center  relative shadow-2xl overflow-hidden hero-main-card ${theme === "dark" ? " text-white" : "bg-white text-gray-900"}`}>
            <div className="flex-1 flex flex-col justify-center">
              <div className=" text-sm mb-2 font-semibold tracking-widest">
                LIMITED EDITION
              </div>
              <div className=" text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                iPhone 16 Pro Max
              </div>
              <div className=" text-lg mb-6 opacity-90">
                Featuring A18 Chip, Liquid Glass, and AI-Powered Innovation
              </div>
              <ul className=" text-base opacity-90 space-y-1 mb-4 list-disc list-inside pl-2">
                <li>6.9" Super Retina XDR Display</li>
                <li>Triple 48MP Pro Cameras</li>
                <li>All-day Battery Life</li>
                <li>Face ID & 5G Connectivity</li>
                <li>Available in 128GB, 256GB, 512GB, and 1TB</li>
                <li>Starting at $1,999</li>
                <li>Pre-order now for exclusive accessories</li>
                <li>Available in Space Black, Silver, Gold, and Deep Purple</li>

              </ul>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <Image
              alt="iPhone 16 Pro Max"
              unoptimized
              width={100}
              height={100}
              src="/iphoneImage.webp"
              className="w-64 md:w-96  rounded-xl shadow-2xl object-contain bg-transparent"
              style={{ zIndex: 1 }}
            />
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full md:w-[380px]">
            <div className={`${theme === "dark" ? " text-white" : "bg-white text-gray-900"} flex-1 glass-card rounded-2xl p-8 flex flex-col justify-between items-start shadow-lg border border-blue-200/40 transition-all duration-200 `}>
              <div className="text-xl font-semibold  mb-3">
                Smart Security Home Camera
              </div>
              <img
                src="https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Home%20Safety%20Security/Images/306821_gzib3o.png"
                alt="Smart Camera"
                className="w-28 h-28 object-contain mb-3 rounded-xl border-2 border-white/40 shadow"
              />
              <div className=" text-base mb-2">
                Save up to <span className="text-blue-700 font-bold">$450</span>
              </div>
              <ul className=" text-base space-y-1 mb-2 list-disc list-inside pl-2">
                <li>1080p Full HD Video</li>
                <li>360° Pan & Tilt</li>
                <li>Night Vision</li>
                <li>Motion Detection Alerts</li>
              </ul>
            </div>
            <div className="flex-1 glass-card  rounded-2xl p-8 flex flex-col justify-between items-start shadow-lg border border-gray-200/40 transition-all duration-200 ">
              <div className="text-xl font-semibold  mb-3">
                Galaxy S24 Ultra 5G
              </div>
              <img
                src="https://m.media-amazon.com/images/I/71CXhVhpM0L._UF1000,1000_QL80_.jpg"
                alt="Galaxy S24 Ultra"
                className="w-28 h-28 object-contain mb-3 rounded-xl border-2 border-white/40 shadow"
              />
              <div className=" text-base mb-2">
                Save up to <span className="text-blue-700 font-bold">$600</span>
              </div>
              <ul className=" text-base space-y-1 mb-2 list-disc list-inside pl-2">
                <li>6.8" QHD+ Dynamic AMOLED</li>
                <li>200MP Quad Camera</li>
                <li>Snapdragon 8 Gen 3</li>
                <li>5000mAh Battery</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-16 mt-28 w-full max-w-5xl z-10 px-4">
          {featureIcons?.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center group transition-all duration-200"
            >
              <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                {icon}
              </span>
              <span className="font-semibold  text-lg">
                {title}
              </span>
              <span className="text-gray-500 text-base">{desc}</span>
            </div>
          ))}
        </div>
      </section>
      <div
        id="features-section"
        ref={featuresRef}
        className="relative py-10 sm:py-20 px-2 sm:px-8"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={`absolute inset-0 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white/70 text-black"}  backdrop-blur-sm`}/>
        <div className={`relative z-10 ${theme === "dark" ? " text-white" : " text-black"}`}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center">
            Features
          </h2>
          <FeatureSection
          theme={theme}
            features={features}
            endImage="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80"
            endImageAlign="right"
          />
        </div>
      </div>

      <div
        id="products-section"
        ref={productsRef}
        className={`relative py-10 sm:py-20 px-2 sm:px-8 ${theme === "dark" ? " text-white bg-gray-800" : " text-black bg-gray-200"} `}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center">
            Products
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {products?.map((item) => (
              <ProductCard key={item.id} item={item} theme={theme} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
