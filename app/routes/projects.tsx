import type { MetaFunction } from "@remix-run/node";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  buildProcess: string;
}

const projects: Project[] = [
  {
    title: "Jake's AI Portfolio",
    description: "An AI-powered portfolio that combines Remix's modern web capabilities with OpenAI's GPT model, allowing visitors to interact and learn about my work through natural conversation.",
    technologies: ["React", "TypeScript", "OpenAI API", "Remix", "Tailwind CSS"],
    imageUrl: "https://raw.githubusercontent.com/remix-run/remix/main/packages/remix-dev/logo.svg", // Using Remix logo as fallback
    githubUrl: "https://github.com/jakedibattista/remixtesting",
    liveUrl: "https://remixtesting.vercel.app/",
    buildProcess: "Built using Remix and TypeScript, this project implements OpenAI's chat completion API. I focused on creating a responsive interface with real-time updates and proper error handling. The application maintains conversation context and implements proper TypeScript safety patterns."
  },
  {
    title: "Document Search Engine",
    description: "A semantic search application that processes PDFs and text documents using LangChain and Supabase. Features include semantic search across documents using embeddings, relevance scoring, and document management.",
    technologies: ["Python", "LangChain", "Supabase", "PostgreSQL", "Streamlit", "HuggingFace"],
    imageUrl: "https://langchain.com/images/langchain.png", // This will be overridden by the custom display
    githubUrl: "https://github.com/jakedibattista/LangChainTesting",
    liveUrl: "",
    buildProcess: "Built a full-stack document search engine using LangChain for document processing and semantic search. Implemented pgvector in Supabase for vector similarity search, and created a Streamlit frontend for document management and search functionality. Features include PDF processing, semantic search with relevance scores, and batch document management."
  },
  {
    title: "Pitcher Mechanics Analyzer",
    description: "A machine learning-powered tool that analyzes baseball pitcher mechanics using video analysis and Google's Vertex AI with Gemini models. Built for the Google Cloud x MLB™ Hackathon.",
    technologies: ["Python", "Vertex AI", "Gemini", "Docker", "Streamlit", "Google Cloud Run"],
    imageUrl: "/images/dashboard.png", // Will be overridden by custom display
    githubUrl: "https://github.com/jakedibattista/pitcher-mechanics-analyzer",
    liveUrl: "https://pitcher-analyzer-238493405692.us-central1.run.app/",
    buildProcess: "Developed a sophisticated ML application that analyzes pitcher mechanics from video input. Leveraged Google Cloud's Vertex AI and Gemini models for real-time analysis, containerized with Docker for deployment, and created an interactive Streamlit interface. Features include support for multiple pitch types, detailed mechanical analysis, and visual feedback with annotations."
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
            {project.title === "Jake's AI Portfolio" ? (
              <div className="w-full h-48 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                <img 
                  src="https://cdn.worldvectorlogo.com/logos/openai-2.svg"
                  alt="OpenAI"
                  className="h-24 w-24 object-contain"
                />
              </div>
            ) : project.title === "Document Search Engine" ? (
              <div className="w-full h-48 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                <img 
                  src="https://streamlit.io/images/brand/streamlit-mark-color.svg"
                  alt="Streamlit"
                  className="h-24 w-24 object-contain"
                />
              </div>
            ) : project.title === "Pitcher Mechanics Analyzer" ? (
              <div className="w-full h-48 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                <img 
                  src="https://www.google.com/chrome/static/images/chrome-logo.svg"
                  alt="Google"
                  className="h-24 w-24 object-contain"
                />
              </div>
            ) : (
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h2>
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