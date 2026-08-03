import React from 'react'

const Member = () => {
  return (
    <section className='w-full h-dvh bg-[#023a1b] overflow-hidden'>
        <div className='w-full h-full flex justify-center gap-x-20 bg-[#F7C608] rounded-t-4xl px-10 py-10 relative'>
            <div className='w-130 uppercase font-Argot text-[210px] text-white opacity-22 leading-50 py-10 px-10 z-0'>
                <h2>Beba</h2>
            </div>
            <div className='w-full h-full  bg-[#023a1b] rounded-4xl uppercase py-10 px-10 flex flex-col gap-y-26'>
                <div className='w-full h-50  font-Argot text-[210px] text-white opacity-22 leading-50'>
                    <h2>yerba</h2>
                </div>
                <div className='w-full'>
                    <div className='w-full flex flex-col justify-start pl-60 gap-y-10 text-white'>
                        <h1 className='font-Argot text-[110px] leading-26'>brand<br/>ambassador</h1>
                        <p className='font-Aeonik text-[24px] uppercase leading-10'>Become a BEBA YERBA Brand Ambassador and share the brand’s<br/>energy, culture, and vibe with your community while enjoying<br/>exclusive perks, exciting campaigns, and opportunities to grow your<br/>influence with confidence.</p>
                        <div className='flex flex-1'>                
                            <a href="#" className='text-white text-[26px] underline font-Aeonik'>Learn More</a>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ffffff" viewBox="0 0 24 24" >
                            <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='absolute left-0 bottom-0 w-230.5 h-241'>
                <img src="/image/dsdsdd.png" alt="background"  className='h-[100%] w-[100%]'/>
            </div>
        </div>
    </section>
  )
}

export default Member
