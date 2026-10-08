import React from 'react'
import InnerBanner from '../Components/InnerBanner'

const About = () => {
  return (
    <>
    <InnerBanner 
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'About Us' }
        ]}
        badge="Our Mission"
        title="More Than Just"
        highlightText="An Energy Drink"
        description="We created a clean solution for active minds and healthy bodies—combining South American Yerba Mate with cutting-edge micronutrient science."
      />
    
    <section className='w-full min-h-screen bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden'>
      <div className='max-w-[1200px] mx-auto flex flex-col gap-12 sm:gap-16'>
        
        {/* Hero Section */}
        <div className='text-center flex flex-col items-center gap-4'>
          <h1 className='font-Argot font-bold text-4xl sm:text-6xl md:text-7xl text-[#0A3B21] uppercase leading-tight'>
            More Than Just <br className='hidden sm:block'/>
            <span className='text-[#E86000]'>An Energy Drink</span>
          </h1>
          <p className='font-Aeonik text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed'>
            We crafted a solution for active minds and healthy bodies—combining South American Yerba Mate with cutting-edge micronutrient science.
          </p>
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center'>
          <div className='bg-[#FFD815] p-8 sm:p-12 rounded-3xl -rotate-1 shadow-lg flex flex-col gap-4 font-Aeonik'>
            <h2 className='font-Argot font-bold text-3xl text-[#0A3B21] uppercase'>
              The Yerba Mate Tradition
            </h2>
            <p className='text-gray-900 leading-relaxed font-medium text-sm sm:text-base'>
              Valued for centuries in South America, Yerba Mate provides a smooth, jitter-free energetic lift accompanied by high levels of antioxidants, polyphenols, and natural saponins.
            </p>
          </div>

          <div className='bg-gray-50 border border-[#06622c33] p-8 sm:p-12 rounded-3xl flex flex-col gap-4 font-Aeonik'>
            <h2 className='font-Argot font-bold text-3xl text-[#0A3B21] uppercase'>
              Clean Cellular Power
            </h2>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base'>
              No artificial preservatives, no synthetic caffeine, no crash. Just bioavailable Magnesium, Vitamin K2, and Plant-Based Vitamin D3 synced for optimal metabolic efficiency.
            </p>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default About