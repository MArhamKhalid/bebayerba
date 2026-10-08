import React from 'react'

const Benefits = () => {
  return (
    <section className='w-full min-h-screen relative flex justify-center items-center px-4 sm:px-8 md:px-16 lg:px-20 py-20 overflow-hidden bg-white'>
        
        {/* Full Section Background Image */}
        <div className='absolute inset-0 w-full h-full pointer-events-none z-0'>
            <img 
              src="/image/fitness-3-new.png" 
              alt="fitness background" 
              className='w-full h-full object-cover opacity-20 sm:opacity-30'
            />
        </div>

        {/* Main Content */}
        <div className='w-full z-10 flex justify-center flex-col items-center gap-y-16 lg:gap-y-20 relative'>
            
            {/* Heading Section */}
            <div className='w-full uppercase flex justify-center text-center text-[#0A3B21] font-bold font-Argot leading-tight'>
                <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-[88px] flex flex-col sm:block gap-2'>
                    be active and{' '}
                    <span className='py-2 px-6 sm:py-4 sm:px-8 bg-[#FFD815] rounded-3xl inline-block -rotate-3 text-[#0A3B21] shadow-md'>
                        healthy
                    </span>
                </h1>
            </div>

            {/* Info Card Section */}
            <div className='w-full flex justify-center'>
                <div className='w-full max-w-xl lg:max-w-3xl text-black bg-orange-400 rounded-3xl py-8 px-6 sm:px-10 flex flex-col gap-y-6 shadow-xl'>
                    <h3 className='font-aeonik font-bold text-lg sm:text-2xl md:text-[30px] text-center capitalize tracking-wide text-[#0A3B21]'>
                        YERBA MATE NATURAL NUTRITIONAL BENEFITS
                    </h3>
                    <p className='font-aeonik text-sm sm:text-base md:text-[17px] text-center tracking-wide leading-relaxed text-gray-900'>
                        Yerba Mate is naturally rich in vitamin, minerals, and antioxidant. It delivers polyphenols, saponins, and compounds like vitamin B and C, potassium, magnesium, and zinc. This nutrient density is why Yerba Mate has long been valued as more then just an energy source.
                    </p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Benefits