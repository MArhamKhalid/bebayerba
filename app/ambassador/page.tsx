import React from 'react'
import InnerBanner from '../Components/InnerBanner'

export default function AmbassadorPage() {
  return (
    <main className='bg-white text-[#0A3B21]'>
      <InnerBanner 
        breadcrumbs={[{ label: 'Home', link: '/' }, { label: 'Ambassador' }]}
        badge="Join The Movement"
        title="Become A MATE+"
        highlightText="Ambassador"
        description="Share clean energy with your community. Earn commission, free monthly supply, and exclusive event access."
      />

      <section className='max-w-[1350px] mx-auto py-16 px-4 sm:px-8 md:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          
          {/* Benefits Grid */}
          <div className='space-y-8'>
            <h2 className='font-Argot font-bold text-3xl sm:text-4xl uppercase'>Ambassador Perks</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {[
                { title: 'Free Monthly Supply', desc: 'Get your favorite flavors delivered to your door every month.' },
                { title: '15% Commission', desc: 'Earn competitive payouts on every sale made using your code.' },
                { title: 'VIP Merch & Access', desc: 'Receive exclusive gear and invitations to private brand events.' },
                { title: 'Early Product Access', desc: 'Test new formulas and flavors before anyone else.' }
              ].map((perk, i) => (
                <div key={i} className='p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm'>
                  <h3 className='font-Argot font-bold text-xl mb-2 text-[#0A3B21] uppercase'>{perk.title}</h3>
                  <p className='font-Aeonik text-sm text-gray-600 leading-relaxed'>{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className='bg-[#0A3B21] text-white p-8 sm:p-10 rounded-3xl shadow-xl'>
            <h3 className='font-Argot font-bold text-2xl uppercase mb-6 text-[#FFD815]'>Apply Now</h3>
            <form className='space-y-4 font-Aeonik'>
              <div>
                <label className='block text-xs uppercase font-bold tracking-wider mb-2 text-gray-300'>Full Name</label>
                <input type="text" placeholder="John Doe" className='w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD815]' />
              </div>
              <div>
                <label className='block text-xs uppercase font-bold tracking-wider mb-2 text-gray-300'>Email Address</label>
                <input type="email" placeholder="john@example.com" className='w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD815]' />
              </div>
              <div>
                <label className='block text-xs uppercase font-bold tracking-wider mb-2 text-gray-300'>Social Handles (Instagram / TikTok)</label>
                <input type="text" placeholder="@yourhandle" className='w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD815]' />
              </div>
              <div>
                <label className='block text-xs uppercase font-bold tracking-wider mb-2 text-gray-300'>Why do you want to join MATE+?</label>
                <textarea rows={4} placeholder="Tell us about yourself..." className='w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD815]' />
              </div>
              <button type="submit" className='w-full bg-[#E86000] hover:bg-[#c45100] text-white font-bold py-4 rounded-xl uppercase tracking-wider transition-all shadow-md mt-2'>
                Submit Application
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  )
}