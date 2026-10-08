import React from 'react'

const Community = () => {
  return (
    <section className='w-full min-h-screen relative flex flex-col justify-between overflow-hidden bg-[#0A3B21]'>
        
        {/* Background Image */}
        <div className='w-full h-full left-0 top-0 absolute pointer-events-none z-0'>
            <img src="/image/bg-02.png" className='w-full h-full object-cover' alt="background" />
        </div>

        {/* Content Section */}
        <div className='w-full flex flex-col md:flex-row items-center justify-between gap-y-8 text-white font-bold font-Argot pt-12 sm:pt-16 lg:pt-20 px-6 sm:px-12 md:px-16 lg:px-24 z-10'>

            {/* Left Heading */}
            <div className='text-4xl sm:text-6xl lg:text-[88px] w-full capitalize flex flex-col items-center md:items-start text-center md:text-left leading-tight sm:leading-tight lg:leading-[100px] gap-2 md:gap-4'>
                <h1>join the</h1>
                <span className='py-3 px-6 sm:py-4 sm:px-8 lg:py-6 lg:px-10 bg-[#FFD815] rounded-2xl lg:rounded-3xl inline-block -rotate-2 text-[#0A3B21] my-1 shadow-md'>
                    beba yerba
                </span>
                <h1>Community</h1>
            </div>

            {/* Right CTA Link */}
            <div className='flex items-center justify-center md:justify-end gap-x-3 w-full md:w-auto shrink-0'>
                <a href="#" className='text-white text-xl sm:text-2xl lg:text-[30px] underline font-Aeonik hover:text-[#FFD815] transition-colors'>
                    Learn More
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9' fill="#ffffff" viewBox="0 0 24 24">
                    <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
                </svg>
            </div>

        </div>

        {/* Bottom Feature Image */}
        <div className='w-full relative z-10 pt-12 md:pt-0 pointer-events-none mt-auto'>
            <img src="/image/can-girl.png" className='w-full h-auto  object-cover object-bottom ' alt="Community Beba Yerba" />
        </div>

    </section>
  )
}

export default Community