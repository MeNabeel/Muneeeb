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
  yearsExperience: "8+ YEARS",
  aboutHeading: "MORE THAN JUST EDITING.",
  aboutParagraphs: [
    "I operate at the intersection of video production, platform algorithm optimization, and brand storytelling. As a digital media strategist with extensive broadcast experience, I bridge the gap between creative execution and audience growth.",
    "My work spans daily content publishing for tier-1 news networks, end-to-end YouTube ecosystem management, breaking news live coverage, and visual identity design.",
  ],
  expertiseAreas: [
    "Video Editing & Post-Production",
    "Social Media Management",
    "Content Strategy & Planning",
    "Graphic Design & Print Production",
    "YouTube Ecosystem & SEO",
    "Audience Growth & Reach",
    "Monetization & Performance Analytics",
  ],
};

export const trustOrganizations = [
  { name: "Lahore Rang / Neo News", role: "Assistant Content Manager" },
  { name: "Dunya News", role: "YouTube Executive" },
  { name: "Ali Scan", role: "Graphic Designer" },
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
        "Streamline high-frequency broadcast video publishing across multiple YouTube channels while maximizing viewer retention and click-through rates.",
      approach:
        "Implemented standardized editorial workflows, high-contrast thumbnail templates, and search-optimized title metadata.",
      content:
        "Daily news highlights, press conference cuts, and exclusive digital-first video packages.",
      result:
        "Consistently improved organic search visibility, video completion rates, and platform revenue performance.",
    },
  },
  {
    id: "project-02",
    title: "Cross-Platform Social Media Strategy & Growth",
    category: "Social Media",
    description:
      "Strategic content distribution and audience engagement across Instagram Reels, Facebook Watch, and TikTok for high-volume news network channels.",
    thumbnail: "/images/thumbnail-social.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2024 — 2025",
    platform: "Instagram / TikTok / Facebook",
    tags: ["Social Media", "Reels", "Audience Growth", "Analytics"],
    caseStudy: {
      challenge:
        "Repurpose television news content into highly engaging short-form vertical video clips optimized for modern social algorithms.",
      approach:
        "Designed vertical framing standard templates, dynamic closed captions, and fast-paced hook editing styles.",
      content:
        "High-energy news snippets, trending topic breakdowns, and interactive community polls.",
      result:
        "Expanded multi-platform follower reach and generated sustained viral engagement across mobile feeds.",
    },
  },
  {
    id: "project-03",
    title: "Dunya News Breaking Headlines & Live Stream Execution",
    category: "Video Editing",
    description:
      "Rapid-response video editing, live event coverage clipping, headline packaging, and real-time metadata publishing for Dunya News digital channels.",
    thumbnail: "/images/thumbnail-dunya.jpg",
    youtubeUrl: "https://youtu.be/dQw4w9WgXcQ",
    date: "Oct 2024 — Jan 2025",
    platform: "YouTube Broadcast",
    tags: ["Breaking News", "Live Events", "Metadata", "YouTube Executive"],
    caseStudy: {
      challenge:
        "Deliver breaking press conference feeds and major political developments to digital audiences within minutes of occurrence.",
      approach:
        "Built a real-time ingest-to-publish timeline workflow with pre-configured graphics assets and automated tag indexing.",
      content:
        "Live speech cuts, emergency news bulletins, and prime-time talk show highlights.",
      result:
        "Achieved industry-leading upload speed during peak news cycles with zero compromise on stream quality.",
    },
  },
  {
    id: "project-04",
    title: "Ali Scan Brand Identity & Prepress Print Production",
    category: "Graphic Design",
    description:
      "Comprehensive graphic design suite, vector illustration, color-managed prepress layouts, and commercial print quality assurance.",
    thumbnail: "/images/thumbnail-graphics.jpg",
    date: "2017 — 2022",
    platform: "Print & Graphic Media",
    tags: ["Photoshop", "Illustrator", "CorelDRAW", "Prepress", "Color Management"],
    caseStudy: {
      challenge:
        "Ensure pixel-perfect vector accuracy and flawless CMYK color conversion across complex commercial printing projects.",
      approach:
        "Established rigid prepress checklists, custom proofing templates, and high-resolution layout controls.",
      content:
        "Corporate branding packages, marketing collateral, packaging designs, and large-format print media.",
      result:
        "Delivered error-free printing outputs across hundreds of high-volume print runs with 100% color fidelity.",
    },
  },
  {
    id: "project-05",
    title: "Editorial Short-Form Video Packaging & Motion Reels",
    category: "Video Editing",
    description:
      "Cinematic motion graphic integration, color grading, audio leveling, and pacing for engaging digital story reels.",
    thumbnail: "/images/thumbnail-youtube.jpg",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
    date: "2024",
    platform: "YouTube Shorts",
    tags: ["Premiere Pro", "Motion Graphics", "Color Grading", "Shorts"],
  },
  {
    id: "project-06",
    title: "Audience Optimization & Digital Content Architecture",
    category: "Digital Strategy",
    description:
      "Holistic channel management, playlist structuring, community post scheduling, and monetization compliance across network channels.",
    thumbnail: "/images/thumbnail-social.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2023 — Present",
    platform: "Multi-Platform",
    tags: ["YouTube Management", "Monetization", "Content Strategy"],
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2025 — Present",
    company: "Lahore Rang / Neo News",
    role: "Assistant Content Manager",
    isCurrent: true,
    responsibilities: [
      "Managing YouTube, Facebook, Instagram, and TikTok content strategy",
      "Daily content publishing and broadcast asset workflow coordination",
      "Improving organic reach, audience retention, and performance metrics",
      "Supporting digital revenue generation, monetization, and rights management",
      "Strategic content planning, editorial scheduling, and team coordination",
    ],
  },
  {
    id: "exp-2",
    period: "Oct 2024 — Jan 2025",
    company: "Dunya News",
    role: "YouTube Executive",
    responsibilities: [
      "Managing and publishing high-volume YouTube news content",
      "Editing breaking news, headlines, live events, and press conferences",
      "Executing YouTube SEO, thumbnail placement, and metadata indexing",
      "Monitoring performance analytics and audience traffic sources",
    ],
  },
  {
    id: "exp-3",
    period: "Jan 2023 — Oct 2024",
    company: "Lahore Rang / Neo News",
    role: "Social Media Executive",
    responsibilities: [
      "Overseeing core social accounts on YouTube, Facebook, TikTok, and Instagram",
      "Formulating digital content strategy and channel positioning",
      "Driving audience growth and community engagement",
      "Managing channel monetization standards and platform policy compliance",
    ],
  },
  {
    id: "exp-4",
    period: "Apr 2017 — Dec 2022",
    company: "Ali Scan",
    role: "Graphic Designer",
    responsibilities: [
      "Creative graphic design and vector layout production",
      "Design-to-print production workflows and prepress technical checks",
      "Color management, proofing, and rigorous quality assurance",
      "Printing coordination and client design requirement execution",
    ],
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: "Creative Tools",
    skills: [
      {
        name: "Adobe Premiere",
        description: "Professional multi-track video editing, timeline pacing & audio sync",
        category: "editing",
      },
      {
        name: "Adobe Photoshop",
        description: "High-impact thumbnail design, photo manipulation & visual assets",
        category: "design",
      },
      {
        name: "Adobe Illustrator",
        description: "Vector graphics, lower thirds, logos & typography design",
        category: "design",
      },
      {
        name: "CorelDRAW",
        description: "Prepress printing layouts, vector artwork & commercial design",
        category: "design",
      },
      {
        name: "InPage",
        description: "Urdu typography typesetting, news graphic overlay & publication layout",
        category: "publishing",
      },
    ],
  },
  {
    title: "Platform Management",
    skills: [
      {
        name: "YouTube Management",
        description: "SEO optimization, channel monetization, analytics & playlist curation",
        category: "management",
      },
      {
        name: "Facebook Management",
        description: "Video publishing, page growth, rights manager & audience engagement",
        category: "management",
      },
      {
        name: "Instagram Management",
        description: "Reels strategy, grid aesthetics, story engagement & hashtag architecture",
        category: "management",
      },
      {
        name: "TikTok Management",
        description: "Vertical video trends, sound selection & rapid algorithm hooks",
        category: "management",
      },
      {
        name: "Twitter/X Management",
        description: "Real-time news updates, thread curation & audience interaction",
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
