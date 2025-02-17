import { useState, useEffect } from 'react';

export function Search() {
  const [query, setQuery] = useState('');
  
  // Mock search results
  const results = query ? [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Projects', url: '/projects' }
  ].filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase())
  ) : [];

  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search..."
        className="w-48 px-4 py-2 rounded-lg border 
          text-gray-900 
          dark:text-white 
          placeholder:text-gray-500
          dark:placeholder:text-gray-400
          bg-white
          dark:bg-gray-800 
          border-gray-300
          dark:border-gray-700
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          dark:focus:ring-blue-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <kbd className="absolute right-3 top-2.5 px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border rounded-lg dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
        ⌘K
      </kbd>
      
      {/* Dropdown Results */}
      {query && (
        <div className="absolute top-full mt-1 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700">
          {results.length > 0 ? (
            <ul className="py-2">
              {results.map(result => (
                <li key={result.url}>
                  <a
                    href={result.url}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                  >
                    {result.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-2 text-gray-500 dark:text-gray-400">
              No results found
            </p>
          )}
        </div>
      )}
    </div>
  );
} 