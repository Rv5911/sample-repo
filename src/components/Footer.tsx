'use client';
import { useThemeStore } from '@/store/useThemeStore';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const { theme } = useThemeStore();
  return (
    <footer
      className={` ${theme == 'dark' ? 'bg-gray-800 text-white border-t-2 ' : 'bg-white text-gray-900'} p-4 sm:p-6 flex flex-col items-center gap-4 sm:gap-6`}
    >
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        className="w-20 h-20 sm:w-24 sm:h-24"
      />
      <p className="text-center text-sm sm:text-base">
        Copyright &copy; {new Date().getFullYear()} by{' '}
        <a
          href="https://github.com/#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Your Name
        </a>
      </p>
    </footer>
  );
};

export default Footer;
