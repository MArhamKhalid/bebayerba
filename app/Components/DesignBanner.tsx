import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <section className='w-full py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-white overflow-hidden'>
      <div className='max-w-[1350px] mx-auto relative rounded-3xl sm:rounded-[36px] bg-[#0A3B21] text-white p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
        
        {/* Background Decorative Accents */}
        <div className='absolute -top-24 -left-24 w-64 h-64 sm:w-96 sm:h-96 bg-[#00692D] rounded-full blur-3xl opacity-40 pointer-events-none' />
        <div className='absolute -bottom-24 -right-24 w-64 h-64 sm:w-96 sm:h-96 bg-[#E86000] rounded-full blur-3xl opacity-30 pointer-events-none' />

        {/* Floating Decorative Leaf (Right Side Desktop) */}
        <div className='absolute right-4 top-4 w-16 sm:w-24 md:w-32 opacity-30 pointer-events-none hidden sm:block -rotate-12'>
          <img 
            src="/image/leaves-1-orange.png" 
            alt="Leaf accent" 
            className='w-full h-auto object-contain'
          />
        </div>

        {/* Content Side */}
        <div className='w-full lg:w-[58%] z-10 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-6'>
          
          {/* Discount/Badge */}
          <div className='inline-flex items-center gap-2 bg-[#FFD815] text-[#0A3B21] px-4 py-1.5 sm:px-5 sm:py-2 rounded-full font-Argot font-bold text-xs sm:text-sm uppercase tracking-wider -rotate-2 shadow-md'>
            ⚡ Limited Time Offer
          </div>

          {/* Main Headline */}
          <h2 className='font-Argot font-bold text-3xl sm:text-5xl lg:text-6xl uppercase leading-[1.1] tracking-tight'>
            Fuel Your Mind <br />
            <span className='text-[#FFD815]'>Without The Crash</span>
          </h2>

          {/* Description */}
          <p className='font-Aeonik text-sm sm:text-base md:text-lg text-gray-200 max-w-xl leading-relaxed font-normal'>
            Get <strong className='text-white font-semibold'>20% OFF</strong> your first 12-pack bundle. Infused with patented Magtein®, Vitamin K2, and Plant D3.
          </p>

          {/* Call to Action Buttons */}
          <div className='flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2'>
            <Link 
              href="/shop" 
              className='w-full sm:w-auto bg-[#E86000] hover:bg-[#c45100] text-white font-Aeonik font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center uppercase tracking-wide transform hover:-translate-y-0.5'
            >
              Claim 20% Off Now
            </Link>
            
            <Link 
              href="/science" 
              className='w-full sm:w-auto border border-white/30 hover:border-white text-white font-Aeonik font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 text-center uppercase tracking-wide hover:bg-white/10'
            >
              See The Science
            </Link>
          </div>

        </div>

        {/* Image/Product Visual Side */}
        <div className='w-full lg:w-[42%] z-10 flex items-center justify-center relative mt-4 lg:mt-0'>
          
          {/* Glow Behind Can */}
          <div className='absolute w-40 h-40 sm:w-56 sm:h-56 bg-[#FFD815] rounded-full blur-2xl opacity-20 pointer-events-none' />

          {/* Can Image Showcase */}
          <div className='relative flex items-center justify-center transform hover:scale-105 transition-transform duration-500 ease-out'>
            <img 
              src="/image/orange-can.png" 
              alt="MATE+ Citrus Can" 
              className='w-36 sm:w-48 md:w-56 lg:w-60 xl:w-64 h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]'
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Banner