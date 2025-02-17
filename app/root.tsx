// This is your root layout
import * as React from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import "./tailwind.css";
import { useState, useEffect } from 'react';
import NProgress from 'nprogress';
import { Footer } from "~/components/Footer";
import { Search } from "~/components/Search";

export default function App() {
  const [theme, setTheme] = useState('light');
  const navigation = useNavigation();
  
  useEffect(() => {
    if (navigation.state === "loading") {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [navigation.state]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <html lang="en" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
      </head>
      <body className="bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen flex flex-col">
        <nav className="bg-gray-800 text-white p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <span className="font-bold text-xl">My Remix App</span>
            <div className="flex items-center space-x-4">
              <Search />
              <div className="space-x-4">
                <a href="/" className="hover:text-gray-300">Home</a>
                <a href="/about" className="hover:text-gray-300">About</a>
                <a href="/projects" className="hover:text-gray-300">Projects</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <Analytics />
        <button 
          onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
          className="fixed bottom-4 right-4 p-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-full"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
            <p className="text-gray-600 mb-4">Something went wrong.</p>
            <a href="/" className="text-blue-500 hover:underline">
              Go back home
            </a>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
} 