import React from 'react'
const Simages = [
    {
        imagePath: "/image/images-01.jpeg"
    },
    {
        imagePath: "/image/images-02.jpeg"
    },
    {
        imagePath: "/image/images-03.jpeg"
    },
    {
        imagePath: "/image/images-04.png"
    },
]
const logo = [
    {
        logoPath: "/image/brand-01.png"
    },
    {
        logoPath: "/image/brand-02.png"
    },
    {
        logoPath: "/image/brand-03.png"
    },
    {
        logoPath: "/image/brand-04.png"
    },
    {
        logoPath: "/image/brand-01.png"
    },
    {
        logoPath: "/image/brand-02.png"
    },
    {
        logoPath: "/image/brand-03.png"
    },
    {
        logoPath: "/image/brand-04.png"
    },
]
const Social = () => {
  return (
    <section className='w-full   relative'>
        <div className='w-full h-90vh px-20 py-20 flex bg-[#FFD815]'>
            <div className='w-106 h-179 mt-20'>
                <img src="/image/phoneImg.png" alt="mobile" />
            </div>

            <div className='w-70% flex flex-col items-center gap-y-10'>
                <div className='w-full flex'>
                    <div className='w-full h-40 text-[66px] leading-16 text-[#1D4818] items-start uppercase'>
                        <h1 className=' font-bold font-Argot'>turnning snapshots<br/>into <span className='text-[88px] py-6 px-2 bg-[#1D4818] rounded-3xl inline-block -rotate-3 text-[#FFD815] font-bold font-Argot'>stories</span></h1>
                    </div>

                    <div className='w-82 flex flex-col gap-y-2 items-start justify-center text-[#0A3B21] uppercase font-Argot'>
                        <div className='flex items-center gap-x-3  text-[20px]'>
                            <img src="/image/tiktocicon.png" alt="Tiktok"  width='36px' />
                            <a href="#" className='underline'>add us on tiktok</a>
                        </div>
                        <div className='flex items-center gap-x-3  text-[20px]'>
                            <img src="/image/instaicon.png" alt="Tiktok" width='36px' />
                            <a href="#" className='underline'>add us on instagram</a>
                        </div>
                    </div>

                </div>
                <div className='w-full flex gap-3'>
                    {Simages.map((Simages) => (

                    <div className='w-81 h-108 relative group ' key={Simages.imagePath} >
                        <img src="/image/whiteinstaImg.png" alt="insta" className=' absolute left-[45%] top-[45%] w-10 hidden group-hover:flex' />

                        <img src={Simages.imagePath} alt="" className='object-cover w-full h-full rounded-3xl bg-amber-50 z-10 '/>
                    </div> 
                    )
                )}
                </div>
            </div>
        </div>
        <div className='w-full h-200 flex justify-center relative '>
            <img src="/image/separator-white.png" alt="" className='object-contain absolute w-full left-0 bottom-0 bg-[#FFD815]'/>
            <div className='w-full flex flex-col gap-y-50 absolute left-0 top-0 mt-40'>
                <div className='w-full h-40 flex justify-center items-end uppercase '>
                    <h1 className=' font-bold font-Argot text-[66px]'>as <span className='text-[66px] py-3 px-2 bg-[#1D4818] rounded-3xl inline-block -rotate-3 text-[#FFD815] font-bold font-Argot'>seen</span> on</h1>
                    
                </div>
                <div className='w-full flex justify-center gap-x-15 marquee-container'>
                    {logo.map((item) => (
                    <div className='w-100 h-20 bg-white flex justify-center items-center shadow-[2px_2px_17.8px_2px_#0000001A] rounded-[10px] py-3 px-3 '>
                    
                        <img src={item.logoPath} alt="background" className='object-contain w-full h-full' key={item.logoPath} />
                    </div>
                    ))}

                </div>
            </div>
        </div>
    </section>
  )
}

export default Social
