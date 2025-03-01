import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 shadow-md animate-fadeInUp">
      <div className="container mx-auto">
        <p className="text-gray-400">&copy; 2025 Kundan Kumar. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="mailto:kundan@example.com" className="text-gray-400 hover:text-white transition duration-300 mr-4">Email</a>
          <a href="https://github.com/kundan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
