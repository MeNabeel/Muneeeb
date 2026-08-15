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
    title: "Special Facebook Report: Rishta Market & Social Trends",
    category: "Social Media",
    description:
      "High-engagement Facebook video packaging, custom thumbnail design, and strategic caption hooks targeting viral reach.",
    thumbnail: "/images/rishta.jpg",
    date: "2025",
    platform: "Facebook",
    tags: ["Facebook Video", "Viral Content", "Social Media", "Editing"],
    caseStudy: {
      challenge: "Maximize Facebook video reach and organic share rates for social feature stories.",
      approach: "Designed high-contrast Urdu typography thumbnails and fast-paced hook editing.",
      content: "Exclusive social feature video package with dynamic subtitle overlays.",
      result: "Achieved viral engagement across Facebook feeds and community pages.",
    },
  },
  {
    id: "project-02",
    title: "Qurbani Special Coverage & Event Packaging",
    category: "Social Media",
    description:
      "Facebook Watch video packaging, title metadata optimization, and audience-targeted distribution during peak festive season.",
    thumbnail: "/images/qurbani.jpg",
    date: "2024 — 2025",
    platform: "Facebook",
    tags: ["Facebook Watch", "Event Coverage", "Audience Growth", "Analytics"],
    caseStudy: {
      challenge: "Deliver rapid festive season video coverage to Facebook audiences with maximum retention.",
      approach: "Optimized 3-minute video formatting with clear call-to-action overlays.",
      content: "On-ground festive reporting, market trends, and human interest stories.",
      result: "Generated sustained multi-million view impressions across network pages.",
    },
  },
  {
    id: "project-03",
    title: "Police Officers & Law Enforcement Special Report",
    category: "Social Media",
    description:
      "Editorial Facebook video packaging, investigative framing, and rapid social media publishing.",
    thumbnail: "/images/officers.jpg",
    date: "2024",
    platform: "Facebook",
    tags: ["Facebook Report", "Investigative", "Social Media", "Video Editing"],
  },
  {
    id: "project-04",
    title: "ASI Police Duty & Public Safety Report",
    category: "YouTube Content",
    description:
      "YouTube broadcast clipping, thumbnail design, search metadata indexing, and audience optimization.",
    thumbnail: "/images/ASI.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2024",
    platform: "YouTube",
    tags: ["YouTube SEO", "Police Duty", "Broadcast", "Video Editing"],
  },
  {
    id: "project-05",
    title: "Mulazim & Labor Rights Special Feature",
    category: "YouTube Content",
    description:
      "Human interest storytelling video package, multi-track video editing, audio leveling, and YouTube publishing.",
    thumbnail: "/images/Mulazim.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2024",
    platform: "YouTube",
    tags: ["Human Interest", "YouTube Content", "Video Production", "Editing"],
  },
  {
    id: "project-06",
    title: "Pathan Community Culture & Local Stories",
    category: "YouTube Content",
    description:
      "Cultural storytelling, vertical shorts packaging, high-contrast thumbnail graphics, and YouTube channel curation.",
    thumbnail: "/images/Pathan.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2024",
    platform: "YouTube",
    tags: ["Culture", "YouTube Feature", "Video Editing", "Audience Reach"],
  },
  {
    id: "project-07",
    title: "Petrol Price Hike & Public Inflation Analysis",
    category: "Video Editing",
    description:
      "Breaking news video packaging, graphic overlays, fast headline cuts, and cross-platform publishing.",
    thumbnail: "/images/petrol.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2025",
    platform: "YouTube / Facebook",
    tags: ["Breaking News", "Petrol Hike", "Video Editing", "Headlines"],
  },
  {
    id: "project-08",
    title: "Traffic Warden & Public Safety Awareness",
    category: "Video Editing",
    description:
      "Public safety video campaign, crisp motion cuts, color grading, and social media video distribution.",
    thumbnail: "/images/Traffic.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2024",
    platform: "YouTube / Social Media",
    tags: ["Traffic Safety", "Awareness", "Editing", "Shorts"],
  },
  {
    id: "project-09",
    title: "Tines & Special Broadcast Highlights",
    category: "Digital Strategy",
    description:
      "Comprehensive broadcast clipping, metadata tagging, playlist curation, and digital revenue optimization.",
    thumbnail: "/images/Tines.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2025",
    platform: "YouTube Broadcast",
    tags: ["Broadcast", "Digital Strategy", "YouTube SEO", "Monetization"],
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
