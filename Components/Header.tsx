import Link from 'next/link';

export default function Home() {
  return (

    <header className='w-full fixed z-50'>
        
        <div className='w-full bg-[#1D4818]'>
            <div className='w-full py bg-yellow-400 text-black flex justify-center items-center rounded-b-3xl text-2xl'>
                <h2>FREE SHIPPING ON ALL ORDERS OVER $120</h2>
            </div>
        </div>
        <nav className='w-full bg-[#1D4818] flex items-center py-[5px] px-[120px] overflow-hidden '>
            <div className='w-full h-full text-white flex justify-start items-center gap-x-8 capitalize text-2xl  font-Aeonik'>
                <a href='#'>Shop</a>
                <a href='#'>Our Story</a>
                <a href='#'>Ambassador</a>
                <a href='#'>Wholesale</a>
            </div>
            <div className='w-full h-full flex justify-center'>
                <img src="/image/logo-white.webp" alt="logo" className='w-20' />
            </div>
            <div className='w-full h-full flex justify-end gap-4'>
                <a href='#' className='w-12 h-12 bg-white rounded-full flex justify-center items-center'>
                    <img src="/image/Cart.svg" alt="cart" />
                </a>
                <a href='#'  className='w-12 h-12 bg-white rounded-full flex justify-center items-center'>
                    <img src="/image/Account.svg" alt="account" />
                </a>
                <div className='flex items-center gap-x-4'>
                    <a href='#' className='px-4 py-2 rounded-3xl bg-white text-green-500'>
                        Find A Store
                    </a>
                    <a href='#' className='px-4 py-2 rounded-3xl bg-white text-green-500'>
                        Buy Now
                    </a>
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
