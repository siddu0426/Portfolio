import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="max-w-2xl mx-auto text-muted mb-8">
        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. I'll get back to you as soon as possible!
      </p>
      <a
        href="mailto:johndoe@email.com"
        className="inline-block bg-primary text-background font-medium py-3 px-8 rounded-md hover:bg-primary-hover transition-all duration-300 transform hover:scale-105"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
