export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 mt-auto py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3 dark:text-white">Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">Home</a></li>
              <li><a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">About</a></li>
              <li><a href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">Projects</a></li>
            </ul>
          </div>
          {/* Add more sections */}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} My Remix App. Built with Remix and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
} 