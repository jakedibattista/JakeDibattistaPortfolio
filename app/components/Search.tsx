export function Search() {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search..."
        className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
      />
      <kbd className="absolute right-3 top-2.5 px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border rounded-lg dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
        ⌘K
      </kbd>
    </div>
  );
} 