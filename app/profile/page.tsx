import React from 'react'
import InnerBanner from '../Components/InnerBanner'

export default function ProfilePage() {
  return (
    <main className='bg-white text-[#0A3B21]'>
      <InnerBanner 
        breadcrumbs={[{ label: 'Home', link: '/' }, { label: 'Profile' }]}
        badge="Account Portal"
        title="Welcome Back,"
        highlightText="Arham"
        description="Manage your recent orders, recurring subscriptions, and saved shipping addresses."
      />

      <section className='max-w-[1350px] mx-auto py-12 px-4 sm:px-8 md:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          
          {/* Navigation Sidebar */}
          <div className='space-y-2 bg-gray-50 p-4 rounded-2xl border border-gray-200 font-Aeonik font-semibold text-sm'>
            <button className='w-full text-left px-4 py-3 bg-[#0A3B21] text-white rounded-xl'>Orders History</button>
            <button className='w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl'>Subscriptions</button>
            <button className='w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl'>Addresses</button>
            <button className='w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl mt-4'>Logout</button>
          </div>

          {/* Main Profile Info */}
          <div className='lg:col-span-3 space-y-6'>
            <div className='bg-white p-6 rounded-2xl border border-gray-200 shadow-sm'>
              <h3 className='font-Argot font-bold text-xl uppercase mb-4 text-[#0A3B21]'>Recent Orders</h3>
              <div className='border-t border-gray-100 pt-4 flex justify-between items-center font-Aeonik text-sm'>
                <div>
                  <p className='font-bold text-[#0A3B21]'>Order #MP-8291</p>
                  <p className='text-xs text-gray-500'>24-Pack Citrus • Shipped on Oct 02, 2026</p>
                </div>
                <span className='bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full'>Delivered</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}