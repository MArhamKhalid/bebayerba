import React from 'react'

const Community = () => {
  return (
    <section className='w-full h-[114vh] relative flex justify-start overflow-hidden'>
        <div className='w-full h-full left-0 bottom-0 absolute'>
            <img src="/image/bg-02.png" className=' w-full ' alt="" />
        </div>
        <div className=' w-full h-100 flex items-start gap-y-16 text-white font-bold font-Argot pt-15 px-24 z-0'>

            <div className='text-[88px] w-full h-full text-center capitalize flex flex-col items-start justify-center leading-16'>
                <div><h1 className='flex flex-col'>join the</h1></div>
                <span className='py-15 px-10 bg-[#FFD815] rounded-3xl inline-block -rotate-2 text-[#0A3B21]'>beba yerba</span>
                <div><h1>Community</h1></div>
            </div>
            <div className='flex gap-x-6 w-full h-full justify-end items-center pr-50'>
                <a href="#" className='text-white text-[30px] underline font-Aeonik'>Learn More</a>
                <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ffffff" viewBox="0 0 24 24" >
                <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
                </svg>
            </div>
        </div>
        <div className='w-full absolute left-0 bottom-0 '>
            <img src="/image/can-girl.png" className='object-contain w-full' alt="" />
        </div>

    </section>
  )
}

export default Community
