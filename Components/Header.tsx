import Link from 'next/link';

export default function Home() {
  return (

    <header className='w-full '>
        <nav className='w-full bg-[#00883e] flex items-center py-[10px] px-[120px]'>
            <div className='w-full h-full text-white  flex justify-start items-center gap-x-3 capitalize uppercase font-bold font-Aeonik'>
                <div>Shop</div>
                <div>Our Story</div>
                <div>Ambassador</div>
                <div>Wholesale</div>
            </div>
            <div className='w-full h-full flex justify-center'>
                <img src="/image/logo-white.webp" alt="" />
            </div>
            <div className='w-full h-full flex justify-end gap-2'>
                <div className='w-14 h-14 bg-white border border-solid border-green-500 rounded-full flex justify-center items-center'>
                    <img src="/image/Cart.svg" alt="" />
                </div>
                <div className='w-14 h-14 bg-white border border-solid border-green-500 rounded-full flex justify-center items-center'>
                    <img src="/image/Account.svg" alt="" />
                </div>
                <div className='flex items-center gap-x-2'>
                    <button className='px-4 py-3 rounded-3xl bg-white text-green-500'>
                        Find A Store
                    </button>
                    <button className='px-4 py-3 rounded-3xl bg-white text-green-500'>
                        Buy Now
                    </button>
                </div>
            </div>

        </nav>
    </header>

    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
    //   <h1 className="text-2xl font-bold mb-4 text-gray-900">Welcome to My Site</h1>
      
    //   {/* Next.js client-side routing anchor */}
    //   <Link 
    //     href="/about" 
    //     className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-200"
    //   >
    //     Go to About Page
    //   </Link>
    // </div>
  );
}
