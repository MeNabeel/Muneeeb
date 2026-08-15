export interface Project {
  id: string;
  title: string;
  category: "YouTube Content" | "Social Media" | "Video Editing" | "Graphic Design" | "Digital Strategy";
  description: string;
  thumbnail: string;
  youtubeUrl?: string;
  date?: string;
  platform?: string;
  tags?: string[];
  caseStudy?: {
    challenge?: string;
    approach?: string;
    content?: string;
    result?: string;
  };
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  responsibilities: string[];
  isCurrent?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    description: string;
    category: "editing" | "design" | "management" | "publishing";
  }[];
}

export interface SocialLink {
  name: string;
  url: string;
  platformKey: "youtube" | "instagram" | "facebook" | "tiktok" | "x" | "whatsapp";
  ariaLabel: string;
}

export interface ChannelLogo {
  name: string;
  logo: string;
  role: string;
}

// Pre-filled WhatsApp message URL
const whatsappCustomMessage = encodeURIComponent(
  "Hi Muneeb, I saw your portfolio and would like to discuss a project with you."
);

export const personalDetails = {
  name: "MUNEEB.",
  fullTitle: "Social & Digital Media Expert",
  subTitle: "Social & Digital Media Expert · Video Editor · Content Strategist · Social Media Manager",
  heroHeadline: {
    line1: "I CREATE",
    accent: "CONTENT",
    line2: "THAT MOVES.",
  },
  heroDescription:
    "I create and manage digital content across platforms, combining video, design, social strategy, and audience-focused storytelling.",
  portraitImage: "/images/muneebprof.png",
  email: "mrmuneebbutt69@gmail.com",
  phone: "03234554941",
  phoneTel: "+923234554941",
  whatsappNumber: "+923234554941",
  whatsappUrl: `https://wa.me/923234554941?text=${whatsappCustomMessage}`,
  yearsExperience: "5+ YEARS",
  aboutHeading: "MY JOURNEY IN DIGITAL MEDIA.",
  aboutStory: {
    location: "Lahore, Pakistan",
    education: [
      "Matriculation",
      "Intermediate in Computer Science (ICS Physics) — Punjab Group of Colleges (2019–2021)",
      "Certification in Social Media Marketing & Management — Dankash Institute",
    ],
    bio: [
      "I am Muneeb, a social and digital media specialist based in Lahore. My path in tech and media started with completing my ICS Physics at Punjab Group of Colleges (2019–2021). Passionate about digital strategy, I pursued specialized certification in Social Media Marketing & Management at Dankash Institute.",
      "I began my professional career as a Social Media Intern at Dankash Institute for 6 months, building hands-on fundamentals. I then joined Nai Baat Media Network / Lahore Rang as a Social Media Content Executive for 2 years, managing high-volume news publishing and audience growth. Following a 2-month tenure at Aik News, I returned to Nai Baat Media Network / Lahore Rang, where I continue managing digital content today.",
      "Over the years, I've transformed my training into practical expertise across Social Media Management, Content Strategy, Video Production, Audience Engagement, and Performance Analysis.",
    ],
  },
  expertiseAreas: [
    "Social Media Management",
    "Content Strategy & Planning",
    "Video Editing & Production",
    "Audience Engagement & Growth",
    "Performance Analysis & Optimization",
    "YouTube & Platform Management",
  ],
};

export const trustOrganizations: ChannelLogo[] = [
  { name: "Neo News", logo: "/images/NEO-removebg-preview.png", role: "Content Executive" },
  { name: "Lahore Rang", logo: "/images/lahorerang-removebg-preview.png", role: "Content Executive" },
  { name: "Dunya News", logo: "/images/dunya-removebg-preview.png", role: "YouTube Executive" },
  { name: "Aik News", logo: "/images/aik-removebg-preview.png", role: "Social Media Executive" },
];

export const channelLogos: ChannelLogo[] = [
  { name: "Neo News", logo: "/images/NEO-removebg-preview.png", role: "Broadcast Network" },
  { name: "Lahore Rang", logo: "/images/lahorerang-removebg-preview.png", role: "Digital Media" },
  { name: "Dunya News", logo: "/images/dunya-removebg-preview.png", role: "News Network" },
  { name: "Aik News", logo: "/images/aik-removebg-preview.png", role: "News Channel" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "YouTube",
    url: "https://www.youtube.com",
    platformKey: "youtube",
    ariaLabel: "Visit Muneeb's YouTube Channel",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    platformKey: "instagram",
    ariaLabel: "Follow Muneeb on Instagram",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    platformKey: "facebook",
    ariaLabel: "Connect with Muneeb on Facebook",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com",
    platformKey: "tiktok",
    ariaLabel: "Watch Muneeb on TikTok",
  },
  {
    name: "X (Twitter)",
    url: "https://twitter.com",
    platformKey: "x",
    ariaLabel: "Follow Muneeb on X",
  },
  {
    name: "WhatsApp",
    url: personalDetails.whatsappUrl,
    platformKey: "whatsapp",
    ariaLabel: "Contact Muneeb on WhatsApp",
  },
];

export const featuredWork: Project[] = [
  {
    id: "project-01",
    title: "Neo News Broadcast & Digital Content Publishing",
    category: "YouTube Content",
    description:
      "End-to-end editorial execution, thumbnail optimization, video clipping, and structured channel management for daily broadcast segments.",
    thumbnail: "/images/thumbnail-youtube.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2025",
    platform: "YouTube",
    tags: ["YouTube SEO", "Video Editing", "Content Strategy", "Monetization"],
    caseStudy: {
      challenge:
        "Streamline high-frequency news video publishing across digital channels while maximizing audience retention and click-through rates.",
      approach:
        "Implemented standardized editorial workflows, clear thumbnail templates, and search-optimized title metadata.",
      content:
        "Daily news highlights, press conference cuts, and exclusive digital-first video packages.",
      result:
        "Consistently improved organic search visibility, video completion rates, and platform engagement.",
    },
  },
  {
    id: "project-02",
    title: "Cross-Platform Social Media Campaign & Growth",
    category: "Social Media",
    description:
      "Strategic content distribution and audience engagement across Instagram Reels, Facebook Watch, and TikTok for network accounts.",
    thumbnail: "/images/thumbnail-social.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2023 — 2025",
    platform: "Instagram / TikTok / Facebook",
    tags: ["Social Media", "Reels", "Audience Growth", "Analytics"],
    caseStudy: {
      challenge:
        "Repurpose news content into engaging short-form vertical video clips optimized for modern social algorithms.",
      approach:
        "Designed vertical framing templates, dynamic captions, and fast-paced hook editing styles.",
      content:
        "High-energy news snippets, trending topic breakdowns, and interactive community posts.",
      result:
        "Expanded multi-platform follower reach and generated sustained viral engagement across mobile feeds.",
    },
  },
  {
    id: "project-03",
    title: "Dunya News Breaking Headlines & Live Ingest",
    category: "Video Editing",
    description:
      "Rapid-response video editing, live event clipping, headline packaging, and real-time metadata publishing for Dunya News digital channels.",
    thumbnail: "/images/thumbnail-dunya.jpg",
    youtubeUrl: "https://youtu.be/dQw4w9WgXcQ",
    date: "Oct 2024 — Jan 2025",
    platform: "YouTube Broadcast",
    tags: ["Breaking News", "Live Events", "Metadata", "Content Production"],
    caseStudy: {
      challenge:
        "Deliver breaking press conference feeds and major news developments to digital audiences rapidly.",
      approach:
        "Built a real-time ingest-to-publish workflow with pre-configured graphics assets and clear tag indexing.",
      content:
        "Live speech cuts, emergency news bulletins, and prime-time talk show highlights.",
      result:
        "Achieved rapid upload speed during peak news cycles with zero compromise on quality.",
    },
  },
  {
    id: "project-04",
    title: "Ali Scan Prepress & Print Graphic Suite",
    category: "Graphic Design",
    description:
      "Comprehensive graphic design suite, vector illustration, color-managed prepress layouts, and commercial print quality assurance.",
    thumbnail: "/images/thumbnail-graphics.jpg",
    date: "2017 — 2022",
    platform: "Print & Graphic Media",
    tags: ["Photoshop", "Illustrator", "CorelDRAW", "Prepress", "Color Management"],
  },
  {
    id: "project-05",
    title: "Short-Form Video Packaging & Motion Reels",
    category: "Video Editing",
    description:
      "Cinematic motion graphics, color adjustment, clear audio leveling, and pacing for engaging digital reels.",
    thumbnail: "/images/thumbnail-youtube.jpg",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
    date: "2024",
    platform: "YouTube Shorts",
    tags: ["Premiere Pro", "Motion Reels", "Color Grading", "Shorts"],
  },
  {
    id: "project-06",
    title: "Audience Optimization & Channel Strategy",
    category: "Digital Strategy",
    description:
      "Channel management, playlist structuring, community post scheduling, and performance monitoring across network channels.",
    thumbnail: "/images/thumbnail-social.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2023 — Present",
    platform: "Multi-Platform",
    tags: ["YouTube Management", "Audience Engagement", "Content Strategy"],
  },
  {
    id: "project-07",
    title: "Lahore Rang Digital Media Packaging",
    category: "Social Media",
    description:
      "Digital media branding, daily post packaging, and short-form video publishing for Lahore Rang channel feeds.",
    thumbnail: "/images/lahorerang-removebg-preview.png",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "Lahore Rang",
    platform: "Lahore Rang",
    tags: ["Lahore Rang", "Social Media", "Video Content", "Branding"],
  },
  {
    id: "project-08",
    title: "Neo News Channel Content Strategy",
    category: "Digital Strategy",
    description:
      "Broadcast clipping strategy, channel curation, and digital monetization workflows for Neo News network channels.",
    thumbnail: "/images/NEO-removebg-preview.png",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "Neo News",
    platform: "Neo News",
    tags: ["Neo News", "Broadcast", "YouTube SEO", "Strategy"],
  },
  {
    id: "project-09",
    title: "Aik News Digital Newsroom Coverage",
    category: "YouTube Content",
    description:
      "Newsroom headline publishing, rapid breaking news cuts, and platform SEO metadata management.",
    thumbnail: "/images/aik-removebg-preview.png",
    youtubeUrl: "https://youtu.be/dQw4w9WgXcQ",
    date: "Aik News",
    platform: "Aik News",
    tags: ["Aik News", "Breaking News", "Headline Cuts", "Publishing"],
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2024 — Present",
    company: "Nai Baat Media Network / Lahore Rang",
    role: "Social Media Content Executive",
    isCurrent: true,
    responsibilities: [
      "Managing social media content publishing across YouTube, Facebook, Instagram, and TikTok",
      "Executing daily content strategy, video clipping, and thumbnail placement",
      "Monitoring audience reach, engagement analytics, and channel growth metrics",
      "Coordinating content scheduling, editorial planning, and team workflows",
    ],
  },
  {
    id: "exp-2",
    period: "2024 (2 Months)",
    company: "Aik News",
    role: "Social Media Executive",
    responsibilities: [
      "Managing news clip packaging, headlines publishing, and digital distribution",
      "Executing rapid video uploads for breaking news and press conference feeds",
      "Applying title metadata and search tag indexing for peak news cycles",
    ],
  },
  {
    id: "exp-3",
    period: "2022 — 2024 (2 Years)",
    company: "Nai Baat Media Network / Lahore Rang",
    role: "Social Media Content Executive",
    responsibilities: [
      "Overseeing channel publishing across YouTube, Facebook, TikTok, and Instagram",
      "Formulating short-form vertical video strategies and community engagement",
      "Driving organic audience growth and monitoring platform metrics",
    ],
  },
  {
    id: "exp-4",
    period: "6 Months",
    company: "Dankash Institute",
    role: "Social Media Intern",
    responsibilities: [
      "Completed intensive certification in Social Media Marketing & Management",
      "Executed hands-on social campaign planning, post scheduling, and page management",
      "Analyzed audience engagement metrics and supported digital marketing initiatives",
    ],
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: "Core Expertise",
    skills: [
      {
        name: "Social Media Management",
        description: "End-to-end channel publishing across YouTube, Facebook, Instagram & TikTok",
        category: "management",
      },
      {
        name: "Content Strategy & Planning",
        description: "Editorial scheduling, topic research, framing & audience targeting",
        category: "publishing",
      },
      {
        name: "Video & Content Production",
        description: "Multi-track video editing, timeline pacing, news clipping & reels packaging",
        category: "editing",
      },
      {
        name: "Audience Engagement",
        description: "Community outreach, comment interaction & organic follower growth",
        category: "management",
      },
      {
        name: "Performance Analysis",
        description: "Platform analytics, click-through optimization & reach metrics",
        category: "publishing",
      },
    ],
  },
  {
    title: "Software & Tools",
    skills: [
      {
        name: "Adobe Premiere Pro",
        description: "Professional video editing, timeline pacing & audio leveling",
        category: "editing",
      },
      {
        name: "Adobe Photoshop",
        description: "High-impact thumbnail design, graphics & photo editing",
        category: "design",
      },
      {
        name: "YouTube Ecosystem",
        description: "SEO optimization, metadata indexing & channel curation",
        category: "management",
      },
      {
        name: "Meta Suite & TikTok",
        description: "Reels strategy, Page publishing & trending content hooks",
        category: "management",
      },
    ],
  },
];

export const heroMarqueeWords = [
  "VIDEO",
  "SOCIAL",
  "DIGITAL",
  "CONTENT",
  "GROWTH",
  "EDITING",
  "STRATEGY",
  "YOUTUBE",
];

export const skillsMarqueeWords = [
  "VIDEO EDITING",
  "SOCIAL MEDIA",
  "CONTENT STRATEGY",
  "YOUTUBE",
  "GRAPHIC DESIGN",
  "DIGITAL MEDIA",
  "AUDIENCE GROWTH",
];
