import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from 'react';
import { useNavigation, Form, useActionData, useSubmit } from '@remix-run/react';
import { json, type ActionFunctionArgs } from "@remix-run/node";
import { generateChatResponse } from '~/lib/openai';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

export const meta: MetaFunction = () => {
  return [
    { title: "Jake DiBattista's Portfolio" },
    { name: "description", content: "Welcome to Jake's portfolio - Web Developer specializing in React, Remix, and TypeScript" },
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
  const actionData = useActionData<typeof action>();
  const submit = useSubmit();
  const isLoading = navigation.state === "loading";
  
  useEffect(() => {
    if (actionData?.message) {
      const botMessage: Message = {
        id: Date.now(),
        text: actionData.message,
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    }
  }, [actionData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: 'user'
    };

    setMessages(prev => [...prev, newMessage]);
    const formData = new FormData(e.currentTarget);
    submit(formData, { method: "post" });
    setInputText('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="p-8 max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Welcome to Jake's Portfolio
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a href="/about" 
             className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">About Jake</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Learn more about Jake's background, skills, and experience
            </p>
          </a>
          
          <a href="/projects"
             className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400">Projects</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Explore Jake's portfolio of web development projects
            </p>
          </a>
        </div>

        {/* Chat Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">Chat with Jake AI</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Start a conversation below to speak with a model trained on Jake
            <span className="block text-sm text-gray-500 italic mt-2">
              (Jake is not liable for anything this chat produces)
            </span>
          </p>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-inner">
            <div className="h-[400px] overflow-y-auto p-6">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 mb-4 animate-slideIn ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm shadow-lg">
                      JA
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-6 py-3 shadow-md ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'bg-white dark:bg-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Form method="post" onSubmit={handleSubmit} className="mt-6">
            <div className="flex space-x-4">
              <input
                type="text"
                name="message"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-6 py-3 rounded-full border-2 border-gray-200 dark:border-gray-700 
                  focus:outline-none focus:border-blue-500 dark:focus:border-blue-400
                  dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
                  transition-colors duration-200"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 
                  text-white font-semibold hover:opacity-90 disabled:opacity-50
                  transform hover:scale-105 transition-all duration-200
                  shadow-lg hover:shadow-xl"
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  try {
    console.log('Action called');
    const formData = await request.formData();
    console.log('Form data:', formData);
    const message = formData.get("message");
    console.log('Message:', message);
    
    if (typeof message !== "string") {
      console.log('Invalid message');
      return json({ error: "Message is required" });
    }

    const response = await generateChatResponse(message);
    console.log('OpenAI response:', response);
    
    const messageContent = typeof response === 'object' ? response.content : response;
    console.log('Final message:', messageContent);
    return json({ message: messageContent });
  } catch (error) {
    console.error('Action error:', error);
    return json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Add these styles to your CSS file
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { 
      opacity: 0;
      transform: translateY(10px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 1s ease-out;
  }

  .animate-slideIn {
    animation: slideIn 0.3s ease-out;
  }
`; 