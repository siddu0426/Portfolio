import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>

      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row gap-8 md:gap-12 text-center md:text-left items-center"
      >
        {/* About Text */}
        <div className="md:w-3/4">
          <p className="text-muted leading-relaxed text-base md:text-lg">
            I'm a passionate Software Developer with a knack for creating elegant solutions in the least amount of time. I have extensive experience in building scalable web applications with modern technology stacks. My journey in software development started with a deep curiosity for how things work, and it has evolved into a career where I can build, innovate, and solve complex problems.
          </p>
          <br />
          <p className="text-muted leading-relaxed text-base md:text-lg">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring aspiring developers. I'm always eager to learn and take on new challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
