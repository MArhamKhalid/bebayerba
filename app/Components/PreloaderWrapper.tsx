'use client'
import React, { useState } from 'react'
import Preloader from './Preloader'

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div 
        className={`flex flex-col min-h-screen transition-opacity duration-700 ${
          isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
        }`}
      >
        {children}
      </div>
    </>
  )
}