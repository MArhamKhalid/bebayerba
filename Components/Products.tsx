import React from 'react'

const Products = () => {
  return (
    <section className='w-full h-dvh bg-white py-24 px-24 sticky overflow-hidden'>
      <div className='w-50 absolute left-0 bottom-23'>
        <img src="/image/leves-left-bottom-orange.png" alt="" />
      </div>
      <div className='w-50 absolute left-[49%] bottom-36'>
        <img src="/image/leves-left-bottom-orange.png" alt="" />
      </div>
      <div className='w-60 absolute right-1 bottom-10'>
        <img src="/image/bottom-right-orange.png" alt="" />
      </div>
      <div className='w-40 absolute right-1 top-[22%] -rotate-30'>
        <img src="/image/leaves-1-orange.png" alt="" />
      </div>
      <div className='w-60 h-20 absolute -top-25 left-[29%]'>
        <img src="/image/leaves-8-orange.png" alt="" />
      </div>
      <div className='w-full h-full relative flex'>
          <div className='w-70 flex gap-0 h-full absolute bg-clip-text'>
            <h2 className='uppercase font-Argot text-[150px] leading-120 -rotate-90 font-bold text-white [-webkit-text-stroke:2px_orange] opacity-30'>orange</h2>
            <img src="/image/orange-can.png" alt="can" className='-ml-95 z-2'/>

          </div>
          <div className='w-full h-full flex justify-end'>
            <div className='w-[50%] h-full  flex items-center pl-20 '>
              <div className='w-full h-[50%] flex flex-col gap-y-2  pr-20 pl-80 border-t border-[#06622c42]  font-Aeonik'>
                <div className=' w-[200px] -mb-14 -ml-2'>
                  <img src="/image/magtein.png" alt="magtein logo" className='logo-color  object-cover '/>
                </div>
                <h2 className='font-bold text-[30px]'>Magnesium L-Threonate</h2>
                <p className=' text-[18px] font-semibold'>MAGTEIN® is a patented form of magnesium called Magnesium L-Threonate. What makes it different from standard magnesium (Iike citrate or oxide) is that its the only clinically Shown to effectively cross the blood-brain, barrier, which means it can actually raise magnesium levels in the brain.</p>
                <a href="#" className='pb-2 underline text-[18px] uppercase leading-15 text-[#00692D] font-semibold'>Click for the science</a>
              </div>
            </div>
            <div className='w-[40%] flex flex-col justify-center items-center border-l border-[#06622c42]'>
              <div className='w-full h-[50%]  flex flex-col justify-end gap-y-2 pl-30 pr-50  font-Aeonik'>
                <div className=' w-[200px] -mb-20 -ml-3'>
                  <img src="/image/k2vital.png" alt="magtein logo" className='logo-color  object-cover '/>
                </div>
                <h2 className='font-bold text-[30px]'>Vitamin K2 as MK-7</h2>
                <p className='text-[18px] font-semibold'>A premium form of Vitamin K2 that acts as a traffic director for Calcium—guiding it Into your bones and teeth where belongs, and away from your arteries. The result is stronger bones and a healthier heart. It Pairs perfectly with Vitamin D3: D3 absorbs calcium, K2 directs It where It belongs.</p>
                <a href="#" className='pb-2 underline text-[18px] uppercase leading-15 text-[#00692D] font-semibold'>Click for the science</a>

              </div>
              <div className='w-full h-[50%]  flex flex-col justify-end  gap-y-2 pl-50 pr-30 border-t border-[#06622c42] font-Aeonik '>
                <div className=' w-[200px] -mb-20 -ml-5'>
                  <img src="/image/VegD3.png" alt="magtein logo" className='logo-color '/>
                </div>
                <h2 className='font-bold text-[30px]'>Plant-Based Vitamin D3</h2>
                <p className='text-[18px] font-semibold'>A vegan-friendly form of Vitamin D3 sourced from lichen, not animals. It helps your body absorb calcium and supports immune health, mood. and overall wellness. lt pairs perfectly with Vitamin K2: D3 absorbs the calcium, amd K2 sends it straight to your bones.</p>
                <a href="#" className='pb-2 underline text-[18px] uppercase leading-15 text-[#00692D] font-semibold'>Click for the science</a>

              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Products
