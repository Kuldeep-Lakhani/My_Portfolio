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
    description:
      "A full-featured creator economy platform enabling content creators to build communities, monetize their content through subscriptions and pay-per-view, and engage audiences in real-time via live streaming and instant messaging — all through a seamless, responsive web interface.",
    problem:
      "Independent creators struggled with fragmented tools across multiple platforms — lacking unified monetization, real-time audience engagement, and live streaming capabilities in a single, cohesive product.",
    solution:
      "Built a scalable frontend architecture using React 18 and Redux Toolkit for complex state management, integrated Socket.io for real-time chat and notifications, ZegoCloud WebRTC for live streaming, and Stripe JS for end-to-end monetization workflows including subscriptions, tips, and pay-per-view.",
    outcome:
      "Successfully delivered a production-ready platform with fully functional monetization flows (subscription plans, tipping, pay-per-view), real-time engagement features, and consistent cross-device performance — enabling creators to generate revenue directly from their audience.",
    image: "/projects/Cabotto.png",
    techStack: [
      "React 18",
      "Redux Toolkit",
      "Tailwind CSS",
      "PrimeReact",
      "Socket.io",
      "Stripe JS",
      "Firebase Auth",
      "WebRTC",
      "HLS.js",
    ],
    liveUrl: "https://cabotto.com",
  },
  {
    id: "cabotto-support",
    title: "Cabotto Support",
    tagline: "Modern Help Center & Documentation Platform",
    description:
      "A dedicated support hub for the Cabotto creator platform, offering users a centralized resource for help articles, legal documentation, compliance guides, monetization walkthroughs, and an AI-powered chatbot — all optimized for performance and discoverability.",
    problem:
      "Cabotto's growing user base needed a scalable, SEO-friendly system to handle high-traffic informational pages, legal compliance documents, and monetization guides — without overloading the core platform.",
    solution:
      "Built with Next.js 15 App Router leveraging SSR and SSG for optimal performance and SEO, MongoDB with Mongoose for dynamic content management, and an integrated AI chatbot to handle common user queries instantly without manual support intervention.",
    outcome:
      "Delivered a fast, accessible, and SEO-optimized knowledge base that significantly reduces support overhead, ensures legal compliance documentation is always accessible, and provides users with instant self-service assistance through the integrated chatbot.",
    image: "/projects/cabotto-support.png",
    techStack: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "Axios",
      "React Toastify",
    ],
    liveUrl: "https://support.cabotto.com",
  },
  {
    id: "ai-influencer",
    title: "AI Influencer",
    tagline: "Subscription-Based Social Platform for AI Influencers",
    description:
      "A full-stack MERN platform where users discover and interact with AI-powered personas through real-time chat, subscription plans, and monetized content delivering an immersive, app-like social experience built for engagement and revenue generation.",
    problem:
      "Building a seamless AI interaction platform demanded scalable real-time messaging infrastructure, secure financial transaction handling, and a responsive app-like frontend — all unified within a single cohesive product.",
    solution:
      "Architected a Next.js 15 App Router frontend with TypeScript for type safety, paired with an Express.js backend powering REST APIs and Socket.io WebSockets for real-time messaging and notifications. Integrated Stripe for secure wallet top-ups, subscription billing, and paid messaging workflows with JWT-based authentication throughout.",
    outcome:
      "Delivered a production-ready platform with real-time chat, push notifications, tiered subscription plans, secure Stripe wallet workflows, and paid messaging providing a scalable foundation for monetized AI persona interactions at scale.",
    image: "/projects/ai-influencer.png",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "HeroUI",
      "Socket.io",
      "Stripe",
    ],
    liveUrl: "https://aiinfluencer-desilo.vercel.app/",
  },
  {
    id: "nira-web",
    title: "Nira Workforce Scheduler",
    tagline: "Enterprise Workforce Management Suite",
    description:
      "A full-stack enterprise workforce management platform enabling large organizations to efficiently handle employee scheduling, resource allocation, shift planning, and operational coordination — all through an intuitive drag-and-drop interface with real-time data synchronization.",
    problem:
      "Large organizations relying on manual scheduling faced operational inefficiencies, scheduling conflicts, and lacked a centralized system with secure role-based access for managers, admins, and employees to collaborate on workforce planning.",
    solution:
      "Built an interactive drag-and-drop scheduling interface using FullCalendar with daily timeline and weekly planning views, backed by a JWT-secured Express.js REST API with role-based access control. Leveraged Zustand for optimized global state management and Framer Motion for smooth UI transitions across a fully responsive Next.js 15 frontend.",
    outcome:
      "Delivered a production-ready enterprise scheduling suite with real-time data synchronization across views, granular role-based access control for multi-level teams, and a highly interactive drag-and-drop experience significantly reducing manual planning overhead and scheduling conflicts for large-scale operations.",
    image: "/projects/nira.png",
    techStack: [
      "Next.js 15",
      "React 18",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Zustand",
      "FullCalendar",
      "Framer Motion",
    ],
    liveUrl: "https://nira-desilo.vercel.app/",
  },
  {
    id: "nira-mobile",
    title: "Nira Mobile",
    tagline: "Mobile Workforce Scheduling & Management",
    description:
      "A production-ready cross-platform mobile companion to the Nira ecosystem, empowering managers and employees to track productivity, manage shifts, view schedules, monitor KPIs, and execute operational decisions in real-time — all from a sleek, premium dark-themed native interface.",
    problem:
      "Field managers and mobile workforces needed an on-the-go solution to manage complex schedules, monitor real-time metrics, and make rapid operational decisions — without being tethered to desktop interfaces or losing access to critical workforce data.",
    solution:
      "Built a cross-platform mobile application using Expo and React Native with TypeScript, featuring a 'Premium Dark' UI design system, secure JWT authentication stored via Expo Secure Store, optimized global state management with Zustand, multi-language support through i18next, and native document export capabilities using SheetJS for on-device reporting.",
    outcome:
      "Delivered a fully responsive mobile suite featuring a real-time workforce dashboard, dynamic weekly schedule planning, deep-dive analytics, multi-language support, and native document sharing enabling seamless workforce management from any location without desktop dependency.",
    image: "/projects/nira-m-1.png",
    techStack: [
      "Expo",
      "React Native",
      "TypeScript",
      "Zustand",
      "React Navigation",
      "Axios",
      "Expo Secure Store",
      "SheetJS",
      "i18next",
    ],
    modalImages: [
      "/projects/nira-m-2.png",
      "/projects/nira-m-3.png",
      "/projects/nira-m-4.png",
    ],
  },
  {
    id: "flaamo",
    title: "Flaamo AI",
    tagline: "Professional AI-Powered Product Photography Studio",
    description:
      "A high-performance full-stack AI photography studio that empowers DTC brands, fashion agencies, and solo founders to transform raw product images into studio-quality marketing assets — featuring virtual model rendering, background removal, ghost mannequin, and flat-lay generation, all processed within seconds through specialized AI models.",
    problem:
      "DTC brands and fashion agencies face prohibitively high costs, long turnaround times, and heavy logistical overhead when producing professional-grade product photography — creating a significant barrier for smaller brands competing with larger players in visual-first markets.",
    solution:
      "Built a suite of specialized AI-powered features including virtual model rendering, precision background removal, ghost mannequin effect, and flat-lay photography generation all backed by a scalable Next.js 15 frontend and an Express.js REST API handling high-speed image processing workflows and AI model integrations.",
    outcome:
      "Enabled DTC brands, agencies, and solo founders to transform raw apparel photos into professional marketing-ready assets within seconds dramatically reducing photography production costs and turnaround times while maintaining consistent, high-quality visual output at scale.",
    image: "/projects/flaamo.png",
    techStack: [
      "Next.js 15",
      "React 18",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "AI APIs",
      "Image Processing",
    ],
    liveUrl: "https://flaamo-frontend.vercel.app/",
  },
  {
    id: "autostream",
    title: "Youtube Automation",
    tagline: "AI-Driven Automation for YouTube Video Creation and Publishing",
    description:
      "A full-stack AI-driven platform that automates the entire YouTube content lifecycle from AI-powered scriptwriting, media asset management, and voiceover coordination to automated video scheduling, publishing via YouTube API, and real-time performance tracking purpose-built for faceless channel operators and content teams.",
    problem:
      "YouTube creators and faceless channel operators face significant manual overhead managing scripting, asset libraries, voiceover coordination, and performance tracking across multiple disconnected tools making consistent, high-volume content production difficult to sustain.",
    solution:
      "Built an integrated content engine featuring OpenAI-powered AI scripting, a centralized media and template asset library, automated video publishing via the YouTube Data API, and a real-time analytics dashboard powered by Recharts all within a unified Next.js 15 and Express.js full-stack architecture with MongoDB for content pipeline management.",
    outcome:
      "Delivered a streamlined content operations platform that automates scheduling and publishing workflows, centralizes asset management, and provides granular real-time performance insights significantly reducing production time and giving creators full visibility over their channel growth and revenue metrics.",
    image: "/projects/autostream.png",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "YouTube API",
      "OpenAI API",
      "Recharts",
    ],
    liveUrl: "https://youtube-automation-desilo.vercel.app/",
  },
  {
    id: "multinet-systems",
    title: "Multinet Systems (Cosmic+)",
    tagline: "Specialized Power Management Solutions",
    description:
      "A professional corporate web presence for Multinet Systems, a specialized power management solutions provider operating under the Cosmic+ brand showcasing 25+ years of industry expertise, a curated product portfolio, and tailored power solutions for high-stakes industries including Healthcare, Industrial Manufacturing, Pharmaceuticals, and Printing & Packaging.",
    problem:
      "High-stakes industries like Healthcare, Industrial Manufacturing, and Pharma demand absolute power consistency for critical equipment CT scanners, laser cutting machines, and pharmaceutical testing labs where even minor power fluctuations can result in catastrophic equipment failures, production losses, or patient safety risks.",
    solution:
      "Developed a clean, fast, and fully responsive corporate website using core HTML, CSS, and JavaScript structured to clearly communicate Multinet's industry-specific power management solutions, product capabilities, and 25+ years of domain authority across multiple critical sectors without relying on heavy frameworks.",
    outcome:
      "Successfully established a strong digital presence that highlights Multinet Systems' industry authority showcasing over 2,000 successful installations, a loyal client base of 300+ businesses, and clearly positioning Cosmic+ products as the trusted power management choice across critical industries.",
    image: "/projects/multinet-systems.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://multinetsystems.com/",
  },
  {
    id: "alliance-exports",
    title: "Alliance Exports",
    tagline: "Global Manufacturer & Exporter of Premium Natural Stones",
    description:
      "A professional digital showcase for Alliance Exports, an Indian manufacturer and global exporter of premium natural stones operating since 1997 featuring processing units in India and Dar-e-Salaam, Tanzania, and serving international markets with a diverse catalog of granite, marble, quartzite, and bespoke stone monuments finished to the highest precision standards.",
    problem:
      "International buyers and B2B clients sourcing large volumes of premium natural stones granite, marble, and quartzite demand consistent quality, precision finishing, and reliable supply chain credibility before committing to long-term export partnerships across global markets.",
    solution:
      "Designed and developed a clean, responsive corporate website using core HTML, CSS, and JavaScript structured to showcase their extensive global stone variety catalog, monument offerings, state-of-the-art German and Indian processing machinery, and two decades of export legacy to build immediate trust with international buyers.",
    outcome:
      "Successfully established a credible digital footprint that reflects Alliance Exports' 25+ years of manufacturing legacy, dual-continent processing capabilities, and global export reach giving international clients a reliable first point of contact to evaluate their quality standards and product range.",
    image: "/projects/alliance-exports.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "http://www.allianceexportss.com/",
  },
  {
    id: "miracle-fresh",
    title: "Miracle Fresh",
    tagline: "Premium Air Fresheners & Home Hygiene Products",
    description:
      "A premium digital product catalog for Miracle Fresh a luxury home freshness brand offering a wide range of scent-based products including PDCB air fresheners, essential oils, and home cleaning supplies designed to reflect the brand's upscale positioning and drive direct retail and wholesale customer engagement.",
    problem:
      "Miracle Fresh needed a clean, professional online presence to showcase their diverse product lines to both retail and wholesale buyers while enabling seamless direct communication for bulk order inquiries without the complexity of a full e-commerce setup.",
    solution:
      "Developed a luxurious, high-performance frontend using Next.js 15 and Tailwind CSS, featuring high-resolution product imagery, an elegant UI reflecting the brand's premium identity, and a direct WhatsApp chat integration to streamline product inquiries and bulk order requests bridging the gap between catalog browsing and direct sales conversion.",
    outcome:
      "Successfully positioned Miracle Fresh as a premium home freshness brand with a polished digital presence delivering an elegant browsing experience that builds brand credibility, facilitates direct buyer communication, and supports both retail and wholesale customer acquisition.",
    image: "/projects/miracle.png",
    techStack: ["Next.js 15", "React 18", "Tailwind CSS", "Node.js"],
    liveUrl: "https://miraclefreshner.co/",
  },
  {
    id: "assetpass-support",
    title: "AssetPass Support",
    tagline: "Digital Inheritance as a Service (DIaaS) Platform",
    description:
      "A comprehensive support and documentation hub for AssetPass a Digital Inheritance as a Service (DIaaS) platform purpose-built to solve the digital legacy problem ensuring cryptocurrencies, legal documents, passwords, and personal media are securely preserved and seamlessly transferred to designated beneficiaries without exposure to intermediaries or third parties.",
    problem:
      "Standard cloud storage solutions lack the mechanisms to securely transfer digital assets cryptocurrency wallets, legal documents, passwords, and personal media to beneficiaries after death, leaving families locked out of critical digital estates or exposed to security risks through untrusted intermediaries.",
    solution:
      "Built on WordPress with a carefully structured information architecture, the platform clearly communicates AssetPass's unique trustee-based release system utilizing military-grade, zero-knowledge encryption where all data is encrypted on the user's device before reaching the cloud ensuring no intermediary, trustee, or platform operator can access the contents.",
    outcome:
      "Successfully delivered a clear, trustworthy support presence for a quantum-proof White-Label solution serving law firms and private banks, alongside secure personal and family inheritance plans building user confidence in a highly sensitive, security-critical product category.",
    image: "/projects/assetpass-support.png",
    techStack: ["Wordpress"],
    liveUrl: "https://assetpass.com/support/",
  },
  {
    id: "magical-fashion",
    title: "Magical Fashion",
    tagline: "Premium BigCommerce E-Commerce Theme for Fashion & Lifestyle Brands",
    description:
      "A premium, high-performance BigCommerce e-commerce theme built for PSDCenter a versatile, fully responsive storefront serving fashion, jewelry, arts & crafts, and health & beauty industries. Contributed to the project by redesigning and updating the visual design layer to modernize the storefront's aesthetic and improve overall user experience.",
    problem:
      "The existing BigCommerce theme required a fresh, modern design update to better align with current e-commerce aesthetics and meet the visual expectations of fashion and lifestyle brand customers.",
    solution:
      "Worked within the Stencil framework and SCSS architecture to update and enhance the theme's visual design refining layouts, typography, color schemes, and UI components to deliver a more polished, contemporary storefront experience without disrupting the existing functional architecture.",
    outcome:
      "Successfully delivered a visually modernized theme with improved design consistency across masonry layouts, mega-navigation, product pages, and responsive mobile views enhancing the overall brand appeal of the storefront for fashion and lifestyle retailers.",
    image: "/projects/magical-fashion.png",
    techStack: [
      "BigCommerce",
      "Stencil Framework",
      "Handlebars.js",
      "SCSS",
      "jQuery",
      "Zurb Foundation 5",
      "Webpack 4",
      "Grunt",
      "Babel",
      "Slick Carousel",
      "Fancybox 3",
      "LazySizes",
    ],
    liveUrl: "https://www.magicalfashions.com/",
  },
];
