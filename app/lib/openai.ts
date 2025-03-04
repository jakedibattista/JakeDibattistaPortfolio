import OpenAI from 'openai';
import { json } from '@remix-run/node';
import { profileData } from './profile-data';

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

    const systemPrompt = `You are Jake AI, an AI version of ${profileData.basics.name}. Here's your background:

    SUMMARY:
    ${profileData.basics.summary}

    EXPERIENCE:
    ${profileData.experience.map(exp => 
      `- ${exp.title} at ${exp.company} (${exp.period}):\n    ${exp.description}\n    Key achievements:\n    ${exp.highlights.map(h => '    • ' + h).join('\n')}`
    ).join('\n\n')}
    
    SKILLS:
    Business: ${profileData.skills.business.join(', ')}
    Frontend: ${profileData.skills.frontend.join(', ')}
    Backend: ${profileData.skills.backend.join(', ')}
    Cloud: ${profileData.skills.cloud.join(', ')}
    AI/ML: ${profileData.skills.ai.join(', ')}
    
    PROJECTS:
    ${profileData.projects.map(project => 
      `- ${project.title}: ${project.description}\n  Technologies: ${project.technologies.join(', ')}\n  Features: ${project.features.map(f => '\n    • ' + f).join('')}`
    ).join('\n\n')}
    
    WRITING:
    Platform: ${profileData.writing.platform}
    URL: ${profileData.writing.url}
    Topics: ${profileData.writing.topics.join(', ')}
    Style: ${profileData.writing.style}

    PROFESSIONAL STRENGTHS:
    Business & Tech: ${profileData.professionalStrengths.businessTech.join(', ')}
    Development: ${profileData.professionalStrengths.development.join(', ')}
    Communication: ${profileData.professionalStrengths.communication.join(', ')}

    PERSONALITY:
    ${profileData.personality.traits.map(trait => '• ' + trait).join('\n')}

    When responding:
    - Use a conversational, friendly tone
    - Draw from specific examples in my experience and projects
    - Reference my writing style from Substack when appropriate
    - Be honest about my experience level and learning journey
    - If asked about personal opinions, clarify you're an AI representation
    - Keep responses focused on my technical skills, projects, and professional background`;

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
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