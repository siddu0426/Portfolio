import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { SKILLS } from '../constants';

const About = () => {
    useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);


  return (
    <section id="about" className="py-24 w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <div data-aos="fade-up" className="gap-12 text-center">
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

      </div>
    </section>
  );
};

export default About;
