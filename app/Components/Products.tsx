import React from 'react'

const Products = () => {
  return (
    <section className='w-full min-h-screen bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative overflow-hidden flex items-center justify-center'>
      
      {/* Decorative Background Leaves */}
      <div className='w-20 sm:w-28 md:w-36 lg:w-40 absolute -left-4 bottom-4 sm:bottom-8 opacity-60 pointer-events-none'>
        <img src="/image/leves-left-bottom-orange.png" alt="" className='w-full h-auto object-contain' />
      </div>
      <div className='w-20 sm:w-28 md:w-36 lg:w-40 absolute left-[45%] bottom-6 opacity-60 pointer-events-none hidden lg:block'>
        <img src="/image/leves-left-bottom-orange.png" alt="" className='w-full h-auto object-contain' />
      </div>
      <div className='w-24 sm:w-36 md:w-44 lg:w-48 absolute -right-2 bottom-2 sm:bottom-4 opacity-60 pointer-events-none'>
        <img src="/image/bottom-right-orange.png" alt="" className='w-full h-auto object-contain' />
      </div>
      <div className='w-16 sm:w-24 md:w-32 absolute right-2 top-[8%] sm:top-[12%] -rotate-12 opacity-60 pointer-events-none hidden sm:block'>
        <img src="/image/leaves-1-orange.png" alt="" className='w-full h-auto object-contain' />
      </div>
      <div className='w-28 sm:w-36 md:w-44 absolute -top-6 left-[20%] opacity-60 pointer-events-none hidden md:block'>
        <img src="/image/leaves-8-orange.png" alt="" className='w-full h-auto object-contain' />
      </div>

      {/* Main Content Wrapper */}
      <div className='w-full max-w-[1350px] mx-auto relative flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-8 z-10 my-auto'>
        
        {/* Left Column: Background Text & Can Image */}
        <div className='w-full lg:w-[38%] flex items-center justify-center relative min-h-[220px] sm:min-h-[300px] lg:min-h-[500px] py-4 lg:py-0'>
          <div className='relative flex items-center justify-center w-full h-full'>
            
            {/* Rotated Background Text - Scaled specifically for lg/xl screens */}
            <h2 className='uppercase font-Argot text-5xl sm:text-7xl md:text-8xl lg:text-[85px] xl:text-[105px] font-bold text-transparent [-webkit-text-stroke:1.5px_#E86000] sm:[-webkit-text-stroke:2px_#E86000] opacity-40 select-none -rotate-0 lg:-rotate-90 absolute inset-0 flex items-center justify-center whitespace-nowrap z-0 pointer-events-none tracking-wider transition-all duration-300'>
              orange
            </h2>
            
            {/* Can Image */}
            <img 
              src="/image/orange-can.png" 
              alt="Orange Can" 
              className='w-24 sm:w-32 md:w-40 lg:w-44 xl:w-48 object-contain drop-shadow-xl sm:drop-shadow-2xl z-10 relative'
            />
          </div>
        </div>

        {/* Right Column: Details & Columns */}
        <div className='w-full lg:w-[62%] flex flex-col md:flex-row gap-6 sm:gap-8 border-t lg:border-t-0 lg:border-l border-[#06622c33] pt-6 sm:pt-8 lg:pt-0 lg:pl-8 xl:pl-10'>
          
          {/* Sub-Column 1: Magnesium L-Threonate */}
          <div className='w-full md:w-1/2 flex flex-col justify-center gap-y-2.5 sm:gap-y-3 font-Aeonik lg:pr-4'>
            <div className='w-24 sm:w-32 md:w-36 -mb-1'>
              <img src="/image/magtein.png" alt="Magtein Logo" className='w-full h-auto object-contain' />
            </div>
            <h2 className='font-bold text-lg sm:text-2xl lg:text-[22px] xl:text-[25px] text-[#1D4818] leading-tight'>
              Magnesium L-Threonate
            </h2>
            <p className='text-xs sm:text-base lg:text-[14px] xl:text-[15px] font-medium text-gray-700 leading-relaxed'>
              MAGTEIN® is a patented form of magnesium called Magnesium L-Threonate. What makes it different from standard magnesium (like citrate or oxide) is that it is the only one clinically shown to effectively cross the blood-brain barrier, which means it can actually raise magnesium levels in the brain.
            </p>
            <a href="#" className='underline text-xs sm:text-base lg:text-[14px] xl:text-[15px] uppercase tracking-wide text-[#00692D] font-semibold hover:opacity-80 transition-opacity w-max pt-1'>
              Click for the science
            </a>
          </div>

          {/* Sub-Column 2: Vitamin K2 & Vitamin D3 */}
          <div className='w-full md:w-1/2 flex flex-col justify-between gap-6 md:border-l md:border-[#06622c33] md:pl-6 xl:pl-8 pt-6 md:pt-0 border-t md:border-t-0 border-[#06622c33]'>
            
            {/* Block 1: Vitamin K2 */}
            <div className='w-full flex flex-col justify-center gap-y-2 sm:gap-y-2.5 font-Aeonik'>
              <div className='w-24 sm:w-32 md:w-36 -mb-1'>
                <img src="/image/k2vital.png" alt="K2Vital Logo" className='w-full h-auto object-contain' />
              </div>
              <h2 className='font-bold text-lg sm:text-2xl lg:text-[22px] xl:text-[25px] text-[#1D4818] leading-tight'>
                Vitamin K2 as MK-7
              </h2>
              <p className='text-xs sm:text-base lg:text-[14px] xl:text-[15px] font-medium text-gray-700 leading-relaxed'>
                A premium form of Vitamin K2 that acts as a traffic director for Calcium—guiding it into your bones and teeth where it belongs, and away from your arteries. The result is stronger bones and a healthier heart.
              </p>
              <a href="#" className='underline text-xs sm:text-base lg:text-[14px] xl:text-[15px] uppercase tracking-wide text-[#00692D] font-semibold hover:opacity-80 transition-opacity w-max pt-1'>
                Click for the science
              </a>
            </div>

            {/* Block 2: Plant-Based Vitamin D3 */}
            <div className='w-full flex flex-col justify-center gap-y-2 sm:gap-y-2.5 font-Aeonik pt-5 sm:pt-6 border-t border-[#06622c33]'>
              <div className='w-24 sm:w-32 md:w-36 -mb-1'>
                <img src="/image/VegD3.png" alt="VegD3 Logo" className='w-full h-auto object-contain' />
              </div>
              <h2 className='font-bold text-lg sm:text-2xl lg:text-[22px] xl:text-[25px] text-[#1D4818] leading-tight'>
                Plant-Based Vitamin D3
              </h2>
              <p className='text-xs sm:text-base lg:text-[14px] xl:text-[15px] font-medium text-gray-700 leading-relaxed'>
                A vegan-friendly form of Vitamin D3 sourced from lichen, not animals. It helps your body absorb calcium and supports immune health, mood, and overall wellness.
              </p>
              <a href="#" className='underline text-xs sm:text-base lg:text-[14px] xl:text-[15px] uppercase tracking-wide text-[#00692D] font-semibold hover:opacity-80 transition-opacity w-max pt-1'>
                Click for the science
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Products