import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './icons/SocialIcons';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center text-center md:text-left py-20"
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-text to-subtle text-transparent bg-clip-text">
          John Doe
        </h1>
        <h2 className="mt-3 text-2xl md:text-4xl font-semibold text-subtle">
          Software Developer & Creative Coder
        </h2>
        <p className="mt-6 text-lg text-muted max-w-xl mx-auto md:mx-0">
          I build beautiful, responsive, and high-performance web applications
          with a passion for user experience and clean code.
        </p>

        <div className="mt-8 flex justify-center md:justify-start items-center gap-6">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            <GithubIcon className="h-7 w-7" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            <LinkedinIcon className="h-7 w-7" />
          </a>
          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            <TwitterIcon className="h-7 w-7" />
          </a>
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-primary text-background font-medium py-3 px-8 rounded-md hover:bg-primary-hover transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
