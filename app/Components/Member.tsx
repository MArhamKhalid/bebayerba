import React from 'react'

const Member = () => {
  return (
    <section className='w-full min-h-screen bg-[#023a1b] overflow-hidden flex flex-col justify-end'>
        
        {/* Outer Yellow Border Wrapper */}
        <div className='w-full min-h-screen bg-[#F7C608] rounded-t-3xl sm:rounded-t-4xl p-4 sm:p-6 md:p-10 relative flex flex-col lg:flex-row justify-center gap-6 lg:gap-10 overflow-hidden'>
            
            {/* Side Watermark Text: BEBA (Desktop only) */}
            <div className='hidden lg:flex w-auto uppercase font-Argot text-[120px] xl:text-[200px] text-white opacity-20 leading-none py-4 px-4 z-0 shrink-0 select-none'>
                <h2>Beba</h2>
            </div>

            {/* Main Inner Green Card */}
            <div className='w-full min-h-[80vh] bg-[#023a1b] rounded-2xl sm:rounded-3xl lg:rounded-4xl uppercase p-6 sm:p-10 md:p-14 flex flex-col justify-between gap-y-10 relative z-10 overflow-hidden'>
                
                {/* Inner Watermark Text: YERBA */}
                <div className='w-full font-Argot text-5xl sm:text-8xl md:text-[140px] lg:text-[180px] xl:text-[210px] text-white opacity-20 leading-none pointer-events-none select-none'>
                    <h2>yerba</h2>
                </div>

                {/* Main Content Area */}
                <div className='w-full flex flex-col justify-start lg:pl-12 xl:pl-24 gap-y-6 sm:gap-y-8 text-white relative z-20 mt-auto lg:mt-0'>
                    <h1 className='font-Argot text-3xl sm:text-5xl md:text-7xl lg:text-[90px] xl:text-[110px] leading-tight sm:leading-tight lg:leading-[1.05]'>
                        brand<br className='hidden sm:block' /> ambassador
                    </h1>

                    <p className='font-Aeonik text-sm sm:text-base md:text-xl lg:text-[22px] xl:text-[24px] uppercase leading-relaxed max-w-3xl text-gray-100'>
                        Become a BEBA YERBA Brand Ambassador and share the brand’s energy, culture, and vibe with your community while enjoying exclusive perks, exciting campaigns, and opportunities to grow your influence with confidence.
                    </p>

                    <div className='flex items-center gap-x-3 pt-2'> 
                        <a href="#" className='text-white text-lg sm:text-2xl lg:text-[26px] underline font-Aeonik hover:text-[#F7C608] transition-colors'>
                            Learn More
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 sm:w-8 sm:h-8' fill="#ffffff" viewBox="0 0 24 24">
                            <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
                        </svg>
                    </div>
                </div>

            </div>
            
            {/* Bottom Overlay Featured Image */}
            <div className='absolute left-0 bottom-0 w-full lg:w-[55%] max-w-[750px] pointer-events-none z-10 opacity-30 lg:opacity-100'>
                <img src="/image/dsdsdd.png" alt="Brand Ambassador" className='w-full h-auto object-contain object-bottom' />
            </div>

        </div>

    </section>
  )
}

export default Member