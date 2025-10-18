import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import { SKILLS } from "../constants";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <section data-aos="fade-up" className="py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            data-aos="fade-up"
            className="bg-neutral-400 hover:scale-105 hover:bg-neutral-600 hover:cursor-pointer hover:text-neutral-50 p-4 rounded-lg flex flex-col items-center justify-center gap-2 border border-muted/20 hover:border-primary/50 transition-all duration-300"
          >
            <div className="text-primary text-3xl md:text-4xl">{skill.icon}</div>
            <span className="text-sm md:text-base text-subtle text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
