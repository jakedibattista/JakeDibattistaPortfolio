import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "My Remix App" },
    { name: "description", content: "Welcome to my Remix application!" },
  ];
};

export default function Index() {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Remix App</h1>
      <p className="text-lg text-gray-600 mb-8">
        This is a custom welcome page for my new Remix application.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4">Features</h2>
      <ul className="space-y-2">
        <li className="flex items-center text-gray-700">
          <span className="mr-2">✨</span>
          TypeScript support
        </li>
        <li className="flex items-center text-gray-700">
          <span className="mr-2">🚀</span>
          Vercel deployment
        </li>
        <li className="flex items-center text-gray-700">
          <span className="mr-2">⚡</span>
          Fast refresh in development
        </li>
      </ul>
    </div>
  );
} 