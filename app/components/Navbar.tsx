'use client';
import React, { useState } from 'react';  
import Link from 'next/link'; 

const Navbar = () => {
  const [search, setSearch] = useState('');  
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      window.location.href = `/search?q=${search}`;  // ✅ Search field same rahega
    }
  };

  return (
    <div className='flex bg-gray-800 h-16 justify-between items-center px-6 py-4'>
      <h1 className='text-3xl text-yellow-400'>🎬 justWatch</h1>
      
      <div className="flex-1 w-120 pr-20 pl-8">
        <form onSubmit={handleSearch} className="w-full">
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 pl-8 bg-gray-700 border-2 border-gray-400 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          />
        </form>
      </div>
      
      <div className='flex text-lg gap-8 text-white font-semibold'>
        <Link href="/" className="hover:text-blue-400">About</Link>
        <Link href="/watchlist" className="hover:text-green-400">Watchlist</Link>
        <Link href="/popular" className="hover:text-purple-400">Popular</Link>
        <Link href="/weather" className="hover:text-yellow-400">Weather</Link>
      </div>
    </div>
  )
}

export default Navbar
