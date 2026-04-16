import React from 'react';
import Link from 'next/link';

const notfound = () => {
    return (
        <div>
            
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
    
    <h1 className="text-8xl font-bold">404</h1>
    
    <p className="mt-4 text-gray-400 text-lg">
      Not Found This Page
    </p>

    <Link
      href="/"
      className="mt-6 px-6 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
    >
      Back to Home
    </Link>

  </div>
            
        </div>
    );
};

export default notfound;