import React from 'react';

const About = () => {
  return (
    <section id="about" className="pt-24 p-12 bg-gradient-to-r from-gray-100 to-gray-300 text-gray-900 animate-fadeIn duration-1000">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 drop-shadow-lg">About Me</h2>
        <p className="text-lg max-w-2xl mx-auto animate-slideInUp">
          Hi, I'm Kundan Kumar, a passionate and dedicated full-stack developer with expertise in modern web technologies.
          I specialize in building responsive, user-friendly, and high-performance web applications. My skill set includes
          JavaScript, React, Node.js, Express, MongoDB, and more. I love solving complex problems, optimizing performance,
          and continuously learning new technologies to stay ahead in the ever-evolving tech world.
        </p>
        <p className="text-lg max-w-2xl mx-auto mt-4 animate-slideInUp delay-200">
          When I'm not coding, you can find me exploring open-source projects, contributing to the developer community,
          or working on innovative personal projects. My goal is to create impactful digital experiences that make a difference.
        </p>
      </div>
    </section>
  );
};

export default About;