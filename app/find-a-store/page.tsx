import React from 'react'
import InnerBanner from '../Components/InnerBanner'

export default function FindAStorePage() {
  const stores = [
    { name: 'Organic Supermarket - Downtown', address: '123 Health Ave, Suite 100', distance: '1.2 miles away', phone: '(555) 019-2834' },
    { name: 'FitLife Gym & Bar', address: '456 Fitness Blvd', distance: '3.5 miles away', phone: '(555) 012-9876' },
    { name: 'Green Grocery Market', address: '789 Eco Way', distance: '5.0 miles away', phone: '(555) 014-5544' }
  ]

  return (
    <main className='bg-white text-[#0A3B21]'>
      <InnerBanner 
        breadcrumbs={[{ label: 'Home', link: '/' }, { label: 'Find A Store' }]}
        badge="Store Locator"
        title="Find MATE+"
        highlightText="Near You"
        description="Locate nearby retailers, specialty health food stores, and cafes stocking cold MATE+ cans."
      />

      <section className='max-w-[1350px] mx-auto py-12 px-4 sm:px-8 md:px-12 space-y-8'>
        {/* Search Bar */}
        <div className='flex flex-col sm:flex-row gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-200'>
          <input 
            type="text" 
            placeholder="Enter Zip Code or City..." 
            className='flex-1 px-5 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0A3B21] font-Aeonik'
          />
          <button className='bg-[#E86000] hover:bg-[#c45100] text-white font-Aeonik font-bold px-8 py-3.5 rounded-xl uppercase tracking-wider transition-all'>
            Search Stores
          </button>
        </div>

        {/* Store Cards List */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {stores.map((store, index) => (
            <div key={index} className='p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all flex flex-col justify-between space-y-4'>
              <div>
                <span className='bg-[#FFD815]/30 text-[#0A3B21] text-xs font-bold px-3 py-1 rounded-full font-Aeonik'>
                  {store.distance}
                </span>
                <h3 className='font-Argot font-bold text-xl uppercase mt-3 text-[#0A3B21]'>{store.name}</h3>
                <p className='font-Aeonik text-sm text-gray-600 mt-1'>{store.address}</p>
                <p className='font-Aeonik text-xs text-gray-500 mt-1'>{store.phone}</p>
              </div>

              <button className='w-full border border-[#0A3B21] text-[#0A3B21] hover:bg-[#0A3B21] hover:text-white font-Aeonik font-semibold py-2.5 rounded-xl text-sm transition-colors uppercase'>
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}