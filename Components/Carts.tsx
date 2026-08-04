import React from 'react'

const Carts = () => {
  return (
    <section className='relative w-full z-10 flex justify-center items-center bg-[#013D1C] pb-20 '>
        <div className='flex flex-col w-full items-center gap-y-10'>
            <div className='w-full uppercase font-Argot flex justify-center'>
                <h2 className='text-[66px]  text-white'><span className='text-[#FFD815]'>enchanced plant </span>based energy drink</h2>
            </div>
            <div className='flex gap-x-12.5 w-full justify-center '>
                <div className='w-120 flex flex-col border border-solid border-white/55 rounded-3xl'>
                    <img src="/image/mint-can-product.png" alt="mint flavor" className='rounded-3xl'/>
                    <div className='px-6.5 py-4.5 uppercase w-full text-center text-white'>
                        <h4 className='font-Aeonik text-3xl'>beba yerba - mint flover</h4>
                        <p className='font-Aeonik text-3xl'>(12 can) <span className='font-Argot'>$36.00 usd</span></p>
                        <div className='flex gap-x-4 justify-center items-center pb-3 text-3xl'>
                            <p>4.2</p>
                            <img src="/image/star.svg" alt="star" />
                            <img src="/image/star.svg" alt="star" />
                            <img src="/image/star.svg" alt="star" />
                            <img src="/image/star.svg" alt="star" />
                        </div>
                        <button className='uppercase font-Argot w-full bg-[#FFD815] text-black py-3 rounded-xl cursor-pointer'>buy now</button>
                    </div>
                </div>
                <div className='w-120 flex flex-col border border-solid border-white/55 rounded-3xl'>
                    <img src="/image/traditional-can-product.png" alt="traditional flavor" className='rounded-3xl'/>
                    <div className='px-6.5 py-4.5 uppercase w-full text-center gap-0 text-white'>
                        <h4 className='font-Aeonik text-3xl'>beba yerba - mint flover</h4>
                        <p className='font-Aeonik text-3xl'>(12 can) <span className='font-Argot'>$36.00 usd</span></p>
                        <div className='flex gap-x-4 justify-center items-center pb-3 text-3xl'>
                            <p>4.2</p>
                            <img src="/image/star.svg" alt="star" />
                            <img src="/image/star.svg" alt="star" />
                            <img src="/image/star.svg" alt="star" />
                            <img src="/image/star.svg" alt="star" />
                        </div>
                        <button className='uppercase font-Argot w-full bg-[#FFD815] text-black py-3 rounded-xl cursor-pointer'>buy now</button>
                    </div>
                </div>
                <div className='w-120 flex flex-col border border-solid border-white/55 rounded-3xl'>
                    <img src="/image/orange-can-product.png" alt="orange flavor" className='rounded-3xl'/>
                    <div className='px-6.5 py-4.5 uppercase w-full text-center text-white'>
                        <h4 className='font-Aeonik text-3xl'>beba yerba - mint flover</h4>
                        <p className='font-Aeonik text-3xl'>(12 can) <span className='font-Argot'>$36.00 usd</span></p>
                        <div className='flex gap-x-4 justify-center items-center pb-3 text-3xl'>
                            <p>4.2</p>
                            <img src="/image/star.svg" alt="star" />
                            <img src="/image/star.svg" alt="star" />
                            <img src="/image/star.svg" alt="star" />
                            <img src="/image/star.svg" alt="star" />
                        </div>
                        <button className='uppercase font-Argot w-full bg-[#FFD815] text-black py-3 rounded-xl cursor-pointer'>buy now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Carts
