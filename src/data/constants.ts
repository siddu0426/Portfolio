export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend & DB' | 'Tools & Cloud';
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: 'github' | 'linkedin' | 'twitter' | 'mail';
}

export const PERSONAL_INFO = {
  name: "Siddhartha Mylavarapu",
  logoText: "SM.",
  title: "Software Developer & Creative Coder",
  heroSubtext: "I build beautiful, responsive, and high-performance web applications with a passion for user experience and clean code.",
  email: "msvssiddhartha@gmail.com",
  github: "https://github.com/siddu0426",
  linkedin: "https://www.linkedin.com/in/siddhartha-mylavarapu/",
  twitter: "https://x.com/Siddhar63378629",
  resumeUrl: "/Siddhartha_Mylavarapu_Resume.docx",
  aboutParagraphs: [
    "I'm a passionate Software Developer with a knack for creating elegant solutions in the least amount of time. I have extensive experience in building scalable web applications with modern technology stacks. My journey in software development started with a deep curiosity for how things work, and it has evolved into a career where I can build, innovate, and solve complex problems.",
    "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring aspiring developers. I'm always eager to learn and take on new challenges."
  ],
  contactHeading: "Get In Touch",
  contactText: "I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. I'll get back to you as soon as possible!",
};

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: PERSONAL_INFO.github, iconName: "github" },
  { name: "LinkedIn", url: PERSONAL_INFO.linkedin, iconName: "linkedin" },
  { name: "Twitter / X", url: PERSONAL_INFO.twitter, iconName: "twitter" },
  { name: "Email", url: `mailto:${PERSONAL_INFO.email}`, iconName: "mail" },
];

export const SKILLS: Skill[] = [
  // Languages
  { name: "C", category: "Languages", iconName: "c" },
  { name: "Java", category: "Languages", iconName: "java" },
  { name: "Python", category: "Languages", iconName: "python" },
  { name: "SQL", category: "Languages", iconName: "sql" },
  { name: "JavaScript", category: "Languages", iconName: "javascript" },

  // Frontend
  { name: "HTML5", category: "Frontend", iconName: "html5" },
  { name: "CSS3", category: "Frontend", iconName: "css3" },
  { name: "React", category: "Frontend", iconName: "react" },
  { name: "Tailwind CSS", category: "Frontend", iconName: "tailwind" },

  // Backend & DB
  { name: "Node.js", category: "Backend & DB", iconName: "nodejs" },
  { name: "Express.js", category: "Backend & DB", iconName: "express" },
  { name: "MongoDB", category: "Backend & DB", iconName: "mongodb" },
  { name: "MySQL", category: "Backend & DB", iconName: "mysql" },
  { name: "Firebase", category: "Backend & DB", iconName: "firebase" },

  // Tools & Cloud
  { name: "Git", category: "Tools & Cloud", iconName: "git" },
  { name: "GitHub", category: "Tools & Cloud", iconName: "github" },
  { name: "Vercel", category: "Tools & Cloud", iconName: "vercel" },
  { name: "Render", category: "Tools & Cloud", iconName: "render" },
  { name: "Clerk", category: "Tools & Cloud", iconName: "clerk" },
];

export const PROJECTS: Project[] = [
  {
    id: "registration-portal",
    title: "Registration Portal",
    description: "Created a registration portal for our college where 150 teams registered, allowing users to view event details. Featured a responsive design and integrated with a MongoDB database for secure data storage.",
    tags: ["HTML", "CSS", "JS", "Node.js", "Express", "MongoDB", "Vercel", "Render", "Git", "GitHub"],
    liveUrl: "https://hackwithvizag.com",
    repoUrl: "https://github.com/Lohith-Varma/Hack-with-Vizag-3.0",
    image: "/registration.png",
  },
  {
    id: "acavision",
    title: "AcaVision",
    description: "A smart academic management dashboard that streamlines event tracking and student participation with real-time analytics, built using React and Tailwind CSS.",
    tags: ["React", "Clerk", "Tailwind CSS", "Vercel", "Git", "GitHub"],
    liveUrl: "https://aca-vision.vercel.app/",
    repoUrl: "https://github.com/siddu0426/AcaVision",
    image: "/AcaVision.png",
  },
  {
    id: "movie-search-app",
    title: "Movie Search Application",
    description: "An application built using the OMDB API to search for movies and view details about them. Features a responsive design and lets users save favorite movies to a watchlist.",
    tags: ["HTML", "CSS", "JS", "API", "Git", "GitHub", "Vercel"],
    liveUrl: "https://movie-search-application-eta.vercel.app/",
    repoUrl: "https://github.com/siddu0426/full-stack-dev/tree/main/Movie%20app%20using%20API",
    image: "/MovieSearchApp.png",
  },
];
