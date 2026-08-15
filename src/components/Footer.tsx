'use client';

import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/constants';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'twitter':
        return <Twitter className="w-4 h-4" />;
      case 'mail':
        return <Mail className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070a11]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">
          © {currentYear} {PERSONAL_INFO.name}. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-all"
            >
              {getSocialIcon(social.iconName)}
            </a>
          ))}

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 ml-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-800"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
