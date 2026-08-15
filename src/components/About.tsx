'use client';

import React from 'react';
import AnimatedSection from './AnimatedSection';
import { PERSONAL_INFO } from '@/data/constants';
import { Code2, Zap, Rocket, GraduationCap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Fast & Efficient",
      desc: "Creating elegant solutions in the least amount of time without sacrificing quality.",
    },
    {
      icon: <Rocket className="w-5 h-5 text-blue-500" />,
      title: "Scalable Web Apps",
      desc: "Building high-performance web applications using modern, cutting-edge technology stacks.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-emerald-500" />,
      title: "Clean Architecture",
      desc: "Strong focus on maintainable codebases, modern standards, and smooth UX.",
    },
  ];

  return (
    <AnimatedSection id="about" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Section Header & Main Text */}
          <div className="w-full md:w-3/5 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                Biography
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                About Me
              </h2>
              <div className="h-1.5 w-16 bg-blue-600 rounded-full mt-3" />
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-base sm:text-lg">
              {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Key Highlight Cards */}
          <div className="w-full md:w-2/5 space-y-4 pt-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              What Driving Me
            </h3>
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
