export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "cabotto",
    title: "Cabotto",
    tagline: "Creator Subscription Social Media Platform",
    description: "A creator-focused social media platform enabling discovery, subscriptions, and premium content access through a responsive web interface.",
    problem: "Creators lacked direct monetization tools and real-time engagement features like live streaming and instant chat on existing platforms.",
    solution: "Developed real-time UIs using Socket.io and ZegoCloud WebRTC, with Stripe integration for monetization and Redux Toolkit for complex state.",
    outcome: "Successfully launched monetization flows including subscription plans, tips, and pay-per-view content with consistent cross-device performance.",
    image: "/projects/Cabotto.png",
    techStack: ["React 18", "Redux Toolkit", "Tailwind CSS", "PrimeReact", "Socket.io", "Stripe JS", "Firebase Auth", "WebRTC", "HLS.js"],
    liveUrl: "https://cabotto.com",
  },
  {
    id: "ai-influencer",
    title: "AI Influencer Platform",
    tagline: "Subscription-Based Social Platform for AI Influencers",
    description: "A full-stack platform enabling users to interact with AI personalities through real-time chat, subscriptions, and monetized content.",
    problem: "Creating a seamless, app-like experience for AI interactions requires scalable real-time messaging and secure financial transactions.",
    solution: "Built a Next.js 15 architecture with an Express.js backend, implementing WebSockets for messaging and Stripe for secure wallet workflows.",
    outcome: "Delivered a high-performance platform with real-time notifications, wallet top-ups, and secure paid messaging features.",
    image: "/projects/ai-influencer.png",
    techStack: ["Next.js 15", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "HeroUI", "Socket.io", "Stripe"],
    liveUrl: "https://aiinfluencer-desilo.vercel.app/",
  },
  {
    id: "nira-web",
    title: "Nira Workforce Scheduler",
    tagline: "Enterprise Workforce Management Suite",
    description: "A full-stack platform designed to streamline employee scheduling, resource allocation, and operational planning for large organizations.",
    problem: "Manual workforce scheduling leads to operational inefficiencies and lacks secure, role-based access for large-scale planning.",
    solution: "Designed a drag-and-drop scheduling system with FullCalendar, backed by a JWT-secured Express.js API and Zustand for optimized state.",
    outcome: "Optimized operational planning with daily timeline views, weekly planning, and robust role-based access control.",
    image: "/projects/nira.png",
    techStack: ["Next.js 15", "React 18", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Zustand", "FullCalendar", "Framer Motion"],
    liveUrl: "https://nira-desilo.vercel.app/",
  },
  {
    id: "flaamo",
    title: "Flaamo AI",
    tagline: "Professional AI-Powered Product Photography Studio",
    description: "A high-performance AI studio that enables users to transform raw product images into studio-quality assets using specialized AI models.",
    problem: "DTC brands and agencies struggle with the high cost and time required for professional-grade fashion and product photography.",
    solution: "Built a suite of specialized AI features including virtual model rendering, precision background removal, and flat-lay photography generation.",
    outcome: "Enabled brands to transform raw apparel photos into professional marketing assets in seconds, significantly reducing production costs.",
    image: "/projects/flaamo.png",
    techStack: ["Next.js 15", "React 18", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "AI APIs", "Image Processing"],
    liveUrl: "https://flaamo-frontend.vercel.app/",
  },
  {
    id: "autostream",
    title: "Youtube Automation",
    tagline: "Ai-Driven Automation for YouTube Video Creation and Publishing",
    description: "An AI-driven platform that automates the YouTube content lifecycle, from scripting and video generation to scheduling and performance tracking.",
    problem: "Creators struggle with the manual overhead of scripting, asset management, and tracking performance across multiple disconnected tools.",
    solution: "Built an integrated engine featuring AI scripting, automated publishing via YouTube API, and a real-time analytics dashboard with granular video metrics.",
    outcome: "Streamlined content operations with automated scheduling and verified performance tracking, reducing production time and improving data visibility.",
    image: "/projects/autostream.png",
    techStack: ["Next.js 15", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "YouTube API", "OpenAI API", "Recharts"],
    liveUrl: "https://youtube-automation-desilo.vercel.app/",
  },
];
