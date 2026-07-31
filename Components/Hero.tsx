import React from 'react'

const Hero = () => {
  return (
    <section className='hero w-full h-dvh'>
        <div className='w-full h-full relative'>
            <div className='w-full h-full relative overflow-hidden object-cover'>
                <img src="/image/slider.png" alt="" className='w-full  absolute top-0 left-0 overflow-hidden object-cover inset-0'/>
                <img src="/image/crystals-1.png" alt="background" className='w-full  absolute bottom-0 left-0 overflow-hidden object-cover' />
                <img src="/image/crystals-2.png" alt="background" className='w-full  absolute bottom-20 left-0 overflow-hidden object-cover z-10' />
                
                {/* <div className='relative z-10'> */}
                    <img src="/image/mint-can.png" alt="Can" className='absolute  bottom-70 left-[33%] h-[60%] w-[10%]' />
                {/* </div>
                <div className='relative w-full'> */}
                    <img src="/image/traditional-can.png" alt="Can" className='absolute bottom-40 right-[44%]  h-[78%] w-[12%]' />
                {/* </div>
                <div className='relative w-full'> */}
                    <img src="/image/orange-can.png" alt="Can" className='absolute  bottom-68 right-[33%] h-[60%] w-[10%]' />
                {/* </div> */}
            </div>
        </div>
    </section>
  )
}

export default Hero
