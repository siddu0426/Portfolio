import React from 'react';
import { PROJECTS } from '../constants';
import { GithubIcon, ExternalLinkIcon } from './icons/SocialIcons';

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="bg-surface rounded-lg overflow-hidden group border border-muted/20 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-text">{project.title}</h3>
                <div className="flex items-center gap-4 text-subtle">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <GithubIcon className="h-6 w-6" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <ExternalLinkIcon className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-muted mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
