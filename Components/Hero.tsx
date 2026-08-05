import React from 'react'

const Hero = () => {
  return (
    <section className='hero w-full h-dvh'>
        <div className='w-full h-full relative'>
            <div className='w-full h-full relative overflow-hidden '>
                <img src="/image/slider.png" alt="" className='w-full  absolute top-24 left-0 overflow-hidden object-contain inset-0'/>
                <img src="/image/crystals-1.png" alt="background" className='w-316  h-91 absolute -bottom-55 left-[20%] overflow-hidden object-cover z-10' />
                
                <img src="/image/mint-can.png" alt="Can" className='absolute  -bottom-4 left-[28.5%]  scale-97 z-1' />
                <img src="/image/orange-can.png" alt="Can" className='absolute  -bottom-4 right-[28.5%] scale-97 z-1' />
                <img src="/image/crystals-2.png" alt="background" className='w-full absolute bottom-0 left-0 overflow-hidden object-cover ' />
                <img src="/image/traditional-can.png" alt="Can" className='absolute -bottom-14 right-[41.8%] scale-95' />
                <img src="/image/leaves.png" alt="" className='absolute left-[15%] top-[50%] z-0'/>
                <img src="/image/orange.png" alt="" className='absolute right-[15%] top-[50%] z-0'/>


            </div>
        </div>
    </section>
  )
}

export default Hero
