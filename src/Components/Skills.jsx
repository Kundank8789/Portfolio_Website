import React from 'react';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js'];

  return (
    <section id="skills" className="p-12 bg-gradient-to-b from-gray-100 to-gray-300 animate-fadeIn">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Skills</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <li key={index} className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-600">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
