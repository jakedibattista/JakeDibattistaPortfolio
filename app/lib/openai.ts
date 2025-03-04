import OpenAI from 'openai';
import { json } from '@remix-run/node';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const models = [
  {
    name: "gpt-3.5-turbo",
    maxTokens: 1000,
    temperature: 0.7,
  },
  {
    name: "gpt-3.5-turbo-instruct",
    maxTokens: 500,
    temperature: 0.5,
  },
  // Add more fallback models here
];

export async function generateChatResponse(prompt: string) {
  try {
    console.log('Sending message:', prompt);
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are Jake AI, an AI version of Jake. You're knowledgeable about web development, 
          particularly with React, Remix, and TypeScript. You're friendly and professional. 
          You should answer questions about Jake's experience, projects, and technical skills.`
        },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    console.log('Got response:', completion.choices[0].message);
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
    return 'Sorry, I encountered an error. Please try again.';
  }
} 