import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "My Remix App" },
    { name: "description", content: "Welcome to my Remix application!" },
  ];
};

export default function Index() {
  return (
    <div style={{ 
      fontFamily: "system-ui, sans-serif", 
      lineHeight: "1.4",
      maxWidth: "800px",
      margin: "0 auto",
      padding: "2rem"
    }}>
      <h1>Welcome to My Remix App</h1>
      <p>This is a custom welcome page for my new Remix application.</p>
      
      <h2>Features</h2>
      <ul>
        <li>TypeScript support</li>
        <li>Vercel deployment</li>
        <li>Fast refresh in development</li>
      </ul>
    </div>
  );
} 