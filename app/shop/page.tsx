import React from 'react'
import InnerBanner from '../Components/InnerBanner'

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Yerba Mate - Citrus Orange",
      price: "$34.99",
      pack: "12 Can Pack",
      canImg: "/image/orange-can.png",
      tag: "Best Seller",
      bgAccent: "bg-orange-100"
    },
    {
      id: 2,
      name: "Yerba Mate - Berry Blast",
      price: "$34.99",
      pack: "12 Can Pack",
      canImg: "/image/orange-can.png", // Replace with berry can image if available
      tag: "New Flavor",
      bgAccent: "bg-pink-100"
    },
    {
      id: 3,
      name: "Yerba Mate - Tropical Lime",
      price: "$34.99",
      pack: "12 Can Pack",
      canImg: "/image/orange-can.png", // Replace with lime can image if available
      tag: "Limited Edition",
      bgAccent: "bg-green-100"
    }
  ]

  return (
    <>
    <InnerBanner 
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Shop' }
        ]}
        badge="100% Organic Formula"
        title="Choose Your"
        highlightText="Daily Energy"
        description="Explore our range of Yerba Mate infusions packed with Magtein®, K2VITAL®, and VegD3®."
      />
    <section className='w-full min-h-screen bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16'>
      <div className='max-w-[1350px] mx-auto flex flex-col gap-12'>
        
        {/* Title */}
        <div className='text-center flex flex-col items-center gap-3'>
          <h1 className='font-Argot font-bold text-4xl sm:text-6xl text-[#0A3B21] uppercase'>
            Choose Your Energy
          </h1>
          <p className='font-Aeonik text-sm sm:text-base md:text-lg text-gray-700 max-w-xl'>
            100% Organic Yerba Mate infused with Magtein®, K2VITAL®, and VegD3®.
          </p>
        </div>

        {/* Product Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {products.map((p) => (
            <div key={p.id} className='border border-[#06622c33] rounded-3xl p-6 flex flex-col items-center justify-between gap-6 hover:shadow-xl transition-all duration-300'>
              
              <div className={`w-full h-64 rounded-2xl ${p.bgAccent} relative flex items-center justify-center p-4`}>
                <span className='absolute top-3 left-3 bg-[#FFD815] text-[#0A3B21] font-Argot text-xs font-bold px-3 py-1 rounded-full uppercase'>
                  {p.tag}
                </span>
                <img src={p.canImg} alt={p.name} className='h-52 object-contain drop-shadow-xl' />
              </div>

              <div className='w-full text-center font-Aeonik flex flex-col gap-2'>
                <h2 className='font-bold text-xl text-[#0A3B21]'>{p.name}</h2>
                <p className='text-xs text-gray-500 uppercase tracking-widest font-semibold'>{p.pack}</p>
                <span className='font-bold text-2xl text-[#E86000] mt-1'>{p.price}</span>
              </div>

              <button className='w-full bg-[#00692D] hover:bg-[#0A3B21] text-white font-Aeonik font-bold py-3.5 rounded-2xl uppercase tracking-wider transition-colors shadow-md'>
                Add To Cart
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  )
}

export default Shop