'use client';

import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { PERSONAL_INFO } from '@/data/constants';
import { Mail, Copy, Check, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatedSection id="contact" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-slate-800/60 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-blue-600/10 dark:bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 mb-4 shadow-sm">
          <MessageSquare className="w-3.5 h-3.5" />
          Let's Work Together
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {PERSONAL_INFO.contactHeading}
        </h2>
        <div className="h-1.5 w-16 bg-blue-600 rounded-full mx-auto mt-4 mb-6" />

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          {PERSONAL_INFO.contactText}
        </p>

        {/* Email Card & Copy Action */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-xl max-w-xl mx-auto space-y-6">
          <div className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <div className="flex items-center gap-3 overflow-hidden text-left pl-2">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                {PERSONAL_INFO.email}
              </span>
            </div>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600 transition-all shrink-0"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Say Hello Button */}
          <div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl font-bold text-base text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] shadow-lg shadow-blue-500/25 dark:shadow-blue-600/20 transition-all"
            >
              <Send className="w-4 h-4" />
              Say Hello
            </a>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
