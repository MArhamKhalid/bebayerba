'use client'

import React from 'react'

const Simages = [
  { imagePath: "/image/images-01.jpeg" },
  { imagePath: "/image/images-02.jpeg" },
  { imagePath: "/image/images-03.jpeg" },
  { imagePath: "/image/images-04.png" },
]

const logo = [
  { logoPath: "/image/brand-01.png" },
  { logoPath: "/image/brand-02.png" },
  { logoPath: "/image/brand-03.png" },
  { logoPath: "/image/brand-04.png" },
]

// Smooth infinite loop ke liye array repeat ki gayi hai
const duplicatedLogos = [...logo, ...logo, ...logo, ...logo]

const Social = () => {
  return (
    <section className='w-full relative overflow-hidden bg-white'>
      
      {/* TOP SECTION: Yellow Background */}
      <div className='w-full bg-[#FFD815] relative pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-28 lg:pb-36 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
        
        <div className='w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 relative z-10'>
          
          {/* Left Column: Phone Image */}
          <div className='w-full sm:w-[320px] md:w-[380px] lg:w-[30%] shrink-0 flex justify-center items-center'>
            <img 
              src="/image/phoneImg.png" 
              alt="mobile mockup" 
              className='w-full h-auto object-contain max-h-[500px] lg:max-h-[650px]' 
            />
          </div>

          {/* Right Column: Heading, Social Links & Image Cards */}
          <div className='w-full lg:w-[68%] flex flex-col items-center lg:items-start gap-y-8 lg:gap-y-10'>
            
            {/* Header & Social Handles */}
            <div className='w-full flex flex-col xl:flex-row items-center xl:items-start justify-between gap-6 text-center lg:text-left'>
              
              <div className='text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] text-[#1D4818] uppercase font-bold font-Argot leading-tight xl:leading-[1.1]'>
                <h1>
                  turning snapshots <br className='hidden sm:block' />
                  into{' '}
                  <span className='text-3xl sm:text-5xl lg:text-[62px] xl:text-[72px] py-2 px-4 sm:py-3 sm:px-6 bg-[#1D4818] rounded-2xl lg:rounded-3xl inline-block -rotate-3 text-[#FFD815] my-1 shadow-md'>
                    stories
                  </span>
                </h1>
              </div>

              <div className='flex flex-col sm:flex-row xl:flex-col gap-3 sm:gap-6 xl:gap-3 items-center xl:items-start justify-center text-[#0A3B21] uppercase font-Argot shrink-0 pt-2 xl:pt-4'>
                <div className='flex items-center gap-x-3 text-base sm:text-lg xl:text-[20px] font-semibold'>
                  <img src="/image/tiktocicon.png" alt="Tiktok" className='w-7 h-7 sm:w-9 sm:h-9 object-contain' />
                  <a href="#" className='underline hover:opacity-80 transition-opacity'>add us on tiktok</a>
                </div>
                <div className='flex items-center gap-x-3 text-base sm:text-lg xl:text-[20px] font-semibold'>
                  <img src="/image/instaicon.png" alt="Instagram" className='w-7 h-7 sm:w-9 sm:h-9 object-contain' />
                  <a href="#" className='underline hover:opacity-80 transition-opacity'>add us on instagram</a>
                </div>
              </div>

            </div>

            {/* Snapshots Grid */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 pt-2'>
              {Simages.map((imgItem, index) => (
                <div 
                  className='w-full h-[200px] sm:h-[260px] md:h-[300px] lg:h-[280px] xl:h-[340px] relative group overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm' 
                  key={index}
                >
                  <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center pointer-events-none'>
                    <img src="/image/whiteinstaImg.png" alt="instagram icon" className='w-8 h-8 sm:w-10 sm:h-10 object-contain' />
                  </div>
                  <img 
                    src={imgItem.imagePath} 
                    alt="social snapshot" 
                    className='object-cover w-full h-full rounded-2xl sm:rounded-3xl bg-amber-50 group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Wave Divider */}
        <div className='w-full absolute bottom-0 lg:-bottom-[65%] left-0 leading-none z-10 pointer-events-none translate-y-[1px]'>
          <img src="/image/separator-white.png" alt="wave separator" className='w-full h-auto block' />
        </div>

      </div>

      {/* BOTTOM SECTION: Auto-sliding Logos */}
      <div className='w-full bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-8 relative z-20 overflow-hidden'>
        <div className='w-full max-w-[1400px] mx-auto flex flex-col items-center justify-center gap-8 sm:gap-12'>
          
          <div className='w-full text-center uppercase'>
            <h2 className='font-bold font-Argot text-3xl sm:text-5xl lg:text-[66px] text-[#0A3B21] flex items-center justify-center gap-2 sm:gap-4 flex-wrap'>
              <span>as</span>
              <span className='py-2 px-4 sm:py-3 sm:px-6 bg-[#1D4818] rounded-2xl lg:rounded-3xl inline-block -rotate-3 text-[#FFD815] shadow-md'>
                seen
              </span>
              <span>on</span>
            </h2>
          </div>

          {/* Marquee Logo Slider */}
          <div className='w-full overflow-hidden relative group py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
            <div className='flex gap-6 sm:gap-8 w-max animate-marquee group-hover:[animation-play-state:paused]'>
              {duplicatedLogos.map((item, index) => (
                <div 
                  key={index} 
                  className='w-36 sm:w-48 lg:w-56 h-16 sm:h-20 bg-white flex justify-center items-center shadow-[2px_2px_17.8px_2px_#0000001A] rounded-xl p-3 sm:p-4 shrink-0'
                >
                  <img src={item.logoPath} alt="brand logo" className='object-contain w-full h-full' />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Social