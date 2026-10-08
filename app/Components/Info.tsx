"use client";

import React, { useState } from 'react'

const Info = () => {
  // Track which card is active/expanded (default is index 1, i.e., Portugal/Middle card)
  const [activeIndex, setActiveIndex] = useState(1);

  const cards = [
    { 
        title: "Brazil", 
        description: "Brazil is one of the world's largest producers and consumers of yerba mate. Native to its southern subtropical forest, the plant was first cultivated by the indigenous Guarani people. Today it remains central to Brazilian culture — traditionally enjoyed as chimarrão, a hot brew shared from a gourd and straw." ,
        img: "/image/Brazil.png" 
    },
    { 
        title: "Portugal", 
        description: "Yerba mate is popular across various communities, woven into daily life. Grown in rich regions, it fuels a shared ritual from a gourd and metal straw. It's a constant companion for athletes and active lifestyles, providing clean, sustained energy throughout the day." , 
        img: "/image/portugal.png" 
    },
    { 
        title: "Paraguay", 
        description: "Paraguay is the birthplace of yerba mate, where the Indigenous Guarani first discovered the plant and named it. Here it's most often enjoyed as terere - an ice-cold brew steeped with herbs and sipped through a gourd in the country's tropical heat. More than a drink, it's a national pastime." , 
        img: "/image/Paraguay.png" 
    },
  ];

  return (
    <section className='w-full min-h-screen bg-white overflow-hidden py-10 lg:py-16'>
      <div className='w-full max-w-[1700px] mx-auto flex flex-col gap-y-12 lg:gap-y-16 px-4 md:px-8'>
        
        {/* Heading Section */}
        <div className='text-4xl md:text-[56px] lg:text-[66px] text-center uppercase font-Argot flex justify-center text-[#1D4818]'>
          <h2>
            what is{' '}
            <span className='text-5xl md:text-[76px] lg:text-[88px] px-3 py-1 lg:py-3 bg-[#1D4818] rounded-3xl inline-block -rotate-3 text-[#FFD815] my-2'>
              yerba mate
            </span>
          </h2>
        </div>

        {/* Description */}
        <div className='text-black text-center font-Aeonik text-base md:text-lg lg:text-[22px] font-bold capitalize max-w-4xl mx-auto px-2'>
          <p>
            Yerba Mate comes from the leaves of the Ilex paraguariensis plant, naturally cultivated across the lush regions of South America. It has been consumed for hundreds of years not just for its clean, sustained energy, but for its remarkable nutritional profile.
          </p>
        </div>

        {/* Accordion Cards Section */}
        <div className='yerba-mate-cards flex flex-col md:flex-row w-full h-[650px] md:h-[550px] lg:h-[650px] gap-4 font-sans box-border'>
          {cards.map((card, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out shadow-lg ${
                  isActive ? 'flex-[3] md:flex-[3]' : 'flex-[1] md:flex-[1]'
                }`}
              >
                {/* Background Image with smooth zoom effect on active */}
                <img
                  src={card.img}
                  alt={card.title}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ${
                    isActive ? 'scale-105 filter-none' : 'scale-100 brightness-75'
                  }`}
                />
                
                {/* Dark Gradient Overlay for better text readability */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 ${
                  isActive ? 'opacity-90' : 'opacity-7ounty'
                }`}></div>

                {/* Card Content (Title & Conditional Description) */}
                <div className='absolute flex flex-col justify-end left-6 right-6 bottom-8 text-white z-10'>
                  <h1 className='font-Argot text-3xl md:text-[40px] lg:text-[44px] tracking-wide drop-shadow-md mb-2'>
                    {card.title}
                  </h1>
                  
                  {/* Description only shows with smooth transition when card is active */}
                  <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    isActive ? 'max-h-[300px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'
                  }`}>
                    <p className='font-Aeonik text-sm md:text-base lg:text-lg tracking-wide text-gray-200 drop-shadow-md leading-relaxed'>
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}

Info.displayName = "Info";

export default Info;