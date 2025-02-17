export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-auto">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <ul className="flex space-x-4">
              <li><a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">Home</a></li>
              <li><a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">About</a></li>
              <li><a href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">Projects</a></li>
            </ul>
          </div>
          <div className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} My Remix App
          </div>
        </div>
      </div>
    </footer>
  );
} 