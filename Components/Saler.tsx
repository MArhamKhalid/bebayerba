import React from 'react'

const Banner = () => {
  return (
    <section className='w-full h-[140vh] relative flex justify-between items-center overflow-hidden'>
      <div className='w-full h-full absolute top-0 left-0'>
        <img src="/image/bg-wholeseller.png" alt="background" className='bg-cover bg-center'/>
      </div>
      
      <div className=' w-full h-full flex z-0'>
        <div className='w-[40%] h-full flex flex-col gap-y-[40px] justify-center pl-30'>
          <div className='text-[88px] w-full uppercase flex flex-col text-white font-bold font-Argot leading-18'>
              <h1>become</h1>
              <span className='py-10 text-center bg-[#FFD815] rounded-3xl inline-block -rotate-3 text-[#0A3B21]'>beba yerba</span>
              <h1>wholeseller</h1>
          </div>
          <div className='w-full text-white font-Aeonik text-[24px] capitalize'>
            <p>As a Beba Yerba wholeseller, we are committed to<br/>supplying premium-quality yerba products to retailers,<br/>cafes, and distributors at competitive prices</p>
          </div>
          <div className='flex gap-x-6 w-full'>
              <a href="#" className='text-white text-[30px] underline font-Aeonik'>Learn More</a>
              <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ffffff" viewBox="0 0 24 24" >
              <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
              </svg>
          </div>

        </div>
        <div className='w-[58%] absolute right-0 top-0'>
          <img src="/image/Wholeseller-image.png" alt="background" className='w-full h-full' />
        </div>
      </div>
        {/* <div className='w-full absolute -bottom-160'> */}
            <img src="/image/separator-white.png" className=' absolute -bottom-120 w-full' alt="" />
        {/* </div> */}
    </section>
  )
}

export default Banner
