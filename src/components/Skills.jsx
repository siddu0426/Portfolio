import React from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { SKILLS } from "../constants";

function Skills() {
      useEffect(() => {
      Aos.init({ duration: 2000, once: true });
    }, []);

    return(
        <>
        {/* Skills Grid */}
<section data-aos="fade-up" className="py-24 w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
  <div className="md:col-span-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      {SKILLS.map((skill) => (
        <div
          key={skill.name}
          data-aos="fade-up"
          className="bg-neutral-400 hover:scale-115 hover:bg-neutral-600 hover:cursor-pointer hover:text-neutral-50 p-4 rounded-lg flex flex-col items-center justify-center gap-2 border border-muted/20 hover:border-primary/50 transition-all"
        >
          <div className="text-primary">{skill.icon}</div>
          <span className="text-sm text-subtle">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

        </>
    )
}

export default Skills;