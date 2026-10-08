import React from 'react'

const Enchanced = () => {
  return (
    <section className='enchaned w-full min-h-[60vh] md:min-h-[80vh] relative flex justify-center flex-col overflow-hidden bg-[#0A3B21]'>
        
        {/* Background Image */}
        <img 
          src="/image/bg-01.png" 
          alt="background" 
          className='absolute w-full h-full inset-0 object-cover pointer-events-none'
        />

        {/* Content Container */}
        <div className='w-full h-full flex flex-col justify-center items-center text-[#1D4818] font-bold font-Argot py-16 md:py-[80px] px-4 z-10 my-auto'>
            <div className='text-4xl sm:text-6xl md:text-7xl lg:text-[90px] w-full text-center uppercase flex flex-col items-center justify-center leading-tight sm:leading-tight lg:leading-[105px] text-white gap-2 md:gap-0'>
                
                <div>
                    <h1 className='flex flex-col'>Powered By Nature.</h1>
                </div>

                <div className='capitalize flex flex-wrap items-center justify-center gap-2 md:gap-x-4 my-2'>
                    <div className='py-2 px-4 md:py-4 md:px-6 bg-[#FFD815] rounded-2xl md:rounded-3xl -rotate-3 md:-rotate-7 text-black text-3xl sm:text-5xl md:text-6xl lg:text-[85px] leading-none'>
                        Enhanced
                    </div>
                    <h1 className='uppercase flex items-center'>By Science.</h1>
                </div>

                <div>
                    <h1>Built For You.</h1>
                </div>

            </div>
        </div>

    </section>
  )
}

export default Enchanced