'use client';

import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/constants';
import { FileText, Mail, ArrowUpRight, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'mail':
        return <Mail className="w-5 h-5" />;
      default:
        return <ArrowUpRight className="w-5 h-5" />;
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/10 dark:bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          {/* Name & Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 tracking-tight"
          >
            {PERSONAL_INFO.title}
          </motion.p>

          {/* Hero Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal"
          >
            "{PERSONAL_INFO.heroSubtext}"
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] shadow-lg shadow-blue-500/25 dark:shadow-blue-600/20 transition-all"
            >
              <Mail className="w-4 h-4" />
              Say Hello
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700/90 border border-slate-200 dark:border-slate-700 active:scale-[0.98] transition-all"
            >
              <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Resume
            </a>
          </motion.div>

          {/* Social Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-4"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Connect:
            </span>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-110"
                >
                  {getSocialIcon(social.iconName)}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
