import React from 'react'
import InnerBanner from '../Components/InnerBanner'

export default function WholesalePage() {
  return (
    <main className='bg-white text-[#0A3B21]'>
      <InnerBanner 
        breadcrumbs={[{ label: 'Home', link: '/' }, { label: 'Wholesale' }]}
        badge="Retail & Distribution"
        title="Partner & Sell"
        highlightText="MATE+ Wholesale"
        description="Stock premium, natural Yerba Mate energy in your retail stores, gyms, or cafes with high margins and fast shipping."
      />

      <section className='max-w-[1350px] mx-auto py-16 px-4 sm:px-8 md:px-12'>
        <div className='max-w-3xl mx-auto bg-gray-50 border border-gray-200 p-8 sm:p-12 rounded-3xl shadow-sm'>
          <h2 className='font-Argot font-bold text-3xl uppercase text-center mb-2'>Wholesale Inquiry</h2>
          <p className='font-Aeonik text-center text-gray-600 mb-8 text-sm sm:text-base'>Fill out the form below and our distribution team will contact you within 24 hours.</p>

          <form className='space-y-5 font-Aeonik'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-700'>Business Name</label>
                <input type="text" placeholder="Store or Company Name" className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0A3B21]' />
              </div>
              <div>
                <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-700'>Business Type</label>
                <select className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0A3B21] bg-white'>
                  <option>Grocery / Supermarket</option>
                  <option>Gym / Fitness Center</option>
                  <option>Cafe / Restaurant</option>
                  <option>Online Retailer</option>
                </select>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-700'>Contact Person</label>
                <input type="text" placeholder="Full Name" className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0A3B21]' />
              </div>
              <div>
                <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-700'>Email Address</label>
                <input type="email" placeholder="wholesale@company.com" className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0A3B21]' />
              </div>
            </div>

            <div>
              <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-700'>Estimated Cases Per Month</label>
              <select className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0A3B21] bg-white'>
                <option>10 - 50 Cases</option>
                <option>50 - 200 Cases</option>
                <option>200+ Cases (Pallet Pricing)</option>
              </select>
            </div>

            <div>
              <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-700'>Additional Notes</label>
              <textarea rows={3} placeholder="Tell us about your locations or requirements..." className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0A3B21]' />
            </div>

            <button type="submit" className='w-full bg-[#0A3B21] hover:bg-[#00692D] text-white font-bold py-4 rounded-xl uppercase tracking-wider transition-all shadow-md'>
              Request Wholesale Catalog
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}