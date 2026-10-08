import React from 'react'
import InnerBanner from '../Components/InnerBanner'

export default function BuyNowPage() {
  return (
    <main className='bg-white text-[#0A3B21]'>
      <InnerBanner 
        breadcrumbs={[{ label: 'Home', link: '/' }, { label: 'Buy Now' }]}
        badge="Instant Checkout"
        title="Order Fresh"
        highlightText="MATE+ Packs"
        description="Select your bundle and experience pure cellular focus. Free express shipping on all 24-packs."
      />

      <section className='max-w-[1350px] mx-auto py-16 px-4 sm:px-8 md:px-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {[
            { title: '12-Pack Sampler', price: '$36.00', desc: 'Mix of Citrus & Berry', badge: 'Popular' },
            { title: '24-Pack Stockup', price: '$64.00', desc: 'Save 12% + Free Delivery', badge: 'Best Value' },
            { title: 'Monthly Subscription', price: '$28.80 / mo', desc: 'Save 20% + Cancel Anytime', badge: 'Subscribe & Save' }
          ].map((pack, idx) => (
            <div key={idx} className='bg-gray-50 border-2 border-gray-200 hover:border-[#0A3B21] rounded-3xl p-8 flex flex-col justify-between transition-all hover:shadow-xl relative'>
              <span className='absolute -top-3.5 left-6 bg-[#FFD815] text-[#0A3B21] font-Argot text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider'>
                {pack.badge}
              </span>

              <div>
                <h3 className='font-Argot font-bold text-2xl uppercase mt-2'>{pack.title}</h3>
                <p className='font-Aeonik text-sm text-gray-600 mt-1'>{pack.desc}</p>
                <p className='font-Argot font-bold text-4xl text-[#E86000] my-6'>{pack.price}</p>
              </div>

              <button className='w-full bg-[#E86000] hover:bg-[#c45100] text-white font-Aeonik font-bold py-4 rounded-xl uppercase tracking-wider shadow-md transition-all'>
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}