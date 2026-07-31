import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Welcome to My Site</h1>
      
      {/* Next.js client-side routing anchor */}
      <Link 
        href="/about" 
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-200"
      >
        Go to About Page
      </Link>
    </div>
  );
}
