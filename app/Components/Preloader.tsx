'use client'
import React, { useEffect, useState } from 'react'

interface PreloaderProps {
  onComplete?: () => void
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isWindowLoaded, setIsWindowLoaded] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // 1. Page Scroll Lock during loading
    document.body.style.overflow = 'hidden'

    // 2. Real Web Page Loading Event Check
    const handleLoad = () => {
      setIsWindowLoaded(true)
    }

    if (document.readyState === 'complete') {
      setIsWindowLoaded(true)
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
      document.body.style.overflow = 'unset'
    }
  }, [])

  useEffect(() => {
    // 3. Smart Progress Counter Logic
    // jab tak page load nahi hota, counter 90% tak jaakar hold rahega
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (!isWindowLoaded) {
          // Window load nahi hui to 90% par wait karega
          if (prev < 90) {
            return prev + Math.random() * 5
          }
          return 90
        } else {
          // Window load hote hi tezi se 100% tak pohnchega
          if (prev < 100) {
            return prev + 10
          }
          clearInterval(interval)
          return 100
        }
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isWindowLoaded])

  // 4. Smooth Exit Animation jab progress 100% ho jaye
  useEffect(() => {
    if (progress >= 100 && isWindowLoaded) {
      const timeout = setTimeout(() => {
        setIsLoaded(true) // Top curtain slide upward
        document.body.style.overflow = 'unset'

        setTimeout(() => {
          setShouldRender(false)
          if (onComplete) onComplete()
        }, 800)
      }, 400)

      return () => clearTimeout(timeout)
    }
  }, [progress, isWindowLoaded, onComplete])

  if (!shouldRender) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0A3B21] text-white flex flex-col justify-between p-8 sm:p-12 transition-transform duration-800 ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform ${
        isLoaded ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Top Header / Brand Logo */}
      <div className='flex justify-between items-center border-b border-[#00692D] pb-4'>
        <div className='flex items-center gap-2'>
          <span className='w-2.5 h-2.5 rounded-full bg-[#FFD815] animate-pulse' />
          <span className='font-Argot text-xs tracking-widest uppercase text-gray-300 font-bold'>
            BEBA YERBA ®
          </span>
        </div>
        <span className='font-Aeonik text-xs text-[#FFD815] font-bold tracking-wider uppercase'>
          Natural Energy
        </span>
      </div>

      {/* Center Brand Name */}
      <div className='my-auto text-center space-y-4'>
        <h1 className='font-Argot text-5xl sm:text-7xl md:text-9xl font-extrabold uppercase tracking-tight text-white drop-shadow-lg select-none'>
          BEBA YERBA
        </h1>
        <p className='font-Aeonik text-sm sm:text-base text-gray-300 tracking-widest uppercase opacity-80'>
          MATE+ Citrus & Berry Energy
        </p>
      </div>

      {/* Bottom Counter & Progress Bar */}
      <div className='space-y-4 max-w-xl mx-auto w-full'>
        <div className='flex justify-between items-end font-Aeonik'>
          <span className='text-xs uppercase text-gray-400 tracking-wider font-bold'>
            {!isWindowLoaded ? 'Loading Assets...' : 'Preparing Experience...'}
          </span>
          <span className='font-Argot text-4xl sm:text-6xl font-black text-[#FFD815] tracking-tight'>
            {Math.floor(progress)}%
          </span>
        </div>

        <div className='w-full h-1.5 bg-[#00692D] rounded-full overflow-hidden p-0.5'>
          <div
            className='h-full bg-[#FFD815] rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_#FFD815]'
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default Preloader