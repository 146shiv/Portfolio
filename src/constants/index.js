export const NAV_LINKS = [
    { id: 'home', label: 'Home' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'contact', label: 'Connect', isButton: true },
];

export const HERO_CONTENT = {
    greeting: "Available for hire",
    headlineStart: "Full-Stack Developer &",
    headlineEnd: "Problem Solver",
    description: "MERN Stack Specialist | Java DSA | Backend Enthusiast. Building scalable, user-centric, and high-performance applications.",
    techStack: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
    resumePdfUrl: "https://drive.google.com/uc?export=download&id=1KZ1UA8EbxgXvfMpDs7EryacvxU7Dz3TU",
    githubLink: "https://github.com/146shiv",
};

export const EXPERTISE_CONTENT = {
    fullStack: {
        title: "Full Stack Development",
        skills: ['React.js', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    },
    dsa: {
        title: "Algorithmic Problem Solving",
        stats: [
            { value: "500+", label: "LeetCode" },
            { value: "1800+", label: "CodeChef" },
        ],
    },
    tools: {
        title: "Tools & Cloud Infrastructure",
        skills: ['Git/GitHub', 'Docker', 'AWS (EC2, S3)', 'CI/CD', 'Linux'],
    }
};

// Add new projects here – they will show in the slider automatically
export const PROJECTS = [
    {
        id: 'reviewbo',
        title: "ReviewBo - AI Google Review Funnel",
        description: "A SaaS platform that helps local businesses collect 5-star Google reviews via smart QR funnels, AI-generated review suggestions, negative review filtering, and live analytics.",
        tags: [
            { name: "SaaS", color: "text-emerald-300 bg-emerald-500/10" },
            { name: "React", color: "text-indigo-300 bg-indigo-500/10" },
            { name: "AI / Groq", color: "text-pink-300 bg-pink-500/10" },
            { name: "Node.js", color: "text-green-300 bg-green-500/10" },
        ],
        caseStudyLink: "/reviewbo",
        liveDemoUrl: "https://www.reviewbo.co.in/",
        gradient: "from-emerald-900/40 to-slate-900",
        placeholderLabel: "ReviewBo",
    },
    {
        id: 'ai-chatbot',
        title: "Document Chatbot - AI RAG Assistant",
        description: "A conversational RAG application powered by Llama-3 and Pinecone vector database. Upload PDFs and chat with your documents via real-time WebSocket streaming.",
        tags: [
            { name: "RAG", color: "text-violet-300 bg-violet-500/10" },
            { name: "LLM", color: "text-pink-300 bg-pink-500/10" },
            { name: "Pinecone", color: "text-blue-300 bg-blue-500/10" },
            { name: "WebSocket", color: "text-yellow-300 bg-yellow-500/10" },
        ],
        caseStudyLink: "/ai-chatbot",
        liveDemoUrl: "https://chatbot-zeta-flax-37.vercel.app/",
        gradient: "from-violet-900/40 to-slate-900",
        placeholderLabel: "AI Chatbot",
    },
    {
        id: 'profilex',
        title: "ProfileX - Smart Business Card",
        description: "A MERN Stack application for creating and managing digital business cards with QR code integration, user authentication, and multi-card support.",
        tags: [
            { name: "React", color: "text-indigo-300 bg-indigo-500/10" },
            { name: "Node.js", color: "text-green-300 bg-green-500/10" },
            { name: "Express", color: "text-yellow-300 bg-yellow-500/10" },
            { name: "MongoDB", color: "text-blue-300 bg-blue-500/10" },
        ],
        caseStudyLink: "/profilex",
        liveDemoUrl: "https://profile-x-frontend.vercel.app",
        gradient: "from-indigo-900/40 to-slate-900",
        placeholderLabel: "ProfileX",
    },
];

export const SOCIAL_LINKS = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shivendra-yadav-a48027284/', iconColor: 'text-blue-500', external: true },
    { name: 'GitHub', url: 'https://github.com/146shiv', iconColor: 'text-slate-200', external: true },
    { name: 'Twitter', url: '#', iconColor: 'text-sky-400', external: true },
    { name: 'Email', url: 'mailto:shivendrayadav616@gmail.com', iconColor: 'text-red-500', external: false },
];
