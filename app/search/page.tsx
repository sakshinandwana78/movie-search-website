

import Link from 'next/link';
import axios from 'axios';

async function getMovies(searchQuery) {
  try {
    const { data } = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: '60cc5f47',
        s: searchQuery,
      },
    });
    return data.Search || [];
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
}

export default async function SearchPage({ searchParams }) {
  // 🔥 FIXED: await searchParams!
  const resolvedParams = await searchParams;
  const searchQuery = resolvedParams.q || '';
  const movies = await getMovies(searchQuery);

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          🔍 Search Results for "<span className="text-blue-400">{searchQuery || 'anything'}</span>"
        </h2>
        {movies.length === 0 ? (
          <p className="text-gray-400 text-xl">No movies found for "{searchQuery}"</p>
        ) : (
          <p className="text-green-400 text-lg font-semibold">
            🎬 {movies.length} movies found for "{searchQuery}"
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {movies.map((movie) => (
          <Link href={`/movie/${movie.imdbID}`} key={movie.imdbID} className="block">
            <div className="bg-gray-800 p-3 rounded-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer border-2 border-transparent hover:border-blue-500">
              <img 
                src={movie.Poster !== 'N/A' ? movie.Poster : ' '}
                alt={movie.Title}
                className="w-full h-82 object-cover rounded-lg mb-2"
              />
              <h3 className="text-xl font-bold text-white mb-2 truncate">{movie.Title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2">⭐</span>
                  <span className="font-semibold text-white">N/A</span>
                </div>
                <span className="text-sm text-gray-400">{movie.Year}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
