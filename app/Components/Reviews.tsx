import React from 'react'

const items = [
    {
        name: "Julia",
        text: "I'M COMPLETELY OBSESSED WITH BEBA YERBA MINT THE FLAVORS ARE INSANELY GOOD! I HONESTLY CAN'T STOP DRINKING THEM!",
        bg: "bg-green-900", 
        textcolor: "text-[#FFD815]",
        video: "/image/video-01.mp4",
    },
    {
        name: "Julia",
        text: "I'M COMPLETELY OBSESSED WITH BEBA YERBA MINT THE FLAVORS ARE INSANELY GOOD! I HONESTLY CAN'T STOP DRINKING THEM!",
        textcolor: "text-[#013D1C]",
        bg: "bg-[#FFD815]", 
        video: "/image/video-02.mp4",
    },
    {
        name: "cristina",
        text: "I'M COMPLETELY OBSESSED WITH BEBA YERBA MINT THE FLAVORS ARE INSANELY GOOD! I HONESTLY CAN'T STOP DRINKING THEM!",
        bg: "bg-[#F78234]", 
        textcolor: "text-[#013D1C]",
        video: "/image/video-03.mp4",
    },
];

// Continuous seamless loop ke liye array duplicate kiya gaya hai
const duplicatedItems = [...items, ...items, ...items, ...items];

const Reviews = () => {
  return (
    <section className='w-full min-h-screen py-12 md:py-20 flex flex-col justify-center overflow-hidden bg-white'>
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-20'>
            
            {/* Heading */}
            <div className='w-full text-3xl sm:text-5xl lg:text-[66px] items-center text-[#013D1C] font-Argot flex flex-wrap gap-2 sm:gap-3 uppercase leading-tight justify-center md:justify-start mb-8'>
                <span>why customer</span>
                <span className='py-1.5 px-3 sm:py-3 sm:px-4 bg-[#FFD815] rounded-2xl sm:rounded-3xl -rotate-2 text-[#013D1C] inline-block'>
                    yerba mate
                </span>
            </div>
            
            {/* Auto Slider / Marquee Container */}
            <div className='w-full overflow-hidden py-6'>
                <div className='animate-marquee flex gap-x-5'>
                    {duplicatedItems.map((item, i) => (
                        <div className='flex gap-x-5 shrink-0' key={i}>  
                            
                            {/* Review Card */}
                            <div className={`w-[280px] sm:w-[320px] md:w-[350px] h-[380px] sm:h-[420px] md:h-[450px] p-6 md:p-8 rounded-3xl flex flex-col justify-between ${item.bg}`}>
                                <div className={`w-full h-full flex flex-col justify-between ${item.textcolor}`}>
                                    <p className='text-center font-Argot text-lg sm:text-xl md:text-[24px] uppercase leading-snug my-auto'>
                                        "{item.text}"
                                    </p>

                                    <div className='flex flex-col justify-center items-center gap-y-1 pt-4'>
                                        <p className={`text-base sm:text-[18px] font-bold capitalize ${item.textcolor}`}>
                                            {item.name}
                                        </p>
                                        <div className='flex gap-1 justify-center items-center'>
                                            {[...Array(4)].map((_, starIndex) => (
                                                <img key={starIndex} src="/image/star.svg" alt="star" className='w-4 h-4 sm:w-5 sm:h-5' />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Video Card */}
                            <div className="w-[280px] sm:w-[320px] md:w-[350px] h-[380px] sm:h-[420px] md:h-[450px] rounded-3xl overflow-hidden bg-black shrink-0"> 
                                <video className="w-full h-full object-cover rounded-3xl" autoPlay muted loop playsInline> 
                                    <source src={item.video} type="video/mp4" /> 
                                </video> 
                            </div>

                        </div> 
                    ))}
                </div>
            </div>

        </div>
    </section>
  )
}

export default Reviews