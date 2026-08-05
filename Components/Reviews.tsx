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


const Reviews = () => {
  return (
    <section className='w-full h-dvh '>
        <div className='w-full px-20 py-30'>
            <div className='w-full text-[66px] items-center text-[#013D1C] font-Argot flex gap-x-3 uppercase'>
                <div><h2>why customer</h2></div>
                <div className='py-3 px-2 bg-[#FFD815] rounded-3xl -rotate-2 text-[#013D1C]'>yerba mate</div>
            </div>
            
            <div className=' flex justify-center items-center py-20 gap-y-15 overflow-hidden'>
                
                <div className='w-full marquee-container flex gap-x-5' >

                    {items.map((item, i) => (
                
                    <div className='w-full flex gap-x-5' key={i}>  

                        <div className= {`w-87.5 h-112.5 p-8 rounded-3xl flex items-center justify-center ${item.bg}`}                                                                                                                                           >
                            <div className={` w-full h-full flex flex-col gap-y-8 ${item.textcolor}`}>
                                <p className='text-center font-Argot  text-[26px] flex  justify-center items-center uppercase'>{item.text}</p>

                                <div className='flex flex-col justify-center items-center ' >
                                    <p className={`text-[18px] ${item.textcolor}`}>{item.name}</p>
                                    <div className='flex w-5 gap-1 justify-center '>
                                        <img src="/image/star.svg" alt="star" />
                                        <img src="/image/star.svg" alt="star" />
                                        <img src="/image/star.svg" alt="star" />
                                        <img src="/image/star.svg" alt="star" />
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <div className="w-87.5 h-112.5 rounded-3xl "> 
                            <video className="w-full h-full object-cover rounded-3xl" autoPlay muted loop> 
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
