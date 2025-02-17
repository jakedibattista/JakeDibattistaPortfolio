// This is your root layout
import * as React from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import "./tailwind.css";

export default function App() {
  return (
    <html lang="en" className="dark:bg-gray-900">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-gray-900 transition-colors">
        <nav className="bg-gray-800 text-white p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <span className="font-bold text-xl">My Remix App</span>
            <div className="space-x-4">
              <a href="/" className="hover:text-gray-300">Home</a>
              <a href="/about" className="hover:text-gray-300">About</a>
              <a href="/projects" className="hover:text-gray-300">Projects</a>
            </div>
          </div>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
} 