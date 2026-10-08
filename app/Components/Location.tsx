'use client'

import React from 'react'

const item = [
  { imagePath: "/image/image-1.png" },
  { imagePath: "/image/image-2.png" },
  { imagePath: "/image/image-3.png" },
  { imagePath: "/image/image-4.png" },
  { imagePath: "/image/image-5.png" },
  { imagePath: "/image/image-6.png" },
]

// Seamless sliding ke liye array repeat ki gayi hai
const duplicatedPartners = [...item, ...item, ...item]

const Location = () => {
  return (
    <section className='w-full bg-white px-4 sm:px-8 md:px-16 lg:px-20 pt-16 lg:pt-28 pb-12 relative overflow-hidden'>
      
      {/* Decorative Background Accent */}
      <div className='hidden lg:block w-[30%] absolute bottom-24 left-[20%] pointer-events-none opacity-80 z-0'>
        <img src="/image/asas.png" className='w-full h-auto' alt="" />
      </div>

      {/* Main Section Content */}
      <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 relative z-10 mb-12 lg:mb-20'>
        
        {/* Left Content Column */}
        <div className='w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left justify-between gap-8 lg:gap-12'>
          <div className='text-3xl sm:text-5xl lg:text-[60px] text-[#1D4818] flex flex-col items-center lg:items-start uppercase font-bold font-Argot leading-tight'>
            <h1>find your way</h1>
            <span className='text-3xl sm:text-5xl lg:text-[68px] py-2 px-4 sm:py-3 sm:px-6 bg-[#FFD815] rounded-2xl lg:rounded-3xl inline-block -rotate-3 text-[#0A3B21] my-2 shadow-md'>
              destination
            </span>
            <h1>awaits</h1>
          </div>

          <div className='flex gap-x-2 items-center text-[#0A3B21] capitalize pt-2'>
            <a href="#" className='text-base sm:text-lg lg:text-[18px] underline font-Aeonik font-semibold hover:opacity-80 transition-opacity'>
              find a store
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 sm:w-8 sm:h-8' fill="#0A3B21" viewBox="0 0 24 24">
              <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
            </svg>
          </div>
        </div>

        {/* Right Map Image */}
        <div className='w-full lg:w-[58%] flex justify-center items-center'>
          <img src="/image/map.png" alt="Map locations" className='w-full h-auto object-contain max-h-[500px]' />
        </div>

      </div>

      {/* Auto-sliding Partner Logos */}
      <div className='w-full relative z-10 overflow-hidden py-4 group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
        <div className='flex gap-4 sm:gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]'>
          {duplicatedPartners.map((currItem, index) => (
            <div 
              key={index} 
              className='w-32 sm:w-40 md:w-48 h-16 sm:h-20 bg-white flex justify-center items-center shadow-[2px_2px_17.8px_2px_#0000001A] rounded-xl p-3 shrink-0'
            >
              <img 
                src={currItem.imagePath} 
                alt="partner logo" 
                className='object-contain w-full h-full' 
              />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Location