import React from 'react'


const Benefits = () => {
  return (
    <section className='w-full h-dvh relative flex justify-center px-20 pt-46 overflow-hidden'>
        <div className='absolute left-0 top-0 '>
            <img src="/image/fitness-3-new.png" alt="" className='object-cover'/>
        </div>
          <div className='w-full z-10 flex justify-start flex-col gap-y-40'>
            <div className='text-[88px] w-full uppercase flex justify-center text-center text-[#0A3B21] font-bold font-Argot leading-18 '>
                <h1>be active and
                <span className='py-10 text-center bg-[#FFD815] rounded-3xl inline-block -rotate-3 text-[#0A3B21]'>healthy</span>
                </h1>
            </div>
            <div className='w-full h-70 flex justify-center'>
                <div className='w-[40%] text-center text-black bg-orange-400 rounded-3xl py-8 px-10 flex flex-col gap-y-6'>
                    <h3 className=' font-aeonik font-normal text-xl sm:text-2xl md:text-[30px] text-center capitalize tracking-[1px] md:tracking-[2px]'>YERBA MATE NATURAL NUTRITIONAL BENEFITS</h3>
                    <p className='font-aeonik text-sm sm:text-[15px] md:text-[16px] text-center tracking-[1px] md:tracking-[2px] leading-relaxed'>Yerba Mate is naturally rich in vitamin, minerals, and antioxidant. It delivers polyphenols, saponins, and compounds like vitamin B and C, potassiurn, magnesium, and zinc. This nutrient density is why Yerba Mate has long been valued as more then just an energy source.</p>

                </div>
            </div>
          </div>
    </section>
  )
}

export default Benefits
