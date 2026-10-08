import React from 'react'

const Hero = () => {
  return (
    <section className='hero w-full h-dvh overflow-hidden bg-white'>
        <div className='w-full h-full relative'>
            <div className='w-full h-full relative overflow-hidden'>
                
                {/* Background Slider */}
                <img 
                  src="/image/slider.png" 
                  alt="" 
                  className='w-full absolute top-24 left-0 object-contain inset-0 pointer-events-none'
                />
                
                {/* Back Crystals 1 */}
                <img 
                  src="/image/crystals-1.png" 
                  alt="background" 
                  className='w-full max-w-[1200px] h-auto absolute -bottom-32 md:-bottom-55 left-1/2 -translate-x-1/2 object-cover z-10 pointer-events-none' 
                />
                
                {/* Left Mint Can */}
                <img 
                  src="/image/mint-can.png" 
                  alt="Can" 
                  className='absolute -bottom-4 left-[15%] md:left-[28.5%] w-32 md:w-auto scale-97 z-20' 
                />
                
                {/* Right Orange Can */}
                <img 
                  src="/image/orange-can.png" 
                  alt="Can" 
                  className='absolute -bottom-4 right-[15%] md:right-[28.5%] w-32 md:w-auto scale-97 z-20' 
                />
                
                {/* Traditional Can (Middle - Centered properly) */}
                <img 
                  src="/image/traditional-can.png" 
                  alt="Can" 
                  className='absolute -bottom-14 left-1/2 -translate-x-1/2 w-36 md:w-auto scale-95 z-30' 
                />

                {/* Foreground Crystals / Ice Cube (Higher z-index so it overlaps or sits correctly) */}
                <img 
                  src="/image/crystals-2.png" 
                  alt="background" 
                  className='w-full absolute bottom-0 left-0 object-cover z-50 pointer-events-none' 
                />
                
                {/* Leaves & Orange Accents */}
                <img 
                  src="/image/leaves.png" 
                  alt="" 
                  className='absolute left-[5%] md:left-[15%] top-[50%] w-20 md:w-auto z-0 pointer-events-none'
                />
                <img 
                  src="/image/orange.png" 
                  alt="" 
                  className='absolute right-[5%] md:right-[15%] top-[50%] w-16 md:w-auto z-0 pointer-events-none'
                />

            </div>
        </div>
    </section>
  )
}

export default Hero