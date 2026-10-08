"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
// Badla hua Import Path:
import { useCart } from '../context/CartContext';

const navLinks = [
  { name: 'Shop', href: '/shop' },
  { name: 'Our Story', href: '/about' },
  { name: 'Ambassador', href: '/ambassador' },
  { name: 'Wholesale', href: '/wholesale' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openCart } = useCart();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className='w-full fixed top-0 left-0 z-70'>
      
      {/* Top Banner */}
      <div className='w-full bg-[#1D4818]'>
        <div className='w-full py-2 bg-yellow-400 text-black flex justify-center items-center rounded-b-2xl md:rounded-b-3xl text-xs md:text-sm lg:text-base font-medium text-center px-4'>
          <h2>FREE SHIPPING ON ALL ORDERS OVER $120</h2>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className='relative w-full bg-[#1D4818] flex items-center justify-between py-3 px-6 md:py-6 md:px-10 lg:px-[120px] shadow-md'>
        
        {/* Left Links */}
        <div className='hidden lg:flex items-center gap-x-8 capitalize text-xl font-Aeonik text-white z-10'>
          {navLinks.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <Link 
                key={index} 
                href={item.href} 
                className={`relative py-1 group overflow-hidden font-Argot w-max transition-colors ${
                  isActive ? 'text-yellow-400 font-semibold' : 'text-white'
                }`}
              >
                <span>{item.name}</span>
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transition-transform duration-300 ease-in-out ${
                    isActive ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Logo */}
        <div className='lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex items-center z-10'>
          <Link href='/'>
            <img src="/image/logo-white.webp" alt="logo" className='w-14 md:w-16 lg:w-20' />
          </Link>
        </div>

        {/* Right Actions */}
        <div className='flex items-center gap-3 md:gap-4 z-10'>
          
          <button 
            onClick={openCart} 
            aria-label="Open Cart"
            className="w-10 h-10 md:w-12 md:h-12 bg-white text-white rounded-full flex justify-center items-center shadow-sm hover:scale-105 transition-transform"
          >
            <img src="/image/Cart.svg" alt="cart" className='w-5 h-5' />
          </button>

          <Link href='/profile' className='w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex justify-center items-center shadow-sm hover:scale-105 transition-transform hidden sm:flex'>
            <img src="/image/Account.svg" alt="account" className='w-5 h-5' />
          </Link>

          <div className='hidden xl:flex items-center gap-x-4'>
            <Link href='/find-a-store' className='px-4 py-2 rounded-3xl bg-white text-[#1D4818] font-medium hover:bg-yellow-400 transition-colors'>
              Find A Store
            </Link>
            <Link href='/buy-now' className='px-4 py-2 rounded-3xl bg-white text-[#1D4818] font-medium hover:bg-yellow-400 transition-colors'>
              Buy Now
            </Link>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='lg:hidden w-10 h-10 bg-white rounded-full flex flex-col justify-center items-center gap-1.5 z-50 focus:outline-none'
            aria-label="Toggle Menu"
          >
            <span className={`w-5 h-0.5 bg-[#1D4818] transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-[#1D4818] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-[#1D4818] transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

      </nav>

      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Sidebar Drawer */}
      <div className={`fixed top-0 right-0 w-[80%] max-w-[400px] h-full bg-[#1D4818] text-white shadow-2xl flex flex-col justify-between p-6 md:p-8 transform transition-transform duration-500 ease-in-out lg:hidden z-50 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className='flex items-center justify-between border-b border-white/20 pb-4'>
          <Link href='/' onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/image/logo-white.webp" alt="logo" className='w-14' />
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex justify-center items-center text-white text-xl transition-colors'
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>

        <div className='flex flex-col gap-y-6 my-auto'>
          <div className='flex flex-col gap-y-5 text-xl font-Aeonik capitalize'>
            {navLinks.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <Link 
                  key={index} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-colors ${
                    isActive ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-400'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className='flex flex-col gap-y-3 pt-6 border-t border-white/20'>
          <Link href='/find-a-store' onClick={() => setIsMobileMenuOpen(false)} className='w-full py-3 rounded-full bg-white text-[#1D4818] font-medium text-center hover:bg-yellow-400 transition-colors'>
            Find A Store
          </Link>
          <Link href='/buy-now' onClick={() => setIsMobileMenuOpen(false)} className='w-full py-3 rounded-full bg-yellow-400 text-black font-medium text-center hover:bg-white transition-colors'>
            Buy Now
          </Link>
        </div>
      </div>

    </header>
  );
}