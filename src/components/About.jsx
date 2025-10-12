import React from 'react';
import { SKILLS } from '../constants';

const About = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <div className="grid md:grid-cols-5 gap-12 items-center">
        {/* About Text */}
        <div className="md:col-span-3">
          <p className="text-muted leading-relaxed">
            I'm a passionate Software Developer with a knack for creating elegant solutions in the least amount of time. I have extensive experience in building scalable web applications with modern technology stacks. My journey in software development started with a deep curiosity for how things work, and it has evolved into a career where I can build, innovate, and solve complex problems.
          </p>
          <br />
          <p className="text-muted leading-relaxed">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring aspiring developers. I'm always eager to learn and take on new challenges.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="bg-surface p-4 rounded-lg flex flex-col items-center justify-center gap-2 border border-muted/20 hover:border-primary/50 transition-all"
              >
                <div className="text-primary">{skill.icon}</div>
                <span className="text-sm text-subtle">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
