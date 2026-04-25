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
  modalImages?: string[];
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
    id: "cabotto-support",
    title: "Cabotto Support",
    tagline: "Modern Help Center & Documentation Platform",
    description: "The primary support hub for the Cabotto ecosystem, providing users with essential resources, legal documentation, and interactive support tools.",
    problem: "The platform required a scalable, SEO-optimized system to manage high-traffic informational content, legal compliance, and monetization guides.",
    solution: "Built with Next.js 15 App Router for SSR/SSG optimization, utilizing MongoDB for dynamic content management and featuring an integrated Chatbot.",
    outcome: "Delivered an accessible, clean knowledge base that streamlines user assistance and efficiently handles mandatory compliance documentation.",
    image: "/projects/cabotto-support.png",
    techStack: ["Next.js 15", "React 19", "Tailwind CSS 4", "MongoDB", "Mongoose", "Axios", "React Toastify"],
    liveUrl: "https://support.cabotto.com",
  },
  {
    id: "ai-influencer",
    title: "AI Influencer",
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
    id: "nira-mobile",
    title: "Nira Mobile",
    tagline: "Mobile Workforce Scheduling & Management",
    description: "A production-ready mobile companion to the Nira ecosystem, empowering managers and employees to track productivity, manage shifts, and monitor KPIs in real-time.",
    problem: "Mobile workforces require a high-performance, on-the-go solution to manage complex schedules, monitor metrics, and execute rapid decisions without relying on desktop interfaces.",
    solution: "Developed a 'Premium Dark' cross-platform application using Expo and React Native, featuring secure JWT authentication via Expo Secure Store and optimized global state with Zustand.",
    outcome: "Delivered a responsive mobile suite featuring a real-time workforce dashboard, dynamic weekly planning, deep-dive analytics, and native document sharing for seamless reporting.",
    image: "/projects/nira-m-1.png",
    techStack: ["Expo", "React Native", "TypeScript", "Zustand", "React Navigation", "Axios", "Expo Secure Store", "SheetJS", "i18next"],
    modalImages: ["/projects/nira-m-2.png", "/projects/nira-m-3.png", "/projects/nira-m-4.png"],
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
  {
    id: "multinet-systems",
    title: "Multinet Systems (Cosmic+)",
    tagline: "Specialized Power Management Solutions",
    description: "A digital presence for Multinet Systems, a specialized provider of power management solutions under the brand Cosmic+, showcasing their top-tier electrical products and 25+ years of expertise.",
    problem: "High-stakes industries like Healthcare, Industrial Manufacturing, and Pharma require absolute power consistency for critical equipment (CT scanners, Laser cutting machines, testing labs) to prevent catastrophic failures.",
    solution: "Built a comprehensive platform to highlight tailored solutions across multiple critical industries, detailing applications for healthcare, printing/packaging, and complex chemical machinery.",
    outcome: "Successfully showcased their industry authority, highlighting over 2,000 successful installations and a loyal client base of 300+ served over the last 25 years.",
    image: "/projects/multinet-systems.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://multinetsystems.com/",
  },
  {
    id: "alliance-exports",
    title: "Alliance Exports",
    tagline: "Global Manufacturer & Exporter of Premium Natural Stones",
    description: "A digital showcase for Alliance Exports, an Indian manufacturer and exporter of high-performance natural stones operating since 1997 with processing units in India and Dar-e-Salaam.",
    problem: "International markets require large volumes of finely finished, high-quality natural stones—such as granite, marble, and quartzite—that maintain precision and durability over time.",
    solution: "Designed a platform highlighting their extensive catalog of global stone varieties and monuments, emphasizing their state-of-the-art German and Indian machinery.",
    outcome: "Successfully established a digital footprint reflecting their two decades of legacy, global export capabilities, and unwavering promise of quality.",
    image: "/projects/alliance-exports.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "http://www.allianceexportss.com/",
  },
  {
    id: "miracle-fresh",
    title: "Miracle Fresh",
    tagline: "Premium Air Fresheners & Home Hygiene Products",
    description: "A digital catalog for Miracle Fresh, showcasing their luxury positioning and wide variety of scent-based products, from PDCB air fresheners to essential home cleaning supplies.",
    problem: "The company needed a clean, professional online presence to display their diverse product lines and facilitate direct communication with retail and wholesale customers.",
    solution: "Developed a luxurious UI featuring high-resolution imagery and integrated a direct WhatsApp chat feature to streamline product inquiries and bulk order requests.",
    outcome: "Successfully positioned the brand as a premium choice for home freshness, offering an elegant user experience that bridges the gap between catalog browsing and direct sales.",
    image: "/projects/miracle.png",
    techStack: ["Next.js 15", "React 18", "Tailwind CSS", "Node.js"],
    liveUrl: "https://miraclefreshner.co/",
  },
  {
    id: "assetpass-support",
    title: "AssetPass Support",
    tagline: "Digital Inheritance as a Service (DIaaS) Platform",
    description: "A DIaaS platform designed to solve the 'digital legacy' problem, ensuring cryptocurrency, legal documents, passwords, and photos aren't lost forever.",
    problem: "Standard cloud drives lack mechanisms to securely pass on digital assets to beneficiaries without exposing the contents to intermediaries or trustees.",
    solution: "Implemented a unique trustee-based release system utilizing military-grade, zero-knowledge encryption where data is encrypted on the device before reaching the cloud.",
    outcome: "Delivered a quantum-proof White-Label solution for law firms and private banks, along with secure direct plans for personal and family use.",
    image: "/projects/assetpass-support.png",
    techStack: ["Wordpress"],
    liveUrl: "https://assetpass.com/support/",
  }
];
