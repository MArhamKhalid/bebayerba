import React from 'react'

const Carts = () => {
  return (
    <section className='relative w-full z-10 flex justify-center items-center bg-[#013D1C] py-16 px-4 sm:px-8'>
        <div className='flex flex-col w-full max-w-7xl items-center gap-y-10 lg:gap-y-16'>
            
            {/* Section Title */}
            <div className='w-full uppercase font-Argot text-center px-2'>
                <h2 className='text-3xl sm:text-5xl lg:text-[66px] text-white leading-tight'>
                    <span className='text-[#FFD815]'>enhanced plant </span> based energy drink
                </h2>
            </div>
            
            {/* Cards Container */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center'>
                
                {/* Card 1: Mint Flavor */}
                <div className='w-full max-w-sm flex flex-col border border-solid border-white/55 rounded-3xl overflow-hidden bg-[#013D1C] shadow-lg'>
                    <div className='w-full aspect-square flex items-center justify-center p-3 bg-[#013D1C]'>
                        <img src="/image/mint-can-product.png" alt="mint flavor" className='w-64 sm:w-72 lg:w-full h-auto object-contain rounded-t-3xl'/>
                    </div>
                    <div className='px-6 py-6 uppercase w-full text-center text-white flex flex-col gap-y-3'>
                        <h4 className='font-Aeonik text-xl sm:text-2xl font-bold'>beba yerba - mint flavor</h4>
                        <p className='font-Aeonik text-lg sm:text-xl font-semibold'>(12 can) <span className='font-Argot text-[#FFD815]'>$36.00 usd</span></p>
                        
                        {/* Rating Stars */}
                        <div className='flex gap-x-2 justify-center items-center py-1 text-xl sm:text-2xl'>
                            <span className='font-bold mr-1'>4.2</span>
                            <img src="/image/star.svg" alt="star" className='w-5 h-5' />
                            <img src="/image/star.svg" alt="star" className='w-5 h-5' />
                            <img src="/image/star.svg" alt="star" className='w-5 h-5' />
                            <img src="/image/star.svg" alt="star" className='w-5 h-5' />
                        </div>
                        
                        <button className='uppercase font-Argot w-full bg-[#FFD815] text-black font-bold py-3 rounded-xl cursor-pointer hover:bg-yellow-400 transition-colors'>
                            buy now
                        </button>
                    </div>
                </div>

                {/* Card 2: Traditional Flavor */}
                <div className='w-full max-w-sm flex flex-col border border-solid border-white/55 rounded-3xl overflow-hidden bg-[#013D1C] shadow-lg'>
                    <div className='w-full aspect-square flex items-center justify-center p-3 bg-[#013D1C]'>
                        <img src="/image/traditional-can-product.png" alt="traditional flavor" className='w-64 sm:w-72 lg:w-full h-auto object-contain rounded-t-3xl'/>
                    </div>
                    <div className='px-6 py-6 uppercase w-full text-center text-white flex flex-col gap-y-3'>
                        <h4 className='font-Aeonik text-xl sm:text-2xl font-bold'>beba yerba - traditional</h4>
                        <p className='font-Aeonik text-lg sm:text-xl font-semibold'>(12 can) <span className='font-Argot text-[#FFD815]'>$36.00 usd</span></p>
                        
                        {/* Rating Stars */}
                        <div className='flex gap-x-2 justify-center items-center py-1 text-xl sm:text-2xl'>
                            <span className='font-bold mr-1'>4.2</span>
                            <img src="/image/star.svg" alt="star" className='w-5 h-5' />
                            <img src="/image/star.svg" alt="star" className='w-5 h-5' />
                            <img src="/image/star.svg" alt="star" className='w-5 h-5' />
                            <img src="/image/star.svg" alt="star" className='w-5 h-5' />
                        </div>
                        
                        <button className='uppercase font-Argot w-full bg-[#FFD815] text-black font-bold py-3 rounded-xl cursor-pointer hover:bg-yellow-400 transition-colors'>
                            buy now
                        </button>
                    </div>
                </div>

                {/* Card 3: Orange Flavor */}
                <div className='w-full max-w-sm flex flex-col border border-solid border-white/55 rounded-3xl overflow-hidden bg-[#013D1C] shadow-lg md:col-span-2 lg:col-span-1'>
                    <div className='w-full aspect-square flex items-center justify-center p-3 bg-[#013D1C]'>
                        <img src="/image/orange-can-product.png" alt="orange flavor" className='w-64 sm:w-72 lg:w-full h-auto object-contain rounded-t-3xl'/>
                    </div>
                    <div className='px-6 py-6 uppercase w-full text-center text-white flex flex-col gap-y-3'>
                        <h4 className='font-Aeonik text-xl sm:text-2xl font-bold'>beba yerba - orange flavor</h4>
                        <p className='font-Aeonik text-lg sm:text-xl font-semibold'>(12 can) <span className='font-Argot text-[#FFD815]'>$36.00 usd</span></p>
                        
                        {/* Rating Stars */}
                        <div className='flex gap-x-2 justify-center items-center py-1 text-xl sm:text-2xl'>
                            <span className='font-bold mr-1'>4.2</span>
                            <img src="/image/star.svg" alt="star" className='w-5 h-5' />
                            <img src="/image/star.svg" alt="star" className='w-5 h-5' />
                            <img src="/image/star.svg" alt="star" className='w-5 h-5' />
                            <img src="/image/star.svg" alt="star" className='w-5 h-5' />
                        </div>
                        
                        <button className='uppercase font-Argot w-full bg-[#FFD815] text-black font-bold py-3 rounded-xl cursor-pointer hover:bg-yellow-400 transition-colors'>
                            buy now
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Carts