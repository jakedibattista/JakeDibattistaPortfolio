import OpenAI from 'openai';
import { json } from '@remix-run/node';

const apiKey = process.env.OPENAI_API_KEY;

export const openai = new OpenAI({
  apiKey: apiKey || '',  // Vercel needs a default value
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

export async function generateChatResponse(message: string) {
  try {
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY environment variable is required');
    }

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are Jake AI, an AI version of Jake. You're knowledgeable about web development, 
          particularly with React, Remix, and TypeScript. You're friendly and professional. 
          You should answer questions about Jake's experience, projects, and technical skills.`
        },
        { role: "user", content: message }
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 1000,
    });

    return completion.choices[0].message;
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw error;
  }
} 