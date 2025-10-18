import React from 'react';
// import registration from 'public/images/registration.png';
// import AcaVision from 'public/images/AcaVision.png'; 
// import MovieSearchApp from 'public/images/MovieSearchApp.png';

import {
  CodeBracketIcon,
  CpuChipIcon,
  CloudIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  BoltIcon
} from './components/icons/TechIcons';

export const SKILLS = [
  { name: 'C', icon: <CodeBracketIcon className="w-8 h-8" /> },
  { name: 'Java', icon: <CodeBracketIcon className="w-8 h-8" /> },
  { name: 'Python', icon: <CodeBracketIcon className="w-8 h-8" /> },
  { name: 'SQL', icon: <CodeBracketIcon className="w-8 h-8" /> },
  { name: 'HTML5', icon: <CodeBracketIcon className="w-8 h-8" /> },
  { name: 'CSS3', icon: <CodeBracketIcon className="w-8 h-8" /> },
  { name: 'JavaScript', icon: <CodeBracketIcon className="w-8 h-8" /> },
  { name: 'React', icon: <CodeBracketIcon className="w-8 h-8" /> },
  { name: 'Tailwind CSS', icon: <CodeBracketIcon className="w-8 h-8" /> },
  { name: 'Node.js', icon: <CpuChipIcon className="w-8 h-8" /> },
  { name: 'express.js', icon: <WrenchScrewdriverIcon className="w-8 h-8" /> },
  { name: 'MongoDb', icon: <CircleStackIcon className="w-8 h-8" /> },
  { name: 'MySQL', icon: <CloudIcon className="w-8 h-8" /> },
  { name: 'firebase', icon: <BoltIcon className="w-8 h-8" /> },
  { name: 'Git', icon: <CodeBracketIcon className="w-8 h-8" /> },
  { name: 'GitHub', icon: <CodeBracketIcon className="w-8 h-8" /> },
  { name: 'Vercel', icon: <CloudIcon className="w-8 h-8" /> },
  { name: 'Render', icon: <CloudIcon className="w-8 h-8" /> },
  { name: 'Clerk', icon: <WrenchScrewdriverIcon className="w-8 h-8" /> },
];

export const EXPERIENCES = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Innovate Inc.',
    duration: '2021 - Present',
    description: [
      'Led the development of a high-performance, responsive web application using React and TypeScript, resulting in a 40% increase in user engagement.',
      'Architected and implemented a new design system with Tailwind CSS, ensuring UI consistency across all products.',
      'Mentored junior developers, conducted code reviews, and promoted best practices in software development.'
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Tech Solutions',
    duration: '2018 - 2021',
    description: [
      'Developed and maintained features for a large-scale e-commerce platform using Next.js.',
      'Collaborated with backend teams to integrate RESTful APIs and GraphQL endpoints.',
      'Improved application performance by optimizing component rendering and state management.'
    ],
  },
  {
    role: 'Junior Developer',
    company: 'Code Crafters',
    duration: '2016 - 2018',
    description: [
      'Assisted in building client websites using HTML, CSS, and JavaScript.',
      'Gained experience with version control systems like Git and agile development methodologies.',
      'Contributed to the development of internal tools and automation scripts.'
    ],
  },
];

export const PROJECTS = [
  {
    title: 'Registration Portal',
    description: 'Created a registration portal for our college where "150" teams have been registered, allowing users to view event details. The portal featured a responsive design and integrated with a mongodb database for secure data storage.',
    image: "images/registration.png",
    tags: ['Html', 'css', 'js', 'node.js', 'express', 'Mongodb', 'Vercel', 'Render', 'git', 'github'],
    liveUrl: 'https://hackwithvizag.com',
    repoUrl: 'https://github.com/Lohith-Varma/Hack-with-Vizag-3.0',
  },
  {
    title: 'AcaVision',
    description: 'AcaVision is a smart academic management dashboard that streamlines event tracking and student participation with real-time analytics, built using React, Tailwind CSS.',
    image: "images/AcaVision.png",
    tags: ['React', 'Clerk', 'Tailwindcss', 'Vercel', 'git', 'github'],
    liveUrl: 'https://aca-vision.vercel.app/',
    repoUrl: 'https://github.com/siddu0426/AcaVision',
  },
  {
    title: 'Movie Search Application',
    description: 'An application build using omdb api to search for movies and view details about them. The app features a responsive design and allows users to save their favorite movies to a watchlist.',
    image: 'images/MovieSearchApp.png',
    tags: ['Html', 'css', 'js', 'api', 'git', 'github', 'vercel'],
    liveUrl: 'https://movie-search-application-eta.vercel.app/',
    repoUrl: 'https://github.com/siddu0426/full-stack-dev/tree/main/Movie%20app%20using%20API',
  },
];

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills ', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/siddu0426',
  linkedin: 'https://www.linkedin.com/in/siddhartha-mylavarapu/',
  twitter: 'https://x.com/Siddhar63378629'
};
