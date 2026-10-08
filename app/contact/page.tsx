import React from 'react'

const Contact = () => {
  return (
    <section className='w-full min-h-screen bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16'>
      <div className='max-w-[1000px] mx-auto flex flex-col gap-10'>
        
        <div className='text-center flex flex-col items-center gap-3'>
          <h1 className='font-Argot font-bold text-4xl sm:text-6xl text-[#0A3B21] uppercase'>
            Get In Touch
          </h1>
          <p className='font-Aeonik text-gray-700 text-sm sm:text-base'>
            Questions about ingredients, wholesale orders, or shipping? Drop us a line.
          </p>
        </div>

        {/* Form */}
        <form className='bg-gray-50 border border-[#06622c33] rounded-3xl p-6 sm:p-10 flex flex-col gap-6 font-Aeonik shadow-sm'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='text-xs font-bold uppercase tracking-wider text-[#0A3B21]'>Name</label>
              <input type="text" placeholder="Your Name" className='p-3.5 rounded-xl border border-gray-300 focus:outline-[#00692D]' required />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-xs font-bold uppercase tracking-wider text-[#0A3B21]'>Email</label>
              <input type="email" placeholder="you@domain.com" className='p-3.5 rounded-xl border border-gray-300 focus:outline-[#00692D]' required />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-xs font-bold uppercase tracking-wider text-[#0A3B21]'>Subject</label>
            <input type="text" placeholder="How can we help?" className='p-3.5 rounded-xl border border-gray-300 focus:outline-[#00692D]' required />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-xs font-bold uppercase tracking-wider text-[#0A3B21]'>Message</label>
            <textarea rows={5} placeholder="Write your message here..." className='p-3.5 rounded-xl border border-gray-300 focus:outline-[#00692D]' required></textarea>
          </div>

          <button type="submit" className='bg-[#FFD815] text-[#0A3B21] font-bold text-base py-3.5 rounded-xl uppercase tracking-wider hover:bg-[#e6c200] transition-colors shadow-md'>
            Send Message
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact