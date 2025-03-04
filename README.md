# Jake AI Chat

A Remix-based chat application using OpenAI's GPT-3.5 API.

## Features
- Real-time chat interface
- OpenAI GPT-3.5 integration
- Dark/Light mode support
- TypeScript support
- Responsive design

## Setup

1. Clone the repository:

bash
git clone [your-repo-url]
cd [your-repo-name]

2. Install dependencies:
bash
npm install

3. Set up environment variables:
-   - Copy `.env` to `.env.local`
    - Copy `.env.example` to `.env.local`
    - Add your OpenAI API key to `.env.local`:

OPENAI_API_KEY=your_openai_api_key

4. Start the development server:
bash
npm run dev

## Structure

- `/app/root.tsx` - Main layout, dark mode, navigation
- `/app/routes/_index.tsx` - Home page with counter
- `/app/components/` - Reusable components (Search, Footer)

## Deployment

The app is deployed on Vercel.

## Contributing

## Environment Variables

Required environment variables in `.env.local`:
- `OPENAI_API_KEY`: Your OpenAI API key

## Development

- Built with Remix
- Uses OpenAI's GPT-3.5 API
- Styled with Tailwind CSS

## License

MIT