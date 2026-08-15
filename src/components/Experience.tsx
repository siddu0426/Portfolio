'use client';

import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Briefcase, Calendar, PlusCircle, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Work Experience
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 rounded-full mx-auto mt-3" />
        </div>

        {/* Styled Placeholder Container */}
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-dashed border-slate-300 dark:border-slate-800 pl-6 sm:pl-8 space-y-12">
            
            {/* Timeline Placeholder Card */}
            <div className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-5 w-5 rounded-full bg-blue-500/20 border-2 border-blue-600 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-dashed border-slate-300 dark:border-slate-800 shadow-sm text-center sm:text-left space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  Section Ready
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Professional Journey & History
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                  This timeline component is structured and styled to showcase upcoming roles, internships, and professional achievements.
                </p>
                <div className="pt-2 text-xs font-medium text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Experience history entries will appear here.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
