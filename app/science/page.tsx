import React from 'react'
import InnerBanner from '../Components/InnerBanner'

const Science = () => {
  const studies = [
    {
      logo: "/image/magtein.png",
      title: "Magnesium L-Threonate (Magtein®)",
      subtitle: "Brain Barrier Permeability & Cognitive Enhancement",
      description: "Unlike ordinary magnesium compounds, Magnesium L-Threonate crosses the blood-brain barrier effectively to increase neuronal synaptic density, boosting memory, cognitive clarity, and deep sleep quality.",
      badge: "Clinical Study"
    },
    {
      logo: "/image/k2vital.png",
      title: "Vitamin K2 as MK-7 (K2VITAL®)",
      subtitle: "Arterial Protection & Calcium Traffic Control",
      description: "K2VITAL® activates osteocalcin to bind calcium to bones while activating MGP to inhibit vascular calcification, ensuring mineral deposition occurs strictly where needed.",
      badge: "Patented Formula"
    },
    {
      logo: "/image/VegD3.png",
      title: "Plant-Based Vitamin D3 (VegD3®)",
      subtitle: "100% Bioavailable Vegan Cholecalciferol",
      description: "Extracted from organic lichen, VegD3® provides optimal calcium absorption without animal products or synthetic additives, supporting immune defense and cellular resilience.",
      badge: "Vegan Certified"
    }
  ]

  return (
    <>
    
    <InnerBanner breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Science' }
        ]}
        badge="Backed By Science"
        title="The Science Behind"
        highlightText="Our Formula"
        description="We don't believe in fairy-dusting ingredients. Every compound in MATE+ is clinically dosed and targeted for maximum cellular bioavailability."
      />
    <section className='w-full min-h-screen bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden'>
      <div className='max-w-[1350px] mx-auto relative z-10 flex flex-col gap-12 sm:gap-16'>
        
        {/* Header */}
        <div className='text-center flex flex-col items-center gap-4'>
          <span className='py-2 px-6 bg-[#FFD815] rounded-3xl font-Argot text-sm sm:text-base font-bold text-[#0A3B21] -rotate-2 shadow-sm uppercase'>
            Backed By Research
          </span>
          <h1 className='font-Argot font-bold text-3xl sm:text-5xl md:text-6xl text-[#0A3B21] uppercase tracking-tight'>
            The Science Behind Our Formula
          </h1>
          <p className='font-Aeonik text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl text-center leading-relaxed'>
            We don't believe in fairy-dusting ingredients. Every compound in our formula is clinically dosed and targeted for maximum bioavailability.
          </p>
        </div>

        {/* Science Cards Stack */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {studies.map((item, index) => (
            <div key={index} className='bg-gray-50 border border-[#06622c33] rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-shadow'>
              <div className='flex flex-col gap-4 font-Aeonik'>
                <div className='w-32 h-12 flex items-center'>
                  <img src={item.logo} alt={item.title} className='max-h-full max-w-full object-contain' />
                </div>
                <span className='text-xs font-bold uppercase tracking-wider text-[#00692D] bg-[#00692D15] py-1 px-3 rounded-full w-max'>
                  {item.badge}
                </span>
                <h2 className='font-bold text-xl sm:text-2xl text-[#1D4818] leading-snug'>
                  {item.title}
                </h2>
                <h3 className='font-semibold text-sm text-[#E86000]'>
                  {item.subtitle}
                </h3>
                <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
                  {item.description}
                </p>
              </div>
              <a href="#" className='underline font-Aeonik font-semibold text-sm text-[#00692D] uppercase tracking-wide hover:opacity-80'>
                Download Clinical Paper PDF →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  )
}

export default Science