import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './icons/SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-muted/20">
      <div className="container mx-auto max-w-5xl px-6 sm:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-subtle text-sm">
            &copy; {new Date().getFullYear()} Siddhartha Mylavarapu. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
            >
              <TwitterIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
