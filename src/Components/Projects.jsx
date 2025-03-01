import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      _id: 1,
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with authentication, product management, and payment integration."
    },
    {
      _id: 2,
      name: "Portfolio Website",
      description: "A personal portfolio website showcasing skills, projects, and contact details with a modern UI."
    },
    {
      _id: 3,
      name: "AI-Powered Fitness Tracker",
      description: "A fitness tracking app using AI to recognize physical activities and provide health insights."
    }
  ]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <section id="projects" className="p-8 bg-gradient-to-b from-gray-100 to-gray-300 animate-fadeIn">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Projects</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <li key={project._id} className="mb-8 p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <h4 className="font-semibold mb-2 text-indigo-600">Features:</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Responsive Design</li>
                <li>Attractive UI/UX</li>
                <li>User-Friendly Interface</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
