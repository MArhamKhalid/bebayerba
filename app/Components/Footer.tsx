'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Ambassador', href: '/ambassador' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'Contact', href: '/contact' },
  ]

  const legalLinks = [
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Returns', href: '/returns' },
  ]

  return (
    <footer className='w-full min-h-screen lg:min-h-[70vh] relative flex flex-col justify-between overflow-hidden bg-[radial-gradient(87.92%_87.92%_at_50%_12.08%,#00883E_0%,#002210_100%)] text-white pt-12 sm:pt-16 lg:pt-20 pb-8 px-4 sm:px-8 md:px-12 lg:px-16'>
      
      {/* Main Content Container */}
      <div className='w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-12 relative z-10 mb-12 sm:mb-16'>
        
        {/* Newsletter Section */}
        <div className='w-full lg:w-[40%] xl:w-[38%] flex flex-col justify-start text-white font-Aeonik gap-y-4 sm:gap-y-6'>
          <h4 className='font-Argot text-xl sm:text-2xl lg:text-3xl font-bold leading-snug'>
            Sign up to get 10% off your first order!
          </h4>
          
          <form onSubmit={(e) => e.preventDefault()} className='w-full flex items-center border-b border-white py-2 text-base sm:text-lg lg:text-xl'>
            <input 
              type="email" 
              required 
              placeholder='Enter Your Email' 
              className='outline-none bg-transparent w-full placeholder-white/70 pr-2 text-white'
            />
            <button type="submit" className='capitalize flex items-center gap-x-2 text-right px-2 shrink-0 hover:text-[#FFD815] transition-colors font-medium'>
              subscribe <span className='text-xl'>➝</span>
            </button>
          </form>

          <p className='capitalize text-xs sm:text-sm text-gray-200 leading-relaxed'>
            i have read the{' '}
            <Link href="/privacy" className='text-[#FFD815] underline hover:opacity-80 transition-opacity'>
              privacy policy
            </Link>{' '}
            provided by{' '}
            <span className='text-[#FFD815] uppercase font-Argot font-bold'>beba yerba</span>
          </p>
        </div>

        {/* Navigation Links Grid */}
        <div className='w-full sm:w-auto flex justify-start lg:justify-center'>
          <ul className='grid grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-3 sm:gap-y-4 text-base sm:text-lg lg:text-xl font-Aeonik'>
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className={`hover:text-[#FFD815] transition-colors ${
                      isActive ? 'text-[#FFD815] font-semibold underline' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Social Links */}
        <div className='flex sm:flex-row lg:flex-col items-start sm:items-center lg:items-start flex-wrap gap-4 sm:gap-6 font-Aeonik text-base sm:text-lg lg:text-xl'>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='flex items-center gap-x-3 hover:text-[#FFD815] transition-colors'
          >
            <img src="/image/instaicon.png" alt="Instagram" className='w-6 h-6 object-contain' />
            <span className='underline'>Instagram</span>
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='flex items-center gap-x-3 hover:text-[#FFD815] transition-colors'
          >
            <img src="/image/facebookicon.png" alt="Facebook" className='w-6 h-6 object-contain' />
            <span className='underline'>Facebook</span>
          </a>
          <a 
            href="https://tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='flex items-center gap-x-3 hover:text-[#FFD815] transition-colors'
          >
            <img src="/image/tiktocicon.png" alt="TikTok" className='w-6 h-6 object-contain' />
            <span className='underline'>TikTok</span>
          </a>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className='w-full max-w-[1400px] mx-auto border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm font-Aeonik relative z-20 text-gray-200'>
        <div className='text-center md:text-left'>
          <p>© 2026 - Copyright BEBA YERBA</p>
        </div>

        <div className='flex justify-center items-center gap-x-4 sm:gap-x-6'>
          {legalLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className='hover:text-[#FFD815] transition-colors underline sm:no-underline sm:hover:underline'
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className='flex justify-end items-center'>
          <img src="/image/Payment-Logo.png" alt="Payment options" className='h-6 sm:h-8 object-contain' />
        </div>
      </div>

      {/* Giant Watermark Background Text */}
      <div className='w-full flex justify-center items-center absolute bottom-0 left-0 pointer-events-none select-none z-0 opacity-15 sm:opacity-20 overflow-hidden'>
        <p className='font-Argot text-5xl sm:text-8xl md:text-[140px] lg:text-[200px] xl:text-[260px] leading-none uppercase text-transparent bg-[linear-gradient(180deg,#98A89F_0%,#002210_66%)] bg-clip-text whitespace-nowrap text-center transform translate-y-1/4 sm:translate-y-1/3'>
          beba yerba
        </p>
      </div>

    </footer>
  )
}

export default Footer