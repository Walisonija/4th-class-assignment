// app/page.tsx
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Country Information</h1>
      <div className="space-x-4">
        <Link href="/countries/usa">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            USA
          </button>
        </Link>
        <Link href="/countries/india">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            India
          </button>
        </Link>
        <Link href="/countries/germany">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            Germany
          </button>
        </Link>
        <Link href="/countries/canada">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            Canada
          </button>
        </Link>
        <Link href="/countries/australia">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            Australia
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
