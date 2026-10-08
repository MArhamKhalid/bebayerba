import React from 'react'

const Banner = () => {
  return (
    <section className='w-full min-h-screen relative flex justify-between items-center overflow-hidden bg-[#0A3B21] py-16 lg:py-0'>
      
      {/* Background Image */}
      <div className='w-full h-full absolute top-0 left-0 pointer-events-none z-0'>
        <img src="/image/bg-wholeseller.png" alt="background" className='w-full h-full object-cover'/>
      </div>
      
      {/* Main Content Container */}
      <div className='w-full min-h-screen flex flex-col lg:flex-row items-center justify-between z-10 px-6 sm:px-12 lg:pl-20 lg:pr-0 pt-12 lg:pt-0 gap-y-10'>
        
        {/* Left Column: Content */}
        <div className='w-full lg:w-[48%] flex flex-col gap-y-6 lg:gap-y-10 text-center lg:text-left items-center lg:items-start'>
          
          {/* Heading */}
          <div className='text-4xl sm:text-6xl md:text-7xl lg:text-[88px] w-full uppercase flex flex-col text-white font-bold font-Argot leading-tight'>
              <h1>become</h1>
              <span className='py-3 px-6 sm:py-4 sm:px-8 bg-[#FFD815] rounded-2xl sm:rounded-3xl inline-block -rotate-3 text-[#0A3B21] my-2 self-center lg:self-start shadow-md'>
                beba yerba
              </span>
              <h1>wholeseller</h1>
          </div>

          {/* Description */}
          <div className='w-full text-white font-Aeonik text-base sm:text-lg lg:text-[22px] capitalize max-w-xl leading-relaxed'>
            <p>
              As a Beba Yerba wholeseller, we are committed to supplying premium-quality yerba products to retailers, cafes, and distributors at competitive prices.
            </p>
          </div>

          {/* CTA Link */}
          <div className='flex items-center justify-center lg:justify-start gap-x-4 w-full pt-2'>
              <a href="#" className='text-white text-xl sm:text-2xl lg:text-[30px] underline font-Aeonik hover:text-[#FFD815] transition-colors'>
                Learn More
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9' fill="#ffffff" viewBox="0 0 24 24">
                <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
              </svg>
          </div>

        </div>

        {/* Right Column: Featured Image */}
        <div className='w-full lg:w-[50%] flex justify-center lg:justify-end relative mt-6 lg:mt-0'>
          <img src="/image/Wholeseller-image.png" alt="Beba Yerba Wholeseller" className='w-full max-w-md lg:max-w-none h-auto object-contain' />
        </div>

      </div>

      {/* Bottom Separator */}
      <div className='w-full absolute bottom-0 lg:-bottom-[60%] left-0 pointer-events-none z-20'>
        <img src="/image/separator-white.png" className='w-full h-auto object-cover' alt="separator" />
      </div>

    </section>
  )
}

export default Banner