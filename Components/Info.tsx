import React from 'react'

const Info = () => {
  return (
    <section className='w-full h-[120vh] bg-white overflow-hidden'>
        <div className='w-full flex flex-col gap-y-20 mt-5'>
            <div className='text-[66px] text-center uppercase font-Argot flex flex-1 justify-center text-[#1D4818]'>
                <h2>what is
                <span className='text-[88px] px-2 py-3 bg-[#1D4818] rounded-3xl inline-block -rotate-3 text-[#FFD815]'>yerba mate</span>
                </h2>
            </div>
            <div className='text-black text-center font-Aeonik text-[22px] font-bold capitalize'>
                <p>Yerba Mate comes from the leaves of the Ilex paraguariensis plant, naturally<br/>cultivated across the lush regions of South America. It has been consumed for<br/>hundreds of years not just for its clean, sustained energy, but for its remarkable<br/>nutritional profile.</p>
            </div>
            <div className='w-full flex justify-center gap-x-4'>
                <div className='w-81.5 h-165 rounded-xl overflow-hidden relative uppercase '>
                    <img src="/image/Brazil.png" alt="Brazil" className='w-full h-full absolute top-0 left-0 object-cover  z-0' />
                    <div className='absolute flex flex-col justify-start left-4 bottom-10 text-white z-15'>
                        <h1 className='font-Argot text-[44px]'>Barzil</h1>

                    </div>
                </div>
                <div className='w-224 h-165 rounded-xl overflow-hidden relative uppercase'>
                    <img src="/image/portugal.png" alt="Portugal" className='w-full h-full absolute top-0 left-0 bg-cover z-0' />
                    <div className='absolute flex flex-col justify-start left-4 bottom-10 text-white z-15'>
                        <h1 className='font-Argot text-[44px]'>Portugal</h1>

                    </div>
                </div>
                <div className='w-81.5 h-165 rounded-xl overflow-hidden relative uppercase'>
                    <img src="/image/Paraguay.png" alt="Paraguay" className='w-full h-full absolute top-0 left-0 object-cover z-10' />
                    <div className='absolute flex flex-col justify-start left-4 bottom-10 text-white z-15'>
                        <h1 className='font-Argot text-[44px]'>Paraguay</h1>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Info
