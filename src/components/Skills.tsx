'use client';

import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { SKILLS, Skill } from '@/data/constants';
import {
  Code,
  Terminal,
  Database,
  Globe,
  Layers,
  Cpu,
  Server,
  Cloud,
  Lock,
  GitBranch,
  Github,
  Box,
  Flame,
  CheckCircle2
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Languages', 'Frontend', 'Backend & DB', 'Tools & Cloud'];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'c':
        return <Terminal className="w-6 h-6 text-blue-500" />;
      case 'java':
        return <Cpu className="w-6 h-6 text-amber-600" />;
      case 'python':
        return <Code className="w-6 h-6 text-yellow-500" />;
      case 'sql':
      case 'mysql':
        return <Database className="w-6 h-6 text-cyan-600" />;
      case 'javascript':
        return <Code className="w-6 h-6 text-yellow-400" />;
      case 'html5':
      case 'css3':
        return <Globe className="w-6 h-6 text-orange-500" />;
      case 'react':
        return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'tailwind':
        return <Layers className="w-6 h-6 text-sky-400" />;
      case 'nodejs':
      case 'express':
        return <Server className="w-6 h-6 text-emerald-500" />;
      case 'mongodb':
        return <Database className="w-6 h-6 text-emerald-600" />;
      case 'firebase':
        return <Flame className="w-6 h-6 text-amber-500" />;
      case 'git':
        return <GitBranch className="w-6 h-6 text-red-500" />;
      case 'github':
        return <Github className="w-6 h-6 text-slate-800 dark:text-slate-200" />;
      case 'vercel':
      case 'render':
        return <Cloud className="w-6 h-6 text-blue-400" />;
      case 'clerk':
        return <Lock className="w-6 h-6 text-indigo-500" />;
      default:
        return <Box className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <AnimatedSection id="skills" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Skills & Technologies
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 rounded-full mx-auto mt-3" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5"
            >
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                {getSkillIcon(skill.iconName)}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                  {skill.name}
                </h3>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
