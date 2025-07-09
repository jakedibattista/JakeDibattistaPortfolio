import type { MetaFunction } from "@remix-run/node";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  buildProcess: string;
  status?: string;
}

const projects: Project[] = [
  {
    title: "Learn2Play Store - Board Game Learning Platform",
    status: "🚀 Current Project",
    description: "A marketplace and custom video chat agent to help users learn and play board games. Features AI-powered game instruction and real-time video assistance.",
    technologies: ["Next.js", "TypeScript", "OpenAI", "Video Chat", "AI Agents"],
    imageUrl: "https://nextjs.org/static/favicon/favicon-32x32.png",
    githubUrl: "https://github.com/jakedibattista/bolthackathon",
    liveUrl: "https://learn2play.store",
    buildProcess: "Built a comprehensive board game learning platform using Next.js and TypeScript. Implemented custom AI agents for game instruction and real-time video chat capabilities. Created a marketplace interface for game discovery and learning resources."
  },
  {
    title: "NBA AI in Action - MCP Trading Agent",
    description: "Custom MCP (Model Context Protocol) agent for NBA trade analysis using MongoDB integration",
    technologies: ["Python", "MCP", "MongoDB", "OpenAI", "Custom Agents"],
    imageUrl: "https://www.mongodb.com/assets/images/global/leaf_512x512@2x.png",
    githubUrl: "https://github.com/jakedibattista/nbaaiinaction",
    liveUrl: "",
    buildProcess: "Developed a custom MCP server implementation for NBA trade analysis. Integrated MongoDB for data persistence and created specialized agents for sports analytics. Built a sophisticated system for real-time trade recommendations and data processing."
  },
  {
    title: "ADK Marketing Bot - Multi-Agent Marketing Tool",
    description: "Small business multi-agent marketing tool to create campaigns and social media content",
    technologies: ["Python", "Multi-Agent Systems", "OpenAI", "Marketing Automation"],
    imageUrl: "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
    githubUrl: "https://github.com/jakedibattista/ADK-MarketingBot",
    liveUrl: "",
    buildProcess: "Created a multi-agent system for marketing automation targeting small businesses. Implemented specialized agents for campaign creation, content generation, and social media management. Built a comprehensive solution for automated marketing workflows."
  },
  {
    title: "Pitcher Mechanics Analyzer - Google Cloud x MLB™ Winner",
    status: "🏆 Grand Prize Winner",
    description: "ML-powered baseball pitcher mechanics analysis tool that won the Google Cloud x MLB™ Hackathon",
    technologies: ["Python", "Vertex AI", "Gemini", "Streamlit", "Computer Vision"],
    imageUrl: "https://www.google.com/chrome/static/images/chrome-logo.svg",
    githubUrl: "https://github.com/jakedibattista/GoogleCloud-PitcherAnalyzer",
    liveUrl: "https://pitcher-analyzer-east-238493405692.us-east4.run.app/?video=gs%3A%2F%2Fbaseball-pitcher-analyzer-videos-east%2Fvideos%2FRichardDEMO.mp4",
    buildProcess: "Developed a sophisticated ML application that analyzes pitcher mechanics from video input. Leveraged Google Cloud's Vertex AI and Gemini models for real-time analysis, containerized with Docker for deployment, and created an interactive Streamlit interface. Features include support for multiple pitch types, detailed mechanical analysis, and visual feedback with annotations."
  },
  {
    title: "Jake's AI Portfolio",
    status: "Current",
    description: "An AI-powered portfolio that combines Remix's modern web capabilities with OpenAI's GPT model, allowing visitors to interact and learn about my work through natural conversation.",
    technologies: ["React", "TypeScript", "OpenAI API", "Remix", "Tailwind CSS"],
    imageUrl: "https://raw.githubusercontent.com/remix-run/remix/main/packages/remix-dev/logo.svg",
    githubUrl: "https://github.com/jakedibattista/remixtesting",
    liveUrl: "https://remix-testing-and-portfolio.vercel.app/",
    buildProcess: "Built using Remix and TypeScript, this project implements OpenAI's chat completion API. I focused on creating a responsive interface with real-time updates and proper error handling. The application maintains conversation context and implements proper TypeScript safety patterns."
  },
  {
    title: "Document Search Engine",
    description: "A semantic search application that processes PDFs and text documents using LangChain and Supabase. Features include semantic search across documents using embeddings, relevance scoring, and document management.",
    technologies: ["Python", "LangChain", "Supabase", "PostgreSQL", "Streamlit", "HuggingFace"],
    imageUrl: "https://langchain.com/images/langchain.png",
    githubUrl: "https://github.com/jakedibattista/LangChainTesting",
    liveUrl: "",
    buildProcess: "Built a full-stack document search engine using LangChain for document processing and semantic search. Implemented pgvector in Supabase for vector similarity search, and created a Streamlit frontend for document management and search functionality. Features include PDF processing, semantic search with relevance scores, and batch document management."
  }
];

export const meta: MetaFunction = () => {
  return [
    { title: "My Projects | Portfolio" },
    { name: "description", content: "Explore my latest projects and technical work" },
  ];
};

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            {project.title === "Learn2Play Store - Board Game Learning Platform" ? (
              <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800">
                <div className="text-6xl">🎲</div>
              </div>
            ) : project.title === "NBA AI in Action - MCP Trading Agent" ? (
              <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-800 dark:to-red-800">
                <div className="text-6xl">🏀</div>
              </div>
            ) : project.title === "ADK Marketing Bot - Multi-Agent Marketing Tool" ? (
              <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-800 dark:to-teal-800">
                <div className="text-6xl">📈</div>
              </div>
            ) : project.title === "Pitcher Mechanics Analyzer - Google Cloud x MLB™ Winner" ? (
              <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-800 dark:to-orange-800">
                <div className="text-6xl">⚾</div>
              </div>
            ) : project.title === "Jake's AI Portfolio" ? (
              <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800">
                <div className="text-6xl">🤖</div>
              </div>
            ) : project.title === "Document Search Engine" ? (
              <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-800 dark:to-blue-800">
                <div className="text-6xl">🔍</div>
              </div>
            ) : (
              <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                <div className="text-6xl">💻</div>
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {project.title}
                </h2>
                {project.status && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {project.status}
                  </span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  How I Built This
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.buildProcess}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 