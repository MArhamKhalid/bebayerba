import React from 'react'
import Link from 'next/link'

const Quiz = () => {
  return (
    <section className='w-full min-h-screen relative overflow-hidden bg-white flex flex-col justify-between items-center'>
      
      {/* Main Content Area */}
      <div className='w-full flex flex-col items-center gap-y-10 md:gap-y-14 font-bold font-Argot py-12 md:py-[45px] px-4 relative z-10'>
        
        {/* Top Line / Indicator */}
        <div>
          <div className='w-0.5 h-16 md:h-24 bg-[#023a1b] mx-auto'></div>
        </div>

        {/* Main Heading Section */}
        <div className='text-4xl sm:text-6xl md:text-8xl lg:text-[88px] xl:text-[96px] w-full text-center capitalize flex flex-col items-center justify-center leading-tight md:leading-tight text-[#1D4818]'>
          <h1 className='flex flex-col'>the only functional</h1>
          
          <div className='capitalize flex flex-wrap items-center justify-center gap-2 md:gap-x-3 my-2'>
            <div className='py-2 md:py-3 px-3 md:px-4 bg-[#FFD815] rounded-2xl md:rounded-3xl -rotate-3 md:-rotate-4 text-[#157E21] text-3xl sm:text-5xl md:text-7xl lg:text-[78px] xl:text-[86px]'>
              yerba mate
            </div>
            <h1>with</h1>
          </div>
          
          <h1>science backed vitamins</h1>
        </div>

        {/* Quiz Link and Arrow */}
        <div className='flex items-center gap-x-4 md:gap-x-6'>
          <Link href="/science" className='text-[#FFD815] text-xl sm:text-2xl md:text-[30px] underline font-Aeonik hover:opacity-80 transition-opacity'>
            Take a quiz
          </Link>
          <img src="/image/quiz-arrow.svg" className='w-5 md:w-6' alt="arrow" />
        </div>

      </div>

      {/* Bottom Background Image - Absolute Positioned Outside Flow */}
      <div className='w-full absolute bottom-0 lg:-bottom-[60%] left-0 pointer-events-none'>
        <img 
          src="/image/bg-shop.png" 
          className='w-full h-auto  object-cover object-bottom block' 
          alt="shop background" 
        />
      </div>

    </section>
  )
}

export default Quiz