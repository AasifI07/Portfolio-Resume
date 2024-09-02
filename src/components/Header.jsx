import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const routeElements = document.querySelectorAll('.header__route');
    routeElements.forEach(route => {
      route.addEventListener('mouseover', () => {
        route.nextElementSibling.classList.add('bg-indigo-500');
      });
      route.addEventListener('mouseout', () => {
        route.nextElementSibling.classList.remove('bg-indigo-500');
      });
    });
    return () => {
      routeElements.forEach(route => {
        route.removeEventListener('mouseover', () => {
          route.nextElementSibling.classList.add('bg-indigo-500');
        });
        route.removeEventListener('mouseout', () => {
          route.nextElementSibling.classList.remove('bg-indigo-500');
        });
      });
    };
  }, []);

  const toggleNavbar = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold space-x-1 flex items-center">
          <span className="inline-block animate-fade-down">P</span>
          <span className="inline-block animate-fade-down delay-700">o</span>
          <span className="inline-block animate-fade-down delay-800">r</span>
          <span className="inline-block animate-fade-down delay-900">t</span>
          <span className="inline-block animate-fade-down delay-1000">f</span>
          <span className="inline-block animate-fade-down delay-1100">o</span>
          <span className="inline-block animate-fade-down delay-1200">l</span>
          <span className="inline-block animate-fade-down delay-1300">i</span>
          <span className="inline-block animate-fade-down delay-1400">o</span>
        </div>

        <button
          className="flex flex-col items-center justify-center cursor-pointer lg:hidden"
          onClick={toggleNavbar}
        >
          <span className={`block w-6 h-1 bg-white mb-1 transition-transform ${isNavVisible ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`block w-6 h-1 bg-white mb-1 transition-opacity ${isNavVisible ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-1 bg-white transition-transform ${isNavVisible ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </button>

        <nav className={`lg:flex lg:space-x-8 lg:items-center absolute lg:static bg-gray-900 lg:bg-transparent w-full lg:w-auto top-16 lg:top-auto left-0 lg:left-auto lg:justify-center ${isNavVisible ? 'flex' : 'hidden'}`}>
         
   
         <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:items-center">
            <li className="relative text-lg lg:text-base p-2 lg:p-0">
  
              <a href="/about/about" className="hover:text-indigo-400">About</a>
              <div className="absolute inset-0 bg-transparent transition-all duration-300"></div>
            </li>
           
            <li className="relative text-lg lg:text-base p-2 lg:p-0">
              <a href="#contact" className="hover:text-indigo-400">Contact me</a>
              <div className="absolute inset-0 bg-transparent transition-all duration-300"></div>
            </li>
          </ul>
  
        </nav>

        <div className="flex space-x-4">
          <a href="http://linkedin.com/in/aasif-i-93a27913a" className="text-white hover:text-blue-600">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/AasifI07" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
         
        </div>
      </div>
    </header>
  );
};

export default Header;
