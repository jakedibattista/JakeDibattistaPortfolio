import type { MetaFunction } from "@remix-run/node";
import { useState } from 'react';
import { useNavigation } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: "My Remix App" },
    { name: "description", content: "Welcome to my Remix application!" },
  ];
};

export default function Index() {
  const [count, setCount] = useState(0);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  
  return (
    <div className={`max-w-4xl mx-auto p-8 font-sans ${isLoading ? 'opacity-50' : ''}`}>
      <h1 className="text-4xl font-bold mb-4 dark:text-gray-100">Welcome to My Remix App</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
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
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Interactive Counter</h3>
        <p className="text-2xl mb-4">Count: {count}</p>
        <button 
          onClick={() => setCount(c => c + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Increment
        </button>
      </div>
    </div>
  );
} 