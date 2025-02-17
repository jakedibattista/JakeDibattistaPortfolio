export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      <h1 className="text-4xl font-bold mb-4 dark:text-gray-100">About</h1>
      <div className="prose dark:prose-invert">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          This is a modern web application built with:
        </p>
        <ul className="space-y-2 mt-4">
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <span className="mr-2">🎵</span>
            Remix - Full stack web framework
          </li>
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <span className="mr-2">🎨</span>
            Tailwind CSS - Utility-first CSS framework
          </li>
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <span className="mr-2">📊</span>
            Vercel Analytics - Performance monitoring
          </li>
        </ul>
      </div>
    </div>
  );
} 