export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      <h1 className="text-4xl font-bold mb-8 dark:text-gray-100">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Project Cards */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Remix App</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A modern web application with TypeScript and Tailwind CSS.
          </p>
          <a 
            href="https://github.com/jakedibattista/remixtesting" 
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
          >
            View on GitHub →
          </a>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Coming Soon</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            More exciting projects in development!
          </p>
        </div>
      </div>
    </div>
  );
} 