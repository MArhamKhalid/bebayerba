import React from 'react'
import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  link?: string
}

interface InnerBannerProps {
  badge?: string
  title: string
  highlightText?: string
  description: string
  breadcrumbs?: BreadcrumbItem[]
}

const InnerBanner: React.FC<InnerBannerProps> = ({
  badge,
  title,
  highlightText,
  description,
  breadcrumbs = []
}) => {
  return (
    <section className='w-full min-h-[380px] sm:min-h-[460px] lg:min-h-[570px] bg-[#0A3B21] text-white relative overflow-hidden flex items-center pt-28 sm:pt-36 md:pt-40 lg:pt-48 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-[#06622c42]'>
      
      {/* Background Lighting & Glow Effects */}
      <div className='absolute -top-32 -left-32 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-[#00692D] rounded-full blur-[100px] opacity-50 pointer-events-none' />
      <div className='absolute -bottom-32 -right-32 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-[#E86000] rounded-full blur-[100px] opacity-30 pointer-events-none' />

      {/* Background Decorative Leaves */}
      <div className='absolute right-8 top-12 w-24 sm:w-36 lg:w-48 opacity-20 pointer-events-none -rotate-12 hidden sm:block'>
        <img src="/image/leaves-1-orange.png" alt="" className='w-full h-auto object-contain' />
      </div>
      <div className='absolute right-[22%] bottom-6 w-20 sm:w-28 opacity-15 pointer-events-none rotate-45 hidden lg:block'>
        <img src="/image/leves-left-bottom-orange.png" alt="" className='w-full h-auto object-contain' />
      </div>

      {/* Main Content Container */}
      <div className='max-w-[1350px] w-full mx-auto relative z-10 flex flex-col items-start gap-5 sm:gap-7'>
        
        {/* Directory / Breadcrumb Navigation Pill */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className='font-Aeonik text-xs sm:text-sm text-gray-200 flex items-center flex-wrap gap-2.5 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15 shadow-inner'>
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1
              return (
                <React.Fragment key={index}>
                  {item.link && !isLast ? (
                    <Link 
                      href={item.link} 
                      className='hover:text-[#FFD815] transition-colors flex items-center gap-1.5 font-medium'
                    >
                      {index === 0 && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      )}
                      {item.label}
                    </Link>
                  ) : (
                    <span className='text-[#FFD815] font-semibold'>{item.label}</span>
                  )}
                  {!isLast && <span className='text-gray-400'>/</span>}
                </React.Fragment>
              )
            })}
          </nav>
        )}

        {/* Badge Pill */}
        {badge && (
          <span className='py-2 px-6 bg-[#FFD815] text-[#0A3B21] rounded-full font-Argot text-xs sm:text-sm font-bold tracking-widest uppercase -rotate-2 shadow-md inline-block'>
            {badge}
          </span>
        )}

        {/* Title */}
        <h1 className='font-Argot font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] uppercase tracking-tight leading-[1.08] text-white max-w-4xl'>
          {title}{' '}
          {highlightText && (
            <span className='text-[#FFD815] block sm:inline-block'>
              {highlightText}
            </span>
          )}
        </h1>

        {/* Description Subtext */}
        <p className='font-Aeonik text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed font-normal pt-1'>
          {description}
        </p>

      </div>
    </section>
  )
}

export default InnerBanner