import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-[67.5vh] relative flex justify-center overflow-hidden bg-[radial-gradient(87.92%_87.92%_at_50%_12.08%,#00883E_0%,#002210_100%)]'>
          <div className=' w-full flex items-center pb-50 pt-20 px-15 z-10'>
            <div className='w-180 flex flex-col justify-start text-white font-Aeonik text-[18px] gap-y-10'>
              <h4 className='font-Argot text-2xl'>Sign up to get 10% off your first order!</h4>
              <div className='w-full flex justify-between items-center border-b border-white text-[22px] leading-2'>
               <input type="email" required placeholder='Enter Your Email' className='outline-none w-full '/>
               <a href="#" className='capitalize flex gap-x-2 text-right px-2 '>subscribe<span>➝</span></a>
              </div>
              <p className='capitalize'>i have read the <span className='text-[#FFD815]'>privacy policy
                </span> provided by <span className='text-[#FFD815] uppercase font-Argot'>beba yerba</span></p>
            </div>
            <div className='w-full flex justify-center'>
              <ul className='gap-x-4 gap-y-0 grid grid-cols-2 text-white text-[20px] font-Aeonik'>
                <a href="/Shop">Shop</a>
                <a href="/Reviews">Reviews</a>
                <a href="/Ambassador">Ambassador</a>
                <a href="/Our Story">Our Story</a>
                <a href="/Wholsale">Wholsale</a>
                <a href="/Contact">Contact</a>
              </ul>
            </div>
            <div className='flex flex-col justify-end gap-y-6'>
              <div className='flex items-center gap-x-2 font-Aeonik text-[24px] text-white hover:text-amber-50'>
                <img src="/image/instaicon.png" alt="Instagram" />
                <a href="#instagram" className='underline'>Instagram</a>
              </div>
              <div className='flex items-center gap-x-2 font-Aeonik text-[24px] text-white hover:text-amber-50'>
                <img src="/image/" alt="Facebook" />
                <a href="#Facebook" className='underline'>Facebook</a>
              </div>
              <div className='flex items-center gap-x-2 font-Aeonik text-[24px] text-white hover:text-amber-50'>
                <img src="/image/tiktocicon.png" alt="TikTok" />
                <a href="#TikTok" className='underline'>TikTok</a>
              </div>
            </div>
          </div>
        <div className='w-full text-white flex justify-between absolute bottom-10 px-15 z-20'>
          <div className='flex justify-start items-center'><p>© 2026 - Copyright BEBA YERBA</p></div>
          <div className='flex justify-center items-center gap-x-5'>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Returns</a>
          </div>
          <div className='flex justify-end items-center'><img src="/image/Payment-Logo.png" alt="" /></div>
        </div>
        <div className='flex justify-center items-center absolute bottom-0 z-0 bg-[linear-gradient(180deg,#98A89F_0%,#002210_66%)] bg-clip-text'>
          <p className='font-argot text-[300px] leading-[300px] uppercase text-transparent text-center'>beba yerba</p>
        </div>
    </footer>
  )
}

export default Footer
