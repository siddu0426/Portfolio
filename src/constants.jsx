import React from 'react';
import registration from './assets/registration.png';
import {
  CodeBracketIcon,
  CpuChipIcon,
  CloudIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  BoltIcon
} from './components/icons/TechIcons';

export const SKILLS = [
  { name: 'TypeScript', icon: <CodeBracketIcon className="w-8 h-8" /> },
  { name: 'React', icon: <CodeBracketIcon className="w-8 h-8" /> },
  { name: 'Node.js', icon: <CpuChipIcon className="w-8 h-8" /> },
  { name: 'Python', icon: <CodeBracketIcon className="w-8 h-8" /> },
  { name: 'GraphQL', icon: <CircleStackIcon className="w-8 h-8" /> },
  { name: 'AWS', icon: <CloudIcon className="w-8 h-8" /> },
  { name: 'Docker', icon: <WrenchScrewdriverIcon className="w-8 h-8" /> },
  { name: 'Next.js', icon: <BoltIcon className="w-8 h-8" /> },
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
    image: 'https://drive.google.com/file/d/1fezFtI7ztFZItRxNVfq-ES_Ckbvizf-r/view?usp=sharing',
    tags: ['Html', 'css', 'js', 'node.js', 'express', 'Mongodb', 'Vercel', 'Render'],
    liveUrl: 'https://hackwithvizag.com',
    repoUrl: '#',
  },
  {
    title: 'Project Beta',
    description: 'An e-commerce platform with a focus on user experience and performance, featuring a modern, clean design.',
    image: 'https://picsum.photos/seed/beta/600/400',
    tags: ['Next.js', 'GraphQL', 'Stripe', 'Vercel'],
    liveUrl: '#',
  },
  {
    title: 'Project Gamma',
    description: 'A data visualization dashboard that provides real-time insights from various data sources.',
    image: 'https://picsum.photos/seed/gamma/600/400',
    tags: ['React', 'D3.js', 'Firebase', 'Python'],
    repoUrl: '#',
  },
  {
    title: 'Project Delta',
    description: 'A mobile-first social networking application for connecting people with shared interests and hobbies.',
    image: 'https://picsum.photos/seed/delta/600/400',
    tags: ['React Native', 'AWS Amplify', 'GraphQL'],
    liveUrl: '#',
    repoUrl: '#',
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
