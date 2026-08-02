import React from 'react'

const Enchanced = () => {
  return (
    
    <section className='enchaned w-full relative flex justify-center flex-col'>
        <img src="/image/bg-01.png" alt="background" className='absolute h-full left-0 top-0 bg-cover bg-no-repeat overflow-hidden'/>
        <div className=' w-full h-300 flex flex-col justify-end items-center text-[#1D4818] font-bold font-Argot py-[55px] z-0'>
            <div className='text-[90px] w-full text-center uppercase flex flex-col items-center justify-center leading-26 text-white gap-0'>
                <div><h1 className='flex flex-col'>Powered By Nature.</h1></div>
                <div className=' capitalize flex gap-x-3'>
                    <div className='py-4 px-2 bg-[#FFD815] rounded-3xl -rotate-7 text-black'>Enhanced</div>
                    <h1 className='uppercase flex items-center'>By Science.</h1>
                </div>
                <div><h1>Built For You.</h1></div>
            </div>
        </div>
    </section>
  )
}

export default Enchanced
