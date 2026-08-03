import React from 'react'
const item = [
    {
        imagePath: "/image/image-1.png"
    },
    {
        imagePath: "/image/image-2.png"
    },
    {
        imagePath: "/image/image-3.png"
    },
    {
        imagePath: "/image/image-4.png"
    },
    {
        imagePath: "image/image-5.png"
    },
    {
        imagePath: "image/image-6.png"
    },
    {
        imagePath: "/image/image-1.png"
    },
    {
        imagePath: "/image/image-2.png"
    },
]

const Location = () => {
  return (
    <section className='w-full bg-white px-20 pt-62.5 pb-10 relative'>
        <div className='w-[35%] absolute bottom-0 left-[24%]'>
            <img src="/image/asas.png" className=' w-full ' alt="" />
        </div>

        <div className=' w-full h-full flex items-start gap-y-16 '>
            <div className=' w-[30%] h-full flex flex-col items-start justify-center gap-y-60'>
                <div className='h-40 text-[66px] leading-16 text-[#1D4818] flex flex-col items-start uppercase'>
                    <h1 className=' font-bold font-Argot'>find your way</h1>
                    <span className='text-[88px] py-6 px-2 bg-[#FFD815] rounded-3xl inline-block -rotate-3 text-[#0A3B21] font-bold font-Argot'>destination</span>
                    <h1 className=' font-bold font-Argot'>awaits</h1>
                </div>
            
                <div className='flex gap-x-2 items-center text-[#0A3B21] capitalize'>
                    <a href="#" className=' text-[16px] underline font-Aeonik'>find a store</a>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#0A3B21" viewBox="0 0 24 24" >
                    <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
                    </svg>
                </div>
            </div>

            <div className='w-[70%] '>
                <img src="/image/map.png" alt="map" className='h-full w-full' />
            </div>
        </div>
        <div className='w-full relative z-10 flex gap-x-5  marquee-container'>

            {item.map((item) => (
            <div className='w-full h-20 bg-white flex justify-center items-center shadow-[2px_2px_17.8px_2px_#0000001A] rounded-[10px] py-3 px-3'>
            
                <img src={item.imagePath} alt="background" className='object-contain w-full h-full' key={item.imagePath} />
            </div>
            ))}
        </div>
        
    </section>
  )
}

export default Location
