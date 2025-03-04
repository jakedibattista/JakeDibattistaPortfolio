import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About Jake DiBattista | AI Software Engineer" },
    { 
      name: "description", 
      content: "AI Software Engineer specializing in LLMs, ML model deployment, and innovative AI solutions" 
    },
  ];
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Hey there! 👋
        </h1>
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            I'm Jake DiBattista
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            An AI Software Engineer passionate about building intelligent systems that solve real-world problems. 
            My entrepreneurial background and UX expertise gives me a unique perspective in AI development - I don't just build models, 
            I create AI solutions that drive business value and delight users.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Why My Background Makes Me a Unique AI Engineer
          </h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold">🎯</span>
              <span>
                <strong>User-Centered AI Development:</strong> My UX research background enables me to build AI systems that are not just technically sophisticated, 
                but also intuitive and user-friendly. I understand how to make complex AI interactions feel natural and accessible.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold">💡</span>
              <span>
                <strong>Business Impact Focus:</strong> As a former entrepreneur, I approach AI development with a strong business mindset. 
                I identify high-impact opportunities for AI integration and ensure solutions drive measurable ROI through improved efficiency, 
                user satisfaction, or revenue growth.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold">🔄</span>
              <span>
                <strong>End-to-End AI Implementation:</strong> My diverse background allows me to handle the entire AI development lifecycle - 
                from initial user research and problem definition, through model selection and training, to deployment and user adoption.
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Recent AI Engineering Achievements
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transform hover:scale-[1.02] transition-transform">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-medium text-gray-800 dark:text-white">
                  MLB Pitcher Analysis AI
                </h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  🏆 Grand Prize Winner
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Won first place in the Google Cloud x MLB™ Hackathon by developing an advanced ML application 
                using Google's Vertex AI and Gemini models for real-time baseball pitcher analysis. 
                Key achievements:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>Implemented sophisticated video analysis using Vertex AI's vision models</li>
                <li>Created custom prompt engineering for detailed mechanical feedback</li>
                <li>Deployed on Google Cloud Run with containerized architecture</li>
                <li>Designed intuitive UI/UX for coaches and players</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://next2025challenge.devpost.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2"
                >
                  <span>🏆</span>
                  <span>View Hackathon</span>
                </a>
                <a 
                  href="https://www.youtube.com/watch?v=nHqDvu8WAPM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2"
                >
                  <span>📺</span>
                  <span>Watch Demo</span>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transform hover:scale-[1.02] transition-transform">
              <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-3">
                Enterprise AI Implementation at Sam's Club
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Led the development and integration of generative AI solutions for customer support, 
                modernizing the help center experience for millions of members. Notable impacts:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>Implemented AI-powered chat support system on help.samsclub.com</li>
                <li>Led research and development on model post-training through customer data collection</li>
                <li>Integrated Google VoIP solutions to reduce call center dependency</li>
                <li>Created scalable architecture handling enterprise-level request volumes</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://help.samsclub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2"
                >
                  <span>🔗</span>
                  <span>View Live System</span>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transform hover:scale-[1.02] transition-transform">
              <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-3">
                Semantic Document Search Engine
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Built a sophisticated document search system showcasing advanced AI capabilities:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Implemented vector similarity search using pgvector</li>
                <li>Integrated LangChain for document processing and embeddings</li>
                <li>Created custom ranking algorithms for search results</li>
                <li>Designed efficient document processing pipeline</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              AI/ML Expertise
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-blue-500">🤖</span>
                <span className="text-gray-600 dark:text-gray-300">Large Language Models & Prompt Engineering</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">⚡</span>
                <span className="text-gray-600 dark:text-gray-300">Vector Embeddings & Semantic Search</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📊</span>
                <span className="text-gray-600 dark:text-gray-300">ML Pipeline Development</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">🔍</span>
                <span className="text-gray-600 dark:text-gray-300">Computer Vision Integration</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📈</span>
                <span className="text-gray-600 dark:text-gray-300">Model Performance Analysis</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Technical Stack
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-blue-500">🔧</span>
                <span className="text-gray-600 dark:text-gray-300">OpenAI GPT, Vertex AI, LangChain, Gemini</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">💻</span>
                <span className="text-gray-600 dark:text-gray-300">Python, TypeScript</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">⚡</span>
                <span className="text-gray-600 dark:text-gray-300">Remix, Streamlit</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">☁️</span>
                <span className="text-gray-600 dark:text-gray-300">GCP AI Platform, AWS SageMaker</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">🗄️</span>
                <span className="text-gray-600 dark:text-gray-300">Vector DB (pgvector)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">🚀</span>
                <span className="text-gray-600 dark:text-gray-300">Docker, FastAPI</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/jakedibattista" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/jake-dibattista-a96011a1/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}