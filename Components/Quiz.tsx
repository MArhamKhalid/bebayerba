import React from 'react'

const Quiz = () => {
  return (
    <section className='w-full min-h-[140vh] relative '>
        <div className=' w-full h-300 flex flex-col items-center gap-y-16  font-bold font-Argot bg-white py-[55px] '>
            <div>
                <div className='w-0.5 h-30 bg-[#023a1b]'></div>
            </div>
            <div className='text-[100px] w-full text-center capitalize flex flex-col items-center justify-center leading-30 text-[#1D4818]'>
                <h1 className='flex flex-col'>the only functional</h1>
                <div className=' capitalize flex gap-x-3'>
                    <div className='py-3 px-2 bg-[#FFD815] rounded-3xl -rotate-4 text-[#157E21]'>yerba mate</div>
                    <h1> with</h1>
                </div>
                <h1>science backed vitamins</h1>
            </div>
            <div className='flex gap-x-6'>
                <a href="#" className='text-[#FFD815] text-[30px] underline font-Aeonik'>Take a quiz</a>
                <img src="/image/quiz-arrow.svg" className='w-6' alt="" />
            </div>
        </div>
        <div className='w-full absolute -bottom-80 bg-white'>
            <img src="/image/bg-shop.png" className='object-contain w-full' alt="" />
        </div>

    </section>
  )
}

export default Quiz
