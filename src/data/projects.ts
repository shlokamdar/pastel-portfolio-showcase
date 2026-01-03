export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
  architectureImage?: string;
  coverImage?: string;
  problem?: string;
  solution?: string;
}

export const projects: Project[] = [
  {
    id: "serveware",
    title: "Serveware",
    shortDescription: "Restaurant management system with real-time orders",
    description: "A comprehensive restaurant management platform that streamlines order processing, table management, and kitchen coordination. Built to handle high-volume establishments with ease.",
    problem: "Restaurants struggle with order accuracy, kitchen communication delays, and inefficient table management during peak hours.",
    solution: "Serveware provides real-time order synchronization between front-of-house and kitchen, smart table allocation, and analytics to optimize operations.",
    techStack: ["Python", "Flask", "MySQL", "Redis", "WebSockets"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    architectureImage: "/projects/serveware-arch.png",
    coverImage: "/projects/serveware-cover.png"
  },
  {
    id: "mindful-notes",
    title: "Mindful Notes",
    shortDescription: "Minimalist note-taking with focus mode",
    description: "A distraction-free writing environment designed for deep work. Features automatic saving, markdown support, and a calming interface that promotes focused thinking.",
    problem: "Modern note apps are cluttered with features that distract from the core task of writing and thinking.",
    solution: "Mindful Notes strips away complexity, offering a zen-like writing space with just the essentials: text, focus, and peace.",
    techStack: ["React", "TypeScript", "Supabase", "TailwindCSS"],
    githubUrl: "https://github.com",
    coverImage: "/projects/mindful-cover.png"
  },
  {
    id: "bloom-garden",
    title: "Bloom Garden",
    shortDescription: "Plant care reminder and tracking app",
    description: "Never forget to water your plants again. Bloom Garden learns your plants' needs and sends gentle reminders while tracking their growth journey.",
    problem: "Plant owners often forget care schedules, leading to over or under-watering and plant loss.",
    solution: "Smart scheduling based on plant species, local weather, and seasonal changes, with a beautiful gallery to document plant growth.",
    techStack: ["React Native", "Node.js", "PostgreSQL", "Push Notifications"],
    liveUrl: "https://example.com",
    coverImage: "/projects/bloom-cover.png"
  },
  {
    id: "pixel-palette",
    title: "Pixel Palette",
    shortDescription: "Color palette generator for designers",
    description: "Generate harmonious color palettes from images, explore color theory, and export directly to your design tools. Built for designers who care about color.",
    problem: "Finding the perfect color palette is time-consuming and requires deep understanding of color theory.",
    solution: "AI-powered palette extraction from images combined with color theory rules to generate beautiful, accessible color schemes.",
    techStack: ["Vue.js", "Python", "TensorFlow", "Figma API"],
    githubUrl: "https://github.com",
    documentationUrl: "https://docs.example.com",
    coverImage: "/projects/pixel-cover.png"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
