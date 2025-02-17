import type { MetaFunction } from "@remix-run/node";
import { useState } from 'react';
import { useNavigation } from '@remix-run/react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

export const meta: MetaFunction = () => {
  return [
    { title: "My Remix App" },
    { name: "description", content: "Welcome to my Remix application!" },
  ];
};

export default function Index() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Jake AI. Feel free to ask me anything about my experience, projects, or interests!",
      sender: 'bot'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  
  const handleSend = () => {
    if (!inputText.trim()) return;

    // Add user message
    const newMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: 'user'
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');

    // Mock bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now(),
        text: "Thanks for your message! I'm currently in development, but soon I'll be able to tell you all about Jake's experience and projects.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className={`max-w-4xl mx-auto p-8 font-sans ${isLoading ? 'opacity-50' : ''}`}>
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Welcome to My Remix App
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">
        This is a custom welcome page for my new Remix application.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Features</h2>
      <ul className="space-y-2">
        <li className="flex items-center text-gray-700 dark:text-gray-200">
          <span className="mr-2">✨</span>
          TypeScript support
        </li>
        <li className="flex items-center text-gray-700 dark:text-gray-200">
          <span className="mr-2">🚀</span>
          Vercel deployment
        </li>
        <li className="flex items-center text-gray-700 dark:text-gray-200">
          <span className="mr-2">⚡</span>
          Fast refresh in development
        </li>
      </ul>
      
      <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Chat with Jake AI</h2>
        <div className="h-[400px] overflow-y-auto mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          {/* Messages will go here */}
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex items-start space-x-2 mb-4 ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                  JA
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 border dark:border-gray-700 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500
              dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
} 