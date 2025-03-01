import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md fixed w-full top-0 z-50 animate-fadeIn">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wide">Kundan Kumar</h1>
        <nav className="mt-2 space-x-6">
          <a href="#about" className="hover:text-gray-400 transition duration-300">About</a>
          <a href="#projects" className="hover:text-gray-400 transition duration-300">Projects</a>
          <a href="#skills" className="hover:text-gray-400 transition duration-300">Skills</a>
          <a href="#contact" className="hover:text-gray-400 transition duration-300">Contact</a>
        </nav>
        <div className="flex space-x-4">
          <a href="" className="text-white hover:text-gray-400 transition duration-300">
            <FaEnvelope size={24} />
          </a>
          <a href="https://github.com/kundan" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;